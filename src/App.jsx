import React from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Rootlayout from './layouts/Rootlayout';
import Hero from './pages/Hero';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import AddArticle from './pages/AddArticle';
import AddArticle2 from './pages/AddArticle2';

import Article from './pages/Article';
import Contact from './pages/Contact';
import Favoris from './pages/Favoris';
import Profile from './pages/Profile';
import AdminEdit from './pages/AdminPages/AdminEdit';
import NewMod from './pages/AdminPages/NewMod';
import DashBoard from './pages/AdminPages/DashBoard';
import ModeratorAll from './pages/AdminPages/ModeratorAll';
import Adminlayout from './layouts/Adminlayout';

// Define your routes using createRoutesFromElements
const routes = createRoutesFromElements(
  <Route path="/" element={<Rootlayout />}>
    <Route path="/Hero" element={<Hero />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/Signup" element={<Signup />} />
    <Route path="/ajouter" element={<AddArticle />} />
    <Route path="/add" element={<AddArticle2 />} />
    <Route path="/article" element={<Article />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/favoris" element={<Favoris />} />
    <Route path="/home" element={<Home />} />
    <Route path="/Profile" element={<Profile />} />
    <Route path="/admin" element={<Adminlayout />}>
      <Route path="dashboard" element={<DashBoard />} />
      <Route path="adminedit" element={<AdminEdit />} />
      <Route path="moderateurAll" element={<ModeratorAll />} />
      <Route path="AjouterMod" element={<NewMod />} />
    </Route>
  </Route>
);

// Create BrowserRouter using the routes
const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
