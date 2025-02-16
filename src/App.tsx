import Home from './pages/home/Home'
import Juegos from './pages/juegos/Juegos';
import Pacientes from './pages/pacientes/Pacientes';
import Agenda from './pages/agenda/Agenda';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Menu from './components/menu/Menu';
import Publicar from './pages/publicar/Publicar';
import Login from './pages/login/Login';
import Perfil from './pages/perfil/Perfil';
import Psicologo from './pages/psicologo/Psicologo';
import Registro from './pages/registro/Registro';
import "./styles/global.scss";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

function App() {

  const Layout = ()=>{
    return (
      <div className="main">
        <Navbar/>
        <div className="container">
          <div className='menuContainer'>
            <Menu/>
          </div>
          <div className='contentContainer'>
            <Outlet/>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        { path: "/", element: <Home/> },
        { path: "/publicar", element: <Publicar/> },
        { path: "/juegos", element: <Juegos/> },
        { path: "/pacientes", element: <Pacientes/> },
        { path: "/agenda", element: <Agenda/> },
        { path: "/perfil/:id", element: <Perfil/>},
        { path: "/psicologo", element: <Psicologo/>},
      ]
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/registro",
      element: <Registro/>
    }
  ]);

  return (
    <RouterProvider router={router}/>
  )
}

export default App
