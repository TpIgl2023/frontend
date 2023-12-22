import {  Route, RouterProvider ,createBrowserRouter,createRoutesFromElements} from "react-router-dom";
import Rootlayout from "./layouts/Rootlayout";
import Hero from "./pages/Hero";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout/>}>
        <Route path="Hero" element={<Hero/>}></Route>
        <Route path="Login" element={<Login/>}></Route>
        <Route path="Signup" element={<Signup/>}></Route>

    </Route>
  )
)
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
