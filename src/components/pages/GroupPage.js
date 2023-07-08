import React, { useState } from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';
import '../../../src/GroupPage.css';

const GroupPage = () => {
  const [selectedGroup, setSelectedGroup] = useState(null);

  const groups = [
    {
      name: 'A',
      marks: {
        english: 90,
        marathi: 85,
        hindi: 80
      }
    },
    {
      name: 'B',
      marks: {
        english: 75,
        marathi: 80,
        hindi: 95
      }
    },
    {
      name: 'C',
      marks: {
        english: 85,
        marathi: 90,
        hindi: 75
      }
    }
  ];

  const disability = [
    {
      disability_count:1,
      student_count:3,
      disability_type:"physical"
    },
    {
      disability_count:1,
      student_count:3,
      disability_type:"visual"
    },
    {
      disability_count:1,
      student_count:3,
      disability_type:"mental"
    },
  ]

  const handleCardClick = (groupName) => {
    setSelectedGroup(groupName);
  };

  const renderGroupCards = () => {
    return groups.map((group) => (
      <div
        key={group.name}
        onClick={() => handleCardClick(group.name)}
        className={`group-card ${selectedGroup === group.name ? 'selected' : ''}`}
      >
        <h3>Group {group.name}</h3>
        {/* <p>English: {group.marks.english}</p>
        <p>Marathi: {group.marks.marathi}</p>
        <p>Hindi: {group.marks.hindi}</p> */}
      </div>
    ));
  };

  const renderBarChart = () => {
  if (selectedGroup) {
    const selectedGroupData = groups.find((group) => group.name === selectedGroup);
    const { english, marathi, hindi } = selectedGroupData.marks;

    const data = [
      { subject: 'English', marks: english },
      { subject: 'Marathi', marks: marathi },
      { subject: 'Hindi', marks: hindi }
    ];

    return (
      <div className="bar-chart-container" >
        <VictoryChart
          theme={VictoryTheme.material}
        >
          <VictoryAxis dependentAxis />
          <VictoryAxis tickFormat={['English', 'Marathi', 'Hindi']} />
          <VictoryBar data={data} x="subject" y="marks" />
        </VictoryChart>
      </div>
    );
  }
  return null;
};


  return (
    <div>
      <h2>Group Page</h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {renderGroupCards()}
      </div>
      {renderBarChart()}
    </div>
  );
};

export default GroupPage;
