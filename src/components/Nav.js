import { useState } from "react";

export default function Nav (props) {
  const {pages, setCurrentPage} = props;
  const [navOpen, setNavOpen] = useState(false);

  const handleToggle = () => {
    setNavOpen(!navOpen);
  }

  return (

    <nav className="text-highlight">
      <button onClick={handleToggle}>{navOpen ? "Close" : "Open"}</button>
      <ul>
      {pages.map((page) => (
        <li key={page.name} onClick={()=>setCurrentPage(page)}>
          {page.name}
        </li>
      ))}
      </ul>
    </nav>
  );
}