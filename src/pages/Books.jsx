import { useNavigate } from "react-router-dom";
import Search from '../components/Search';

const Books = ({ books, searchBooks, showDetails }) => {

  const navigate = useNavigate();

  return (
    <>
      <Search searchBooks={searchBooks} />
      <div className="bg-neutral-800 px-[8%] pb-[5%] mt-[-6%]">
        {
          books.map((items, index) => {
            const img = items.volumeInfo.imageLinks && items.volumeInfo.imageLinks.smallThumbnail;
            const author = items.volumeInfo.authors;
            const title = items.volumeInfo.title;
            const description = items.volumeInfo.description;

            if (
              img !== undefined &&
              description !== undefined &&
              title !== undefined &&
              author !== undefined
            ) {
              return (
                <div
                  key={index}
                  className="w-full p-5 mb-3 rounded-lg border-[1px] backdrop-blur-md flex align-middle justify-between z-10 max-[430px]:flex max-[430px]:flex-col"
                >
                  <img
                    src={img}
                    alt="Book Cover"
                    className="rounded-md w-40 h-48 cursor-pointer duration-500 hover:scale-105 object-fill max-[430px]:m-auto"
                    onClick={() => {
                      showDetails(items.id);
                      navigate(`/details/${items.id}`)
                    }}
                  />
                  <div className="h-50 w-3/4 ml-10 p-2 text-white flex flex-col items-start max-[430px]:ml-0 max-[430px]:w-full">
                    <h1
                      className="text-2xl underline cursor-pointer hover:opacity-80 mb-5"
                      onClick={() => {
                        showDetails(items.id);
                        navigate(`/details/${items.id}`);
                      }}>
                      {title}
                    </h1>
                    <h2 className="text-lg mb-5"> {author} </h2>
                    <button
                      className="text-lg text-blue-500 hover:opacity-80"
                      onClick={() => {
                        showDetails(items.id);
                        navigate(`/details/${items.id}`);
                      }}>
                      Preview
                    </button>

                  </div>
                </div>
              );
            } else {
              return null;
            }

          })
        }
      </div>
    </>
  )
}

export default Books