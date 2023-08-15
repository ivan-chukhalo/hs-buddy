// import { useMenu } from "../hooks/useMenu";
import { useState } from "react";

export default function Menu() {
  const [displayMenu, setDisplayMenu] = useState<"hidden" | "flex flex-col">(
    "hidden"
  );
  const menuClick = () => {
    const displayMenuValue =
      displayMenu === "hidden" ? "flex flex-col" : "hidden";
    setDisplayMenu(displayMenuValue);
  };
  return (
    <nav className="container flex justify-between px-4 py-8 mx-auto">
      <div>
        <h3 className="text-2xl font-medium">HS-Buddy</h3>
      </div>
      <div className="flex space-x-3">
        <div className={`MENU ${displayMenu} flex-col lg:flex lg:flex-row lg:space-x-8`}>
          <a href="#" className="inline-block align-top">Library</a>
          <a href="#" className="inline-block align-top">Game</a>
          <a href="#" className="inline-block align-top">About</a>
          <a href="#" className="inline-block align-top">Account</a>
        </div>
        <div className="BURGER flex lg:hidden" onClick={menuClick}>
          <div className="space-y-2">
            <span className={`block w-8 h-0.5 bg-gray-600 ${displayMenu !== 'hidden' ? 'animate-pulse' : ''}`}></span>  // можливо варто якось спростити логіку анімації
            <span className={`block w-8 h-0.5 bg-gray-600 ${displayMenu !== 'hidden' ? 'animate-pulse' : ''}`}></span>
            <span className={`block w-8 h-0.5 bg-gray-600 ${displayMenu !== 'hidden' ? 'animate-pulse' : ''}`}></span>
          </div>
        </div>
      </div>
    </nav>
  );
}
