export default function Project ({project}) {
  return (
    <div className='relative border-[5px] border-highlight group overflow-hidden'>
      {/* Banner */}
      <div className='peer absolute bottom-[15%] w-[100%]'>
        {/* Title Card */}
        <div className='absolute bottom-0 w-[100%] duration-200 z-[3] flex overflow-hidden'>
          <div className='flex flex-col w-[60%] bg-highlight p-3'>
            <div className='font-bold text-[18px]'>{project.name}</div>
            <div className='font-light text-[16px]'>{project.subtitle}</div>
          </div>
          {/* Links Menu */}
          <div className='flex flex-col bottom-0 bg-highlight text-dark p-2 m-0 duration-200 z-[-1] w-0 group-hover:w-[40%]'>
            <div className='flex justify-end'>
              <a className='flex flex-col items-center font-bold hover:text-darkhover duration-200 px-2' href={project.url}>
                <i className='fa-solid fa-circle-play p-1 text-[30px]'></i>
                <div className='text-[12px]'>View</div>
              </a>
              <a className='flex bottom-[15%] flex-col items-center font-bold hover:text-darkhover duration-200 px-2' href={project.github}>
                <i className='fa-brands fa-github p-1 text-[30px]'></i>
                <div className='text-[12px]'>GitHub</div>
              </a>
            </div>
          </div>
        </div>
        
      </div>
      {/* Dimmer */}
      <div className='absolute w-full h-full bg-dark opacity-30 hover:opacity-0 duration-200 peer-hover:opacity-0 z-[1]'></div>
      {/* Image */}
      <img className='object-fill' alt='' src={project.image}/>
    </div>
  );
}