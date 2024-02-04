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
import Unauthorized from "./pages/Unauthorized";
import { UnarchiveTwoTone } from "@mui/icons-material";
const userNotParsed=localStorage.getItem("user")
  const user=JSON.parse(userNotParsed)
  const userType=user.status
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout />}>
      <Route path="/Hero" element={ <Hero /> }></Route>
      <Route path="/Login" element={<Login />}></Route>

      <Route path="/Review/:url" element={userType === "administrator" ? <ReviewArticles /> : <Unauthorized/>}></Route>
      <Route path="/Modify/:article" element={userType === "moderator" ? <ModifyArticle />:<Unauthorized/>}></Route>
      <Route path="/Signup" element={<Signup />}></Route>
      <Route path="/ajouter/"Y element={userType === "administrator" ? <AddArticle /> : <Unauthorized/>}></Route>
      <Route path="/article/:id" element={userType !== "administrator" ? <Article /> :<Unauthorized/> }></Route>
      <Route path="/articles/:query" element={userType !== "administrator" ? <Articles /> : <Unauthorized/>}></Route>
      <Route path="/articles/" element={userType !== "administrator" ? <Articles /> : <Unauthorized/>}></Route>
      <Route path="/favoris" element={userType === "user" ? <Favoris />:<Unauthorized/>}></Route>
      <Route path="/home" element={userType !== "administrator" ? <Home /> : <Unauthorized/>}></Route>
      <Route path="/Profile" element={userType !== "administrator" ? <Profile /> : <Unauthorized/>}></Route>
      <Route path="/admin" element={userType === "administrator" ? <Adminlayout /> : <Unauthorized/>}>
        <Route path="dashboard" element={userType === "administrator" ? <DashBoard /> : <Unauthorized/>}></Route>
        <Route path="adminedit" element={userType === "administrator" ? <AdminEdit /> : <Unauthorized/>}></Route>
        <Route path="moderateurAll" element={userType === "administrator" ? <ModeratorAll />: <Unauthorized/>}></Route>
        <Route path="Password" element={userType === "administrator" ? <Password />: <Unauthorized/>}></Route>
        <Route path="AjouterMod" element={userType === "administrator" ? <NewMod />: <Unauthorized/>}></Route>
        <Route path="Help" element={userType === "administrator" ? <Help />: <Unauthorized/>}></Route>
        <Route path="ModifyMod/:mod" element={userType === "administrator" ? <ModifyAdmin />: <Unauthorized/>}></Route>

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
