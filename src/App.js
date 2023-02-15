import logo from './logo.svg';
import './App.css';
import { 
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
 } from 'react-router-dom';
 import Register from './pages/Register';
 import Login from './pages/Login';
 import Home from './pages/Home';
 import Single from './pages/Single';
 import Admin from './pages/Admin';
 import Navbar from './components/Navbar';
 import Footer from './components/Footer';

 const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

//  Création des routes
 const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/single",
        element:<Single />
      },
      {
        path:"/admin",
        element:<Admin />
      },
    ]
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/single",
    element: <Single/>,
  },
  {
    path: "/admin",
    element: <Admin/>,
  },
]);

function App() {
  return (
    <div className="App">
      {/* route racin, toute les routes passe a l'interieur */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
