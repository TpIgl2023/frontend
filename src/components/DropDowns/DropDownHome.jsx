import React, { useState, Fragment } from "react";
import { styles } from "../../styles";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ProfilePic from "../../assets/ProfilePic.svg";
import { Close } from "@mui/icons-material";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import UserTypes from "../../constants/enums";
export default function DropDOwnHome() {
  const mod = true;
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const [visible, setVisible] = useState(true);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 0) {
      setVisible(false);
    } else if (scrolled <= 0) {
      setVisible(true);
    }
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
      /* you can also use 'auto' behaviour 
             in place of 'smooth' */
    });
  };
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div onClick={handleNav}>
        <Menu.Button className="inline-flex w-full justify-center  text-gray-900  ">
          {!nav ? <MenuIcon fontSize="large" /> : <Close fontSize="large" />}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-main rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item onClick={handleNav}>
              {({ active }) => (
                <Link
                  to="/Profile"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm font-inter font-semibold"
                  )}
                >
                  Profile
                </Link>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item onClick={handleNav}>
              {({ active }) => (
                <Link
                  to="/Home"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm font-inter font-semibold"
                  )}
                >
                  Acceuil
                </Link>
              )}
            </Menu.Item>

            <Menu.Item onClick={handleNav}>
              {({ active }) => (
                <Link
                  to="/Favoris"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm font-inter font-semibold"
                  )}
                >
                  Favoris
                </Link>
              )}
            </Menu.Item>

            <Menu.Item onClick={handleNav}>
              {({ active }) => (
                <Link
                  onClick={scrollToBottom}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm font-inter font-semibold"
                  )}
                >
                  Contact
                </Link>
              )}
            </Menu.Item>

            <Menu.Item onClick={handleNav}>
              {({ active }) => (
                <Link
                  to="/Article"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm font-inter font-semibold"
                  )}
                >
                  Articles
                </Link>
              )}
            </Menu.Item>

            <Menu.Item onClick={handleNav}>
              {({ active }) => (
                <Link
                  to="/ajouter"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm font-inter font-semibold"
                  )}
                >
                  Ajouter Article
                </Link>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item onClick={handleNav}>
              {({ active }) => (
                <Link
                  to="/login"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm font-inter font-semibold"
                  )}
                >
                  Deconnexion
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
