import banner from '../images/biochembanner.webp';
import avatar from '../images/binder_dev_square_600x600.webp';

export default function Header () {
  const bannerStyle = {
    backgroundImage: `url(${banner})`
  }
  const subtitle = `// dev / designer / educator`

  return (
    <section className='flex overflow-hidden justify-between items-end h-[200px] bg-cover bg-no-repeat bg-center' style={bannerStyle}>
      
      <img id='avatar' className='w-[250px] h-[250px] m-[-20px] rounded-full border-dark shadow shadow-dark' src={avatar} alt='Avatar of Ben Binder.' />
      
      <div className='p-[15px] bg-highlight text-dark font-bold text-xl mb-[20px] mr-[30px]' id='subtitle'>
        {subtitle}
      </div>
      
    </section>
  );
}