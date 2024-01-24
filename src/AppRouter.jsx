import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Template from "./components/Template"
import Popular from "./pages/Popular"
import AboutUs from "./pages/AboutUs"
import App from "./App"
import { useEffect, useState } from "react"
import Books from "./pages/Books"
import Error from "./pages/Error"
import Details from "./pages/Details"


const AppRouter = () => {
  
  const APIKey = "AIzaSyDq4ZmgkQrb7kHcLnA75li - X_bElMnAju8";
  const [bookData, setBookData] = useState([]);
  const [popular, setPopular] = useState([]);
  const [details, setDetails] = useState([]);
  
  const searchBooks = search => {

    if (!search) return false;
    
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&keyes&key=${APIKey}`)
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      }).then(data => {
        setBookData(data.items);
      }).catch(error => {
        console.error('Fetch error:', error);
      })
  }

  useEffect(() => {
    const popularBooks = () => {
      fetch(`https://www.googleapis.com/books/v1/volumes?q=programming&keyes&key=${APIKey}&maxResults=40`)
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      }).then(data => {
        setPopular(data.items);
      }).catch(error => {
        console.error('Fetch error:', error);
      })
    }
    popularBooks();
  }, [])

  
  const showDetails = (bookId) => {
    fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}?keyes&key=${APIKey}`)
    .then(res => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    }).then(data => {
      setDetails(data.volumeInfo);
    }).catch(error => {
      console.error('Fetch error:', error);
    })
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Template />,
      errorElement: <Error />,
      children: [
        {
          path: '/',
          element: <App searchBooks={searchBooks} />,
        },
        {
          path: '/books',
          element: <Books
            books={bookData}
            searchBooks={searchBooks}
            showDetails={showDetails}
          />,
        },
        {
          path: "/popular",
          element: <Popular popular={popular} showDetails={showDetails} />,
        },
        {
          path: '/details/:id',
          element: <Details details={details} />,
        },
        {
          path: "/about_us",
          element: <AboutUs />,
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default AppRouter;