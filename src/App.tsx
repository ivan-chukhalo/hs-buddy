import "./App.css";
import Menu from "./components/Menu";
import { useState, useEffect } from "react";

function App(): JSX.Element {
  const [cards, setCards] = useState<{ image: string }[]>([]);

  const fetchCards = async () => {
    let allCards: { image: string }[] = [];
    for (let page = 1; ; page++) {
      const response = await fetch(
        `https://us.api.blizzard.com/hearthstone/cards?locale=en_US&gameMode=battlegrounds&tier=hero%2C3&page=${page}&access_token=EUhqNw4v9Lzcw24772M1KDV7weR5AEdJIf`
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
