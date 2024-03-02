// import { BrowserRouter as Router, Route, } from 'react-router-dom'
import Home from './pages/home/index'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    // loader() {
      // Our root route always provides the user, if logged in
      // return { user: fakeAuthProvider.username };
    // },
    Component: Home,
    // children: [
    //   {
    //     index: true,
    //     Component: PublicPage,
    //   },
    //   {
    //     path: "login",
    //     action: loginAction,
    //     loader: loginLoader,
    //     Component: LoginPage,
    //   },
    //   {
    //     path: "protected",
    //     loader: protectedLoader,
    //     Component: ProtectedPage,
    //   },
    // ],
  },
  ])

  return (
      <RouterProvider router={router} />
  // <Home />
    // <Router>
    //     <Route path="/" element={Home}/>
    // </Router>
  )
}

export default App
