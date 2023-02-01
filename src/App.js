import { useState } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  const pages = [
    { name: 'about', displayName: 'About Me' },
    { name: 'work', displayName: 'My Work' },
    { name: 'contact', displayName: 'Contact Me' },
    { name: 'resume', displayName: 'Resume' }
  ];

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <section className='flex flex-col h-screen'>
    <Header 
      pages={pages}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage} 
    />
    <Body
      currentPage={currentPage}
    />
    <Footer/>
    </section>
  )
}

export default App;
