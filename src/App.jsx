import {  Route, RouterProvider ,createBrowserRouter,createRoutesFromElements} from "react-router-dom";
import Rootlayout from "./layouts/Rootlayout";
import Hero from "./pages/Hero";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import AddArticle from "./pages/AddArticle";
import Article from "./pages/Article";
import Contact from "./pages/Contact";
import Favoris from "./pages/Favoris";
import Profile from "./pages/Profile";
import NavAdmin from "./components/navbars/NavAdmin";
import AdminEdit from "./pages/AdminPages/AdminEdit";
import NewMod from "./pages/AdminPages/NewMod";
import DashBoard from "./pages/AdminPages/DashBoard";
import ModeratorAll from "./pages/AdminPages/ModeratorAll";
import Adminlayout from "./layouts/Adminlayout";
import SideNavAdmin from "./components/navbars/SideNavAdmin";
import FooterSigned from "./components/footers/FooterSigned";
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout/>}>
        <Route path="/Hero" element={<Hero/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Signup" element={<Signup/>}></Route>
        <Route path="/ajouter" element={<AddArticle/>}></Route>
        <Route path="/article" element={<Article/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/favoris" element={<Favoris/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/Profile" element={<Profile/>}></Route>
        <Route path="/admin" element={<Adminlayout/>}>
          <Route path="dashboard" element={<DashBoard/>}></Route>
          <Route path="adminedit" element={<AdminEdit/>}></Route>
          <Route path="moderateurAll" element={<ModeratorAll/>}></Route>
          <Route path="AjouterMod" element={<NewMod/>}></Route>                    
        </Route>



    </Route>
  )
)
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
