import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import Resume from '../pages/Resume';

export default function Body ({currentPage}) {
  return (
    <main className='flex flex-col flex-grow bg-gradient-to-b from-skyblue to-seafoam text-dark p-6'>
      <h2 id='page-title' className='mt-5 mb-5 text-[36px] font-bold after:block after:bg-dark after:h-[5px] after:mt-2'>
        {currentPage.displayName}
      </h2>
      <section id='page-body' className='text-[20px] leading-relaxed'>
        {currentPage.name === 'about' ? <About/> : null}
        {currentPage.name === 'work' ? <Portfolio/> : null}
        {currentPage.name === 'contact' ? <Contact/> : null}
        {currentPage.name === 'resume' ? <Resume/> : null}
      </section>
    </main>
  )
}