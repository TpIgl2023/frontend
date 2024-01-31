import React from "react";
import NavArticles from "../components/navbars/NavArticles";
import FooterSigned from "../components/footers/FooterSigned";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import dropMenu from "../assets/dropMenu.svg";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import exitIcon from "../assets/exitIcon.png";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GATEWAY_URL } from "../env.js";

import axios from "axios";

var searching = false;

async function search(query) {
  try {
    const token = localStorage.getItem("token");
    console.log(token);
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const res = await axios.get(`${GATEWAY_URL}/articles?query=${query}`);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

function Articles() {
  const { query } = useParams();
  const [filter, toggleFilter] = useState(true);

  useEffect(() => {
    if (!searching) {
      search(query);
      searching = true;
    }
  });
  return (
    <div>
      <NavArticles />
      {!filter && (
        <button
          className="p-4 m-4 bg-orange-600"
          onClick={() => toggleFilter(!filter)}
        >
          Open filter
        </button>
      )}
      <div>
        {filter && (
          <div
            id="filter"
            className="relative left-0 w-2/3 py-5 bg-[#4D4D4D] font-inter"
          >
            <div className=" text-center w-full py-4 flex justify-around items-center">
              <div></div>
              <h1 className="font-bold text-2xl text-white">Filter</h1>{" "}
              <img
                className="invert  h-6"
                src={exitIcon}
                onClick={() => toggleFilter(!filter)}
              />{" "}
            </div>
            <div className="w-full h-1"></div>
            {/* keywords  */}
            <div className="p-4  w-full flex flex-col md:flex-row md:justify-evenly">
              <h1 className="inline-block mx-4 font-bold text-white text-lg">
                {" "}
                Keywords :
              </h1>
              <Checkbox>
                <span className="text-white">Value 1</span>
              </Checkbox>
              <Checkbox>
                <span className="text-white">Value 2</span>
              </Checkbox>
              <Checkbox>
                <span className="text-white">Value 3</span>
              </Checkbox>
              <Menu closeOnSelect={false}>
                <MenuButton /*as={Button}*/ colorScheme="blue">
                  <span className="text-white"> More items</span>{" "}
                  <img src={dropMenu} className="w-6 inline" />
                </MenuButton>
                <MenuList minWidth="240px">
                  <MenuDivider />
                  <MenuOptionGroup title="Country" type="checkbox">
                    <MenuItemOption value="value4">value4</MenuItemOption>
                    <MenuItemOption value="value5">value5</MenuItemOption>
                    <MenuItemOption value="value6">value6</MenuItemOption>
                  </MenuOptionGroup>
                </MenuList>
              </Menu>
            </div>
            <div className="w-full h-1 bg-white"></div>
            {/* Authors  */}
            <div className="p-4  w-full flex flex-col md:flex-row md:justify-evenly">
              <h1 className="inline-block mx-4 font-bold text-white text-lg">
                {" "}
                Authors :
              </h1>
              <Checkbox>
                <span className="text-white">Value 1</span>
              </Checkbox>
              <Checkbox>
                <span className="text-white">Value 2</span>
              </Checkbox>
              <Checkbox>
                <span className="text-white">Value 3</span>
              </Checkbox>
              <Menu closeOnSelect={false}>
                <MenuButton /*as={Button}*/ colorScheme="blue">
                  <span className="text-white"> More items</span>{" "}
                  <img src={dropMenu} className="w-6 inline" />
                </MenuButton>
                <MenuList minWidth="240px">
                  <MenuDivider />
                  <MenuOptionGroup title="Country" type="checkbox">
                    <MenuItemOption value="value4">value4</MenuItemOption>
                    <MenuItemOption value="value5">value5</MenuItemOption>
                    <MenuItemOption value="value6">value6</MenuItemOption>
                  </MenuOptionGroup>
                </MenuList>
              </Menu>
            </div>
            <div className="w-full h-1 bg-white"></div>
            {/* Institutions  */}
            <div className="p-4  w-full flex flex-col md:flex-row md:justify-evenly">
              <h1 className="inline-block mx-4 font-bold text-white text-lg">
                {" "}
                Institutions :
              </h1>
              <Checkbox>
                <span className="text-white">Value 1</span>
              </Checkbox>
              <Checkbox>
                <span className="text-white">Value 2</span>
              </Checkbox>
              <Checkbox>
                <span className="text-white">Value 3</span>
              </Checkbox>
              <Menu closeOnSelect={false}>
                <MenuButton /*as={Button}*/ colorScheme="blue">
                  <span className="text-white"> More items</span>{" "}
                  <img src={dropMenu} className="w-6 inline" />
                </MenuButton>
                <MenuList minWidth="240px">
                  <MenuDivider />
                  <MenuOptionGroup title="Country" type="checkbox">
                    <MenuItemOption value="value4">value4</MenuItemOption>
                    <MenuItemOption value="value5">value5</MenuItemOption>
                    <MenuItemOption value="value6">value6</MenuItemOption>
                  </MenuOptionGroup>
                </MenuList>
              </Menu>
            </div>
            <div className="w-full h-1 bg-white"></div>
            {/* Publishing date */}
            <div className="p-4 w-full flex flex-col md:flex-row justify-evenly">
              <h1 className="text-white">Publishing date : </h1>
              <div>
                <h1 className="text-white">From :</h1>
                <input className="rounded" placeholder="DD/MM/YYYY" />
              </div>
              <div>
                <h1 className="text-white">To :</h1>
                <input className="rounded" placeholder="DD/MM/YYYY" />
              </div>
            </div>
            <div className="w-full flex justify-center">
              <Button colorScheme="orange">Filter</Button>
            </div>
          </div>
        )}
      </div>
      <div className="w-screen">
        <FooterSigned />
      </div>
    </div>
  );
}

export default Articles;
