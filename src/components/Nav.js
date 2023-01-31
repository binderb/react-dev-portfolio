// import { useState } from "react";
import { capitalize } from '../utils/helpers';

export default function Nav ({pages, currentPage, setCurrentPage}) {
  // const [navOpen, setNavOpen] = useState(false);

  // const handleToggle = () => {
  //   setNavOpen(!navOpen);
  // }

  return (

    <nav className='pt-3 sm:pt-0'>

      {/* <button onClick={handleToggle}>{navOpen ? "Close" : "Open"}</button> */}
      <ul id="desktop-menu" className="flex">
      {pages.map((page) => (
        <li className={`text-bold text-[18px] mx-1 sm:last:mr-5 px-3 py-2 cursor-pointer hover:text-white duration-200 ${page.name === currentPage.name ? 'text-dark bg-highlight hover:text-dark' : 'text-highlight'}`} key={page.name} onClick={()=>setCurrentPage(page)}>
          {capitalize(page.name)}
        </li>
      ))}
      </ul>
    </nav>
  );
}