import { useState } from "react";
import { capitalize } from '../utils/helpers';

export default function Nav ({pages, setCurrentPage}) {
  const [navOpen, setNavOpen] = useState(false);

  const handleToggle = () => {
    setNavOpen(!navOpen);
  }

  return (

    <nav className="text-highlight">

      {/* <button onClick={handleToggle}>{navOpen ? "Close" : "Open"}</button> */}
      <ul id="desktop-menu" className="flex">
      {pages.map((page) => (
        <li className="px-4 cursor-pointer" key={page.name} onClick={()=>setCurrentPage(page)}>
          {capitalize(page.name)}
        </li>
      ))}
      </ul>
    </nav>
  );
}