import { useNavigate } from 'react-router-dom';
import PopularBG from '../images/popular.png';

const Popular = ({ popular, showDetails }) => {

  const navigate = useNavigate();

  return (
    <div className="w-full h-auto bg-slate-950">
        <div className="relative grid place-items-center w-full h-[35rem] font-mono max-[430px]:h-[30rem]">
          <img
            src={PopularBG}
            alt="popular_bg"
            className="absolute w-full h-full object-center object-cover"
          />
          <div className="z-10 grid place-items-center mt-5">
            <h1 className="text-8xl text-yellow-500 font-bold max-md:text-7xl max-sm:text-5xl max-[321px]:text-center">
              Popular Books
            </h1>
            <p className="text-white text-center font-semibold text-lg max-md:text-sm">
              Consectetur, adipisicing elit. Consequatur beatae <br /> eaque
              sunt mollitia nisi eligendi!
            </p>
          </div>
        </div>
        <div className="grid grid-cols-5 max-md:grid-cols-3 max-[430px]:grid-cols-1 gap-5 px-[8%] -translate-y-32">
          {popular.map((item, index) => {
            if (item.volumeInfo && item.volumeInfo.imageLinks) {
              const img = item.volumeInfo.imageLinks.smallThumbnail;
              if (img !== undefined) {
                return (
                  <img
                    key={index}
                    src={img}
                    alt="background"
                    className="rounded-md w-40 h-48 cursor-pointer duration-500 hover:scale-105 object-center object-cover max-[430px]:m-auto "
                    onClick={() => {
                      showDetails(item.id);
                      navigate(`/details/${item.id}`);
                    }}
                  />
                );
              }
            }
          })}
        </div>
      </div>
  )
}

export default Popular;