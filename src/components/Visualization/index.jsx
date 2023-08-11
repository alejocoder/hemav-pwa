import { ResponsiveBar } from '@nivo/bar';
import { ResponsivePie } from '@nivo/pie'
import { useContext, useEffect, useState } from 'react';
import "./styles.css"
import { AppContext } from '../../context/appContext';

export const VisualizationContainer = () => {

  const {pageNumber} = useContext(AppContext);


    const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${pageNumber}`
      );
      const data = await response.json();
      setData(data.results);
      console.log(data.results)
    }

    fetchData();
  }, [pageNumber]);


  // Calculate gender distribution
  const genderDistribution = data.reduce((acc, character) => {
    acc[character.gender] = (acc[character.gender] || 0) + 1;
    return acc;
  }, []);

  const genderData = Object.keys(genderDistribution).map((gender) => ({
    gender,
    count: genderDistribution[gender],
  }));

  // Calculate species distribution
  const speciesDistribution = data.reduce((acc, character) => {
    acc[character.species] = (acc[character.species] || 0) + 1;
    return acc;
  }, []);

  const speciesData = Object.keys(speciesDistribution).map((species) => ({
    id: species,
    label: species,
    value: speciesDistribution[species],
  }));

  return (
    <div className="visualization-container">
      <div className="visualization-card">
        <h2>Gender Distribution</h2>
        <ResponsiveBar
          data={genderData}
          keys={['count']}
          indexBy="gender"
          margin={{ top: 30, right: 30, bottom: 60, left: 60 }}
          padding={0.3}
          axisBottom={{
            tickRotation: -45,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendPosition: 'middle',
            legendOffset: -40,
          }}
        />
      </div>
      <div className="visualization-card">
        <h2>Species Distribution</h2>
        <ResponsivePie
          data={speciesData}
          margin={{ top: 30, right: 30, bottom: 60, left: 60 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          radialLabelsSkipAngle={10}
          radialLabelsTextXOffset={6}
          radialLabelsTextColor="#333333"
          radialLabelsLinkOffset={0}
          radialLabelsLinkDiagonalLength={16}
          radialLabelsLinkHorizontalLength={24}
          radialLabelsLinkStrokeWidth={1}
          radialLabelsLinkColor={{ from: 'color' }}
          slicesLabelsSkipAngle={10}
          slicesLabelsTextColor="#333333"
        />
      </div>
    </div>
  );
};
