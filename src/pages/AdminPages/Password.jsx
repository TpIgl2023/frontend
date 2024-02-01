import React from "react";
import { updatePassword } from "../../utils/utils.js";

export default function Password() {
  function EditPassword(event) {
    const oldPassword = event.target.OldPassword.value;
    const newPassword = event.target.NewPassword.value;
    const repeatPassword = event.target.RepeatPassword.value;

    if (!oldPassword || !newPassword || !repeatPassword) {
      alert("Please fill all the fields");
      return;
    }

    if (newPassword !== repeatPassword) {
      alert("New password and repeated password do not match");
      return;
    }

    updatePassword(oldPassword, newPassword);
  }

  function Edit(event) {
    event.preventDefault();
    EditPassword(event);
  }
  return (
    <form onSubmit={Edit}>
      <h1 className="text-center font-inter font-semibold text-3xl sm:text-4xl md:text-5xl xl:text-6xl py-[50px] sm:py-[75px] md:py-[100px]">
        Change your Password
      </h1>

      <div className="md:mt-[70px] bg-white w-[90%] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] 2xl:max-w-[900px] mx-auto rounded-2xl ">
        <div className="flex flex-col sm:flex-row  py-16 ustify-center sm:justify-normal sm:items-center w-full pl-[10%] sm:pl-0 gap-[10px] sm:gap-0">
          <div className="w-full sm:w-[200px] lg:w-[250px]  ml-0 sm:ml-[15%] lg:ml-[20%] ">
            <label className="font-inter font-semibold text-xl lg:text-2xl ">
              Old password :
            </label>
          </div>
          <input
            name="OldPassword"
            type="password"
            className="border-[#A9AABC] border-2 w-[90%] sm:w-[250px] lg:w-[280px] outline-none py-1 text-center font-inter text-xl text-[#A9AABC]"
          />
        </div>
        <div className="flex flex-col sm:flex-row  ustify-center sm:justify-normal sm:items-center w-full pl-[10%] sm:pl-0 gap-[10px] sm:gap-0">
          <div className="w-full sm:w-[200px] lg:w-[250px]  ml-0 sm:ml-[15%] lg:ml-[20%]">
            <label className="font-inter font-semibold text-xl lg:text-2xl  ">
              New password :
            </label>
          </div>
          <input
            name="NewPassword"
            type="password"
            className="border-[#A9AABC] border-2 w-[90%] sm:w-[250px] lg:w-[280px] outline-none py-1 text-center font-inter text-xl text-[#A9AABC]"
          />
        </div>
        <div className="flex flex-col sm:flex-row  py-16 ustify-center sm:justify-normal sm:items-center w-full pl-[10%] sm:pl-0 gap-[10px] sm:gap-0">
          <div className="w-full sm:w-[200px] lg:w-[250px] ml-0 sm:ml-[15%] lg:ml-[20%]">
            <label className="font-inter font-semibold text-xl lg:text-2xl  ">
              New password :
            </label>
          </div>
          <input
            name="RepeatPassword"
            type="password"
            className="border-[#A9AABC] border-2 w-[90%] sm:w-[250px] lg:w-[280px] outline-none py-1 text-center font-inter text-xl text-[#A9AABC]"
          />
        </div>
      </div>
      <div className="mt-[70px] flex  justify-center mx-auto">
        <button
          type="submit"
          className="sm:w-[300px] lg:w-[500px] text-2xl lg:text-3xl font-inter font-semibold text-white bg-main py-5 px-10 rounded-xl"
        >
          Edit Password
        </button>
      </div>
    </form>
  );
}
