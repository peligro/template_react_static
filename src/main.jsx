import React from "react";
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import '/public/css/app.css';



import Frontend from './componentes/Frontend';
import Home  from './paginas/Home'; 
import Modulos  from './paginas/Modulos'; 
import Perfiles  from './paginas/Perfiles';
import Usuarios  from './paginas/Usuarios';
import Login  from './paginas/Login'; 
import Cuentas from './paginas/Cuentas';
import Clientes from './paginas/Clientes';
import Cobranzas from './paginas/Cobranzas';
import MailMasivo from './paginas/MailMasivo';
import Reportes from './paginas/Reportes';
import Error404 from './paginas/Error404';

const router = createBrowserRouter(
  [
    {
      path:'/',
      element: <Frontend />,
      children:
      [
        {
          index:true,
          element: <Home /> 
        },
        {
          path:'/modulos',
          element: <Modulos />
        },
        {
          path:'/perfiles',
          element: <Perfiles />
        },
        {
          path:'/usuarios',
          element: <Usuarios />
        },
        {
          path:'/cuentas',
          element: <Cuentas />
        },
        {
          path:'/clientes',
          element: <Clientes />
        },
        {
          path:'/cobranzas',
          element: <Cobranzas />
        },
        {
          path:'/mail-masivo',
          element: <MailMasivo />
        },
        {
          path:'/reportes',
          element: <Reportes />
        },
        {
          path:'/login',
          element: <Login /> 
        },
        {
          path:'*',//esta ruta siempre debe estar al final de todas las demás
          element: <Error404 />
        }
      ]
    }
  ] , {
    future: {
      v7_fetcherPersist: true,
      v7_relativeSplatPath: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_startTransition: true,
      v7_skipActionStatusRevalidation: true,
      v7_skipActionErrorRevalidation: true,
    },
  });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} future={{
      v7_fetcherPersist: true,
      v7_relativeSplatPath: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_startTransition: true,
      v7_skipActionStatusRevalidation: true,
      v7_skipActionErrorRevalidation: true,
    }} />
  </React.StrictMode>
)

 