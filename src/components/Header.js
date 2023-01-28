import banner from '../images/biochembanner.webp';
import avatar from '../images/binder_dev_square_600x600.webp';

export default function Header () {
  const bannerStyle = {
    backgroundImage: `url(${banner})`
  }
  const subtitle = `// dev / designer / educator`

  return (
    <section className='relative md:static flex flex-col md:flex-row overflow-hidden justify-between items-center md:items-end h-[250px] md:h-[200px] bg-cover bg-no-repeat bg-center' style={bannerStyle}>
      
      <img id='avatar' className='w-[250px] h-[250px] m-[-30px] md:m-[-20px] rounded-full border-dark shadow shadow-dark' src={avatar} alt='Avatar of Ben Binder.' />
      
      <div className='absolute md:static bottom-[-10px] p-[15px] bg-highlight text-dark font-bold text-[20px] sm:text-[24px] md:text-[30px] mb-[20px]  mr-0 md:mr-[30px]' id='subtitle'>
        {subtitle}
      </div>

    </section>
  );
}