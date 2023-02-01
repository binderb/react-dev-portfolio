import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import Resume from '../pages/Resume';
import resumePDF from '../files/benbinder_resume.pdf';

export default function Body ({currentPage}) {
  return (
    <main className='flex flex-col flex-grow bg-gradient-to-b from-skyblue to-seafoam text-dark p-6 sm:p-12'>
      <div className='mt-5 flex justify-between items-end'>
        <h2 id='page-title' className='text-[36px] font-bold'>
          {currentPage.displayName}
        </h2>
        {currentPage.name === 'resume' ? (
          <a
            className='rounded-lg mx-2 py-2 px-4 bg-dark hover:bg-darkhover text-highlight text-[18px] hover:text-white duration-200'
            href={resumePDF}
          >
            <i className='fa-solid fa-file-pdf mr-2'></i>PDF Version
          </a>
          ) : null}
      </div>
      <div className='mb-5 after:block after:bg-dark after:h-[5px] after:mt-2'></div>
      
      
      <section id='page-body' className='text-[20px] leading-relaxed'>
        {currentPage.name === 'about' ? <About/> : null}
        {currentPage.name === 'work' ? <Portfolio/> : null}
        {currentPage.name === 'contact' ? <Contact/> : null}
        {currentPage.name === 'resume' ? <Resume/> : null}
      </section>
    </main>
  )
}