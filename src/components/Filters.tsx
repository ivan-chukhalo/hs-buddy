import { useState, MouseEvent } from "react";
import { entityType } from "../types";

const Filters = (): JSX.Element => {
  const [showList, setShowList] = useState<"block" | "hidden">("hidden");
  const [entity, setEntity] = useState<entityType>("All");

  const onEntityChose = (e: MouseEvent<HTMLButtonElement>) => {
    console.log((e.target as HTMLButtonElement).textContent);
    setEntity("All");
  };

  const showOrHide = () => {
    const showListValue = showList === "hidden" ? "block" : "hidden";
    setShowList(showListValue);
  };

  return (
    <div className="container mx-auto p-4 border-4 border-indigo-500/75">
      <div className="relative">
        <button onClick={showOrHide} className="bold">{entity}</button>
        <ul className={`${showList} absolute top-10 left-[-20px] px-4 border-4 border-indigo-500/75 bg-white`}>
          <li>
            <button onClick={onEntityChose} id="entity-all" value={"All"}>
              All
            </button>
          </li>
          <li>
            <button onClick={onEntityChose} id="entity-hero">
              Hero
            </button>
          </li>
          <li>
            <button onClick={onEntityChose} id="entity-minion">
              Minion
            </button>
          </li>
          <li>
            <button onClick={onEntityChose} id="entity-quest">
              Quest
            </button>
          </li>
          <li>
            <button onClick={onEntityChose} id="entity-reward">
              Reward
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Filters;
