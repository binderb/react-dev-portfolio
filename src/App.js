import { useState } from 'react';
import Header from './components/Header';
import Body from './components/Body';

function App() {
  const pages = [
    { name: 'about' },
    { name: 'portfolio' },
    { name: 'contact' },
    { name: 'resume' }
  ];

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <section className='flex flex-col h-screen'>
    <Header 
      pages={pages}
      setCurrentPage={setCurrentPage} 
    />
    <Body
      currentPage={currentPage}
    />
    </section>
  )
}

export default App;
