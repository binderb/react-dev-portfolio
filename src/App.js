import { useState } from 'react';
import Header from './components/Header';

function App() {
  const pages = [
    { name: 'about' },
    { name: 'portfolio' },
    { name: 'contact' },
    { name: 'resume' }
  ];

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <>
    <Header 
      pages={pages}
      setCurrentPage={setCurrentPage} 
    />
    <div className="text-highlight">Current page is: {currentPage.name}</div>
    </>
  )
}

export default App;
