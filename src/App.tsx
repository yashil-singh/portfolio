import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "@/components/RootLayout.tsx";
import About from "@/pages/About.tsx";
import Projects from "@/pages/Projects.tsx";
import Contact from "@/pages/Contact.tsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <About />,
        },
        {
          path: "projects",
          element: <Projects />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
