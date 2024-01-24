import { useRef } from 'react';
import BG from './images/book1.png';
import Logo from './images/logo.png';
import { useNavigate } from 'react-router-dom';

const App = ({ searchBooks }) => {

  const inputRef = useRef();
  const navigate = useNavigate();
  
  return (
    <div className='w-full h-screen grid place-content-center'>
      <img src={BG} alt="background" className='absolute w-full h-screen object-cover -z-10' />
      <div className="grid place-items-center gap-10">
          <img src={Logo} alt="logo" className="w-[500px] h-50 max-md:w-[350px] max-sm:w-[250px]"/>
        <form
          className='max-sm:w-full max-sm:px-10'
          onSubmit={e => {
            e.preventDefault();
            const search = inputRef.current.value;

            if (!search || search === undefined) {
              navigate('/');
              alert('Please search a valid book');
            } else {
              searchBooks(search);
              navigate('/books')
            }

            inputRef.current.value = '';
            inputRef.current.focus();
          }}>
            <div className='flex max-md:w-full'>
              <input
                type="text"
                ref={inputRef}
                placeholder="Search title, author, categories..."
                className="w-[40rem] h-[45px] rounded-s-lg bg-white px-5 shadow-2xl outline-none max-md:w-full"
                autoComplete="off"
              />
              <button
                type="submit"
                className="w-[100px] bg-neutral-700 font-normal text-base h-[45px] rounded-e-lg shadow-2xl hover:opacity-95 text-white"
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

export default App