import React, { useState } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import '../../../src/GroupPage.css';


const GroupPage = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (cardIndex) => {
    setActiveCard(cardIndex);
  };

  const renderBarChart = () => {
    if (activeCard === null) return null;

    const barChartData = {
      labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
      datasets: [
        {
          label: 'Bar Chart Data',
          data: [12, 19, 3, 5, 2],
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };

    return (
      <div className="chart">
        <h3>Bar Chart</h3>
        <Bar data={barChartData} />
      </div>
    );
  };

  const renderPieChart = () => {
    if (activeCard === null) return null;

    const pieChartData = {
      labels: ['Label 1', 'Label 2', 'Label 3'],
      datasets: [
        {
          label: 'Pie Chart Data',
          data: [30, 40, 30],
          backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)'],
          borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
          borderWidth: 1,
        },
      ],
    };

    return (
      <div className="chart">
        <h3>Pie Chart</h3>
        <Pie data={pieChartData} />
      </div>
    );
  };

  return (
    <div className="chart-page">
      <h2>Chart Page</h2>
      <div className="card-container">
        {[1, 2, 3, 4, 5, 6].map((cardIndex) => (
          <div
            key={cardIndex}
            className={`card ${activeCard === cardIndex ? 'active' : ''}`}
            onClick={() => handleCardClick(cardIndex)}
          >
            Card {cardIndex}
          </div>
        ))}
      </div>
      {renderBarChart()}
      {renderPieChart()}
    </div>
  );
};

export default GroupPage;
