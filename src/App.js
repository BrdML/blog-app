import './App.css';
import { 
  createBrowserRouter,
  RouterProvider,
  Outlet,
 } from 'react-router-dom';
 import Register from './pages/Register';
 import Login from './pages/Login';
 import Home from './pages/Home';
 import Single from './pages/Single';
 import Admin from './pages/Admin';
 import Navbar from './components/Navbar';
 import Footer from './components/Footer';
 import BlogPost from './pages/adminPages/BlogPost';
 import "./styles.scss";

// Outlet permet aux routes de faire le rendu
// de leur élement enfant
// Layout est une route parent sans path, 
// utilisé exclusivement pour grouper les route enfants
// dans un layout specifique.
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
        path:"/post/:id",
        element:<Single />
      },
      {
        path:"/admin",
        element:<Admin />
      },
      {
        path:"/blogpost",
        element:<BlogPost />
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
  {
    path:"/blogpost",
    element:<BlogPost />
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        {/* route racine, toute les routes passe a l'interieur */}
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
