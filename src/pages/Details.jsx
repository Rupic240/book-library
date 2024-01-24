import { useState } from "react"

const Details = ({ details }) => {

    const [isShowing, setIsShowing] = useState(false);

    return (
        <div
            className={`w-full flex justify-around px-[3%] bg-amber-200 max-lg:flex-col max-lg:items-center max-lg:h-full ${isShowing ? 'h-full py-[15%]' : 'h-screen items-center py-[10%]'}`}
        >
            {details.imageLinks && (
                <img
                    src={details.imageLinks.thumbnail}
                    alt="Book Cover"
                    className="w-[220px] h-[300px] rounded border-2 border-gray-500 max-lg:mb-10 max-md:mt-10 max-md:w-[180px] max-md:h-[220px]"
                />
            )}
            <div className="max-md:p-5 w-[45%]">
                <h1 className="text-3xl mb-3 font-semibold max-md:text-2xl">
                    Title - {details.title}
                </h1>
                <h2 className="text-2xl mb-3 font-semibold">
                    Author - {details.authors}
                </h2>
                <p
                    className={`w-[40rem] mb-2 sm:w-96 max-md:w-full ${isShowing ? 'overflow-auto h-auto' : 'overflow-hidden h-[100px]'
                        }`}
                >
                    <span
                        dangerouslySetInnerHTML={{ __html: details.description }}
                    />
                </p>
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