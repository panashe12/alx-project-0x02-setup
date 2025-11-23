import React, { useState } from "react";
import Card from "../components/common/Card";
import PostModal from "../components/common/PostModal";
import { CardProps } from "../interfaces";

export default function HomePage() {
  const [cards, setCards] = useState<CardProps[]>([
    { title: "Card 1", content: "This is the first card." },
    { title: "Card 2", content: "This is the second card." },
  ]);

  const handleAddCard = (newCard: CardProps) => {
    setCards([newCard, ...cards]);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Home Page</h1>
      <p>Welcome to the Home page!</p>

      {/* Modal Button */}
      <PostModal onSubmit={handleAddCard} />

      {/* Display cards */}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {cards.map((card, index) => (
          <Card key={index} title={card.title} content={card.content} />
        ))}
      </div>
    </div>
  );
}

