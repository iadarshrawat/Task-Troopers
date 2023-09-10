import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom"
import './App.scss'
import Navbar from "../components/navbar/Navbar"
import Footer from "../components/Footer/Footer"
import Home from "../pages/home/Home"
import Gig from "../pages/gig/Gig"
import Gigs from "../pages/gigs/Gigs"
import Add from "../pages/add/Add"
import Orders from "../pages/orders/Orders"
import Messages from "../pages/messages/Messages"
import Message from "../pages/message/Message"
import MyGigs from "../pages/myGigs/MyGigs"
import Login from "../pages/login/Login"
import Register from "../pages/register/Register"
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {

  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <div className="app">
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      </QueryClientProvider>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/gigs",
          element: <Gigs />,
        },
        {
          path: "/myGigs",
          element: <MyGigs />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/gig/:id",
          element: <Gig />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/pay/:id",
          // element: <Pay />,
        },
        {
          path: "/success",
          // element: <Success />,
        },
      ],
    }
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
