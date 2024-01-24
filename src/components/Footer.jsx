import logo from '../images/logo.png';

const Footer = () => {
  return (
    <div className="z-50">
      <div className="w-full h-80 bg-black flex justify-around py-10 px-10 max-sm:flex-col max-sm:h-auto max-sm:items-center">
        <div className="w-60 h-auto flex flex-col justify-around py-5 max-md:hidden">
          <img src={logo} alt="" className="w-[200px] h-10" />
          <p className="text-white text-sm pb-10 px-2">
            Sit amet consectetur adipisicing elit. Molestias, nulla! Debitis,
            consequuntur
          </p>
        </div>
        <div className="flex flex-col justify-around text-white max-sm:items-center max-sm:mb-5 max-sm:border-b-2 max-sm:w-full max-sm:pb-3">
          <h1 className="text-2xl font-bold">Support</h1>
          <p className='max-sm:text-center'>
            Mingalar Theike Di Street,
            <br /> Dawbon,
            <br /> Yangon
          </p>
          <p>fabric@gmail.com</p>
          <p>+95 9123 456 789</p>
        </div>
        <div className="flex flex-col justify-around text-white max-sm:items-center max-sm:mb-5 max-sm:border-b-2 max-sm:w-full max-sm:pb-3">
          <h1 className="text-2xl font-bold">Account</h1>
          <p>My Account</p>
          <p>Login/Register</p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>Shop</p>
        </div>
        <div className="flex flex-col justify-around text-white max-sm:items-center max-sm:mb-5 max-sm:border-b-2 max-sm:w-full max-sm:pb-3">
          <h1 className="text-2xl font-bold">Quick Link</h1>
          <p>Privacy Policy</p>
          <p>Teams of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>
      </div>
      <footer className="w-full h-12 bg-black border-t-2 border-neutral-700 grid place-items-center">
        <h2 className="text-white font-bold text-xl max-sm:text-lg">
          &copy; Copyright 2023. Novel Notions
        </h2>
      </footer>
    </div>
  );
};

export default Footer;
