import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import Activity from "./pages/Activity.jsx";
import ProtectedRoutes from "./components/ProtectedRoutes.jsx";
import ListOfTask from "./components/ListOfTask.jsx";
import ActivityPagination from "./components/ActivityPagination.jsx";

const router=createBrowserRouter([
  {
    path:"/",
    element:<App />
  },
  {
    path:"/home/:useremail",
    element:<ProtectedRoutes><Home /></ProtectedRoutes>,
    children:[
      {path:"tasks",element:<ListOfTask/>},
      {path:"activitylist", element:<ActivityPagination />}
    ]
  },
  {
    path:"/activity",
    element:<ProtectedRoutes><Activity /></ProtectedRoutes>
  }
])
const theme = createTheme({
      palette: {
        primary: {
          main: "#32CD32",
        },
        secondary: {
          main: "#800080",
        },
      },
    });
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
);
