import React from 'react';
import '../../../src/CardsPage.css';

const Card = ({ title, content }) => {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <p className="card-content">{content}</p>
    </div>
  );
};

const CardsPage = () => {
  const cardData = [
    {
      title: 'Card 1',
      content: 'This is the content of Card 1',
    },
    {
      title: 'Card 2',
      content: 'This is the content of Card 2',
    },
    {
      title: 'Card 3',
      content: 'This is the content of Card 3',
    },
  ];

  return (
    <div className="card-page">
      <h2 className="page-title">Card Page</h2>
      <div className="card-container">
        {cardData.map((card, index) => (
          <Card key={index} title={card.title} content={card.content} />
        ))}
      </div>
    </div>
  );
};

export default CardsPage;
