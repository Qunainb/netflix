import cards_data from "../Cards_data";

import "../Components/TitleCard.css";

export default function TitleCard({ title }) {
  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular On Netflix"}</h2>
      <div className="card-list">
        {cards_data.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.image} />
            <p>{card.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
