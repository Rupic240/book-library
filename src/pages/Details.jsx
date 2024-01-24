import { useState } from "react"

const Details = ({ details }) => {

    const [isShowing, setIsShowing] = useState(false);

    return (
        <div
            className='w-full flex justify-around h-screen items-center py-[10%] px-[3%] bg-amber-200 max-lg:flex-col max-lg:items-center max-lg:h-full'
        >
            {details.imageLinks && (
                <img
                    src={details.imageLinks.thumbnail}
                    alt="Book Cover"
                    className="w-[220px] h-[300px] rounded border-2 border-gray-500 max-lg:mb-10 max-md:mt-10 max-md:w-[180px] max-md:h-[220px]"
                />
            )}
            <div className="max-md:p-5 w-[50%] max-md:w-auto">
                <h1 className="text-3xl mb-5 font-semibold max-md:text-2xl">
                    Title - {details.title}
                </h1>
                <h2 className="text-2xl mb-5 font-semibold">
                    Author - {details.authors}
                </h2>
                <p
                    className={`w-full h-[230px] pr-2 mb-5 text-lg max-sm:w-96 max-md:w-full ${isShowing ? 'overflow-y-auto' : 'overflow-hidden'}`}
                    dangerouslySetInnerHTML={{ __html: details.description }}
                />
                <button
                    className={`rounded-full font-normal text-lg`}
                    onClick={() => {
                        setIsShowing(!isShowing);
                    }}
                >
                    {isShowing ? 'Read Less <' : 'Read More >'}
                </button>
            </div>
        </div>
    )
}

export default Details