export default function Footer () {
  return (
    <footer className='text-center text-highlight py-4 text-[12px]'>
      <div className='flex justify-center text-[36px] mb-2'>
        <a aria-label="github" className='hover:text-white duration-200 px-3' href='https://github.com/binderb'><i className='fa-brands fa-github'></i></a>
        <a aria-label="linkedin" className='hover:text-white duration-200 px-3' href='https://github.com/binderb'><i className='fa-brands fa-linkedin'></i></a>
        <a aria-label="youtube" className='hover:text-white duration-200 px-3' href='https://www.youtube.com/watch?v=AYMt8tslHW8&list=PLc5l3jBvOiftm-Y2dPwzv8A4_Bix9U7u1&index=1'><i className='fa-brands fa-youtube'></i></a>
      </div>
      &copy; Ben Binder. All rights reserved.
    </footer>
  );
}