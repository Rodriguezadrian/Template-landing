import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contacto from "./pages/Contacto";
import Sobrenosotros from "./pages/Sobrenosotros";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/contacto", element: <Contacto /> },
        { path: "/sobre-nosotros", element: <Sobrenosotros /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
