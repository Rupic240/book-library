import { useRouteError } from "react-router-dom";

const Error = () => {

    const error = useRouteError();

    return (
        <div className="w-full h-screen grid place-items-center bg-neutral-800">
            <div className="text-center">
                <h1 className="text-6xl font-semibold text-white uppercase font-mono max-sm:text-5xl max-sm:text-center">
                Oops!
                </h1>
                <p className="text-white text-lg my-5 max-sm:text-center max-sm:px-5"> Sorry, an unexpected error has occurred.</p>
                <p className="text-white"><i>{error.statusText || error.message}</i></p>
            </div>
        </div>
    );
};

export default Error;