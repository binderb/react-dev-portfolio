import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import Resume from '../pages/Resume';

export default function Body ({currentPage}) {
  return (
    <div className='flex flex-grow bg-gradient-to-b from-skyblue to-seafoam text-dark p-4'>
      {currentPage.name === 'about' ? <About/> : null}
      {currentPage.name === 'portfolio' ? <Portfolio/> : null}
      {currentPage.name === 'contact' ? <Contact/> : null}
      {currentPage.name === 'resume' ? <Resume/> : null}
    </div>
  )
}