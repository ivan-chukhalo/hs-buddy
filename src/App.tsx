import "./App.css";
import Menu from "./components/Menu";
import { useState, useEffect } from "react";
import { cardType } from "./types";

function App(): JSX.Element {
  const [cards, setCards] = useState<cardType[]>([]);

  const fetchCards = async () => {
    let allCards: cardType[] = [];
    for (let page = 1; ; page++) {
      const response = await fetch(
        `https://us.api.blizzard.com/hearthstone/cards?locale=en_US&gameMode=battlegrounds&tier=hero%2C3&page=${page}&access_token=EUjZGiDh44uSd0866TU2SPmg9hytrB6FzW`
      );
      const data = await response.json();

      if (data.cards.length === 0) {
        break;
      }

      allCards = allCards.concat(data.cards);
      page++;
    }

    return allCards;
  };

  useEffect(() => {
    fetchCards().then((cards) => {
      setCards(cards);
    });
  }, []);

  return (
    <>
      <Menu />
      <div className="container mx-auto flex flex-wrap">
        {cards.map((card): JSX.Element => {
          return <img src={card.image} width="240px" />;
        })}
      </div>
    </>
  );
}

export default App;
