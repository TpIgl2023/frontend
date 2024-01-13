import React, { useState ,Fragment} from 'react'
import {styles} from "../../styles"
import {Link} from "react-router-dom"
import MenuIcon from '@mui/icons-material/Menu';
import ProfilePic from "../../assets/ProfilePic.svg"
import { Close } from '@mui/icons-material';
import {Menu,Transition} from '@headlessui/react'
import {ChevronDownIcon} from '@heroicons/react/24/outline'
import classNames from 'classnames';

export default function DropDownProfile() {
  const [nav,setNav]=useState(false);
  const handleNav=()=> {
    setNav(!nav);
  }
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div onClick={handleNav}>
        <Menu.Button className="justify-center items-center h-[70px] w-[70px] rounded-full bg-[#E1F8FF] ">
            <h1 className="font-inter font-semibold text-[#8966F5] text-2xl">YS</h1>
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
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/signup"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm font-inter font-semibold'
                  )}
                >
                  Profile
                </Link>
              )}
            </Menu.Item>

          </div>
        
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/signup"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm font-inter font-semibold'
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
  )}
