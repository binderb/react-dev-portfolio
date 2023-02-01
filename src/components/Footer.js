export default function Footer () {
  return (
    <footer className='text-center text-highlight py-4 text-[12px]'>
      <div className='flex justify-center text-[36px] mb-2'>
        <a aria-label="github" className='hover:text-white duration-200 px-2' href='https://github.com/binderb'><i className='fa-brands fa-github'></i></a>
        <a aria-label="linkedin" className='hover:text-white duration-200 px-2' href='https://github.com/binderb'><i className='fa-brands fa-linkedin'></i></a>
      </div>
      &copy; Ben Binder. All rights reserved.
    </footer>
  );
}