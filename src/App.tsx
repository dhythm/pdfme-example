import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navigation } from "./Navigation";
import { FormAndViewer } from "./FormAndViewer";
import { Designer } from "./Designer";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigation />,
    },
    {
      path: "/designer",
      element: <Designer />,
    },
    {
      path: "/form-viewer",
      element: <FormAndViewer />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
