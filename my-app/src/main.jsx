import ReactDom from 'react-dom/client'
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";

import Beranda from "./pages/Beranda";
import About from "./pages/About";
import Project from './pages/Project';
import Contact from './pages/Contact';

const rootElement = document.getElementById("root");
const root = ReactDom.createRoot(rootElement);

const router = createBrowserRouter([
  { path: "/",
    Component: Beranda 
  },
  { path: "/about",
    Component: About
  },
  { path: "/project",
    Component: Project
  },
  { path: "/contactMe",
    Component: Contact
  }
]);

root.render(<RouterProvider router={router} />);
