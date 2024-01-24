import { useRef } from 'react';
import HomeBG from '../images/book1.png';
import Logo from '../images/logo.png';
import { useNavigate } from 'react-router-dom';

const Search = ({ searchBooks }) => {

    const inputRef = useRef();
    const navigate = useNavigate();

    return (
        <div className="relative w-full h-[25rem] grid place-items-center">
            <img
                src={HomeBG}
                alt="background"
                className="absolute w-full h-screen object-cover"
            />
            <div className="grid place-items-center gap-10 z-10">
                <img src={Logo} alt="logo" className="w-[350px] h-20 max-[430px]:w-[280px] max-[430px]:h-16" />
                <form
                    className="max-sm:w-full max-sm:px-5"
                    onSubmit={e => {
                        e.preventDefault();
                        const search = inputRef.current.value;
                        searchBooks(search);
                        navigate('/books');

                        inputRef.current.value = '';
                        inputRef.current.focus();

                    }}>
                    <div className="flex max-md:w-full">
                        <input
                            type="text"
                            ref={inputRef}
                            placeholder="Search title, author..."
                            className="w-[30rem] h-[35px] rounded-s-lg bg-white px-5 shadow-2xl outline-none max-md:w-full"
                            autoComplete="off"
                        />
                        <button
                            className="w-[100px] bg-neutral-700 font-normal text-base h-[35px] rounded-e-lg shadow-2xl hover:opacity-95 text-white"
                            type="submit"
                        >
                            Search
                        </button>
                    </div>
                    <p className="text-white text-center mt-5 font-semibold">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo,
                        quasi.
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Search