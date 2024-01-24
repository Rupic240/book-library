import { useState } from 'react';
import Logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import { IoMenu } from 'react-icons/io5';
import { FaTimes } from 'react-icons/fa';

const path = [
    {
        path: '/',
        name: 'Home',
    },
    {
        path: '/popular',
        name: 'Popular',
    },
    {
        path: '/about_us',
        name: 'About Us',
    },
]

const Navbar = () => {

    const [isShowing, setIsShowing] = useState(false);

    document.addEventListener('scroll', () => {
        setIsShowing(false);
    })

    return (
        <nav className='fixed bg-black w-full h-auto py-4 px-10 z-50'>
            <div className='flex items-center justify-between'>
                <Link to='/'>
                    <img src={Logo} alt="logo" className='w-[150px]' />
                </Link>
                <ul className={`flex w-[20%] text-white items-center justify-between max-[1024px]:w-auto ${isShowing? 'max-md:absolute max-md:flex-col max-md:w-auto max-md:h-[190px] max-md:translate-y-[120px] max-md:p-4 max-md:rounded-l-md max-md:right-0 bg-black'  : 'max-md:hidden'}`}>
                    {path.map((item, index) => (
                        <li key={index} className='max-[1024px]:mx-5' onClick={() => setIsShowing(!isShowing)}>
                            <Link to={item.path}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
                <div
                    className="hidden max-md:block"
                    onClick={() => setIsShowing((prev) => !prev)}
                >
                    {isShowing ? (
                        <FaTimes className="text-2xl text-white" />
                    ) : (
                        <IoMenu className="text-2xl text-white" />
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar