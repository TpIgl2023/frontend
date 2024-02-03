import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Rootlayout from "./layouts/Rootlayout";
import Hero from "./pages/Hero";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import AddArticle from "./pages/AddArticle";
import Article from "./pages/Article";
import Articles from "./pages/Articles";
import Contact from "./pages/Contact";
import Favoris from "./pages/Favoris";
import ReviewArticles from "./pages/ReviewArticles";
import Profile from "./pages/Profile";
import NavAdmin from "./components/navbars/NavAdmin";
import AdminEdit from "./pages/AdminPages/AdminEdit";
import NewMod from "./pages/AdminPages/NewMod";
import DashBoard from "./pages/AdminPages/DashBoard";
import ModeratorAll from "./pages/AdminPages/ModeratorAll";
import Adminlayout from "./layouts/Adminlayout";
import SideNavAdmin from "./components/navbars/SideNavAdmin";
import FooterSigned from "./components/footers/FooterSigned";
import Password from "./pages/AdminPages/Password";
import Help from "./pages/AdminPages/Help";
import { ChakraProvider } from "@chakra-ui/react";
import ModifyAdmin from "./pages/AdminPages/ModifyAdmin";
import ModifyArticle from "./pages/ModifyArticle";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout />}>
      <Route path="/Hero" element={<Hero />}></Route>
      <Route path="/Login" element={<Login />}></Route>
      <Route path="/Review/:url" element={<ReviewArticles />}></Route>
      <Route path="/Modify/:article" element={<ModifyArticle />}></Route>
      <Route path="/Signup" element={<Signup />}></Route>
      <Route path="/ajouter" element={<AddArticle />}></Route>
      <Route path="/article/:id" element={<Article />}></Route>
      <Route path="/articles/:query" element={<Articles />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/favoris" element={<Favoris />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/Profile" element={<Profile />}></Route>
      <Route path="/admin" element={<Adminlayout />}>
        <Route path="dashboard" element={<DashBoard />}></Route>
        <Route path="adminedit" element={<AdminEdit />}></Route>
        <Route path="moderateurAll" element={<ModeratorAll />}></Route>
        <Route path="Password" element={<Password />}></Route>
        <Route path="AjouterMod" element={<NewMod />}></Route>
        <Route path="Help" element={<Help />}></Route>
        <Route path="ModifyMod/:mod" element={<ModifyAdmin />}></Route>
      </Route>
    </Route>
  )
);
function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
