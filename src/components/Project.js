export default function Project ({project}) {
  return (
    <a href={project.url} className='relative border-[5px] border-highlight cursor-pointer'>
      <div className='absolute w-full h-full bg-dark opacity-20 hover:opacity-0 duration-200'></div>
      <div className='absolute w-[60%] bottom-[15%] bg-highlight p-2 pointer-events-none'>
        <div className='font-bold text-[24px]'>{project.name}</div>
        <div className='font-light text-[16px]'>{project.subtitle}</div>
      </div>
      <img className='object-cover' alt='' src={project.image}/>
    </a>
  );
}