import Logo from '../images/logo.png';
import ReadingBook from '../images/reading_book.png';

const AboutUs = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-around p-[5%] bg-slate-950 max-md:bg-slate-500 max-md:justify-center">
      <div className="w-[400px] max-md:z-30 max-sm:grid max-sm:place-items-center">
        <img src={Logo} alt="Logo" className="w-[320px] h-[80px] max-sm:w-[200px] max-sm:h-16" />
        <p className="text-lg text-white mt-5 font-medium max-md:mt-16  max-md:text-inherit">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo doloremque minima repellat accusantium, qui dolorem et recusandae, ipsa officiis quas odio iusto id quibusdam vel cupiditate.</p>
        <p className="text-lg text-white mt-2 font-medium max-md:text-inherit">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab?</p>
      </div>
      <img src={ReadingBook} alt="image" className="w-[400px] h-auto max-md:absolute" />
    </div>
  );
};

export default AboutUs;