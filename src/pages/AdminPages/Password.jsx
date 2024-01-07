import React from 'react'

export default function Password() {
    const user =
    {
      id: "859365",
      full_name: "Yekene sofiane",
      email:"yekenetyrone@love.com",
      phone_number:"099999999",
    }
    function getFirstLetters(inputString) {
        // Split the input string into an array of words
        const words = inputString.split(' ');
      
        // Extract the first letter of each word and concatenate them
        const result = words.map(word => word.charAt(0)).join('');
        
        return result;
    }
  return (
    <form action="" >
        
        <div className="my-[100px] bg-white w-[70%] mx-auto rounded-2xl ">
            <div className="flex justify-end pt-10 pr-[50px]">
                <div className="flex justify-center items-center h-[120px] w-[120px] rounded-full bg-[#E1F8FF]">
                    <h1 className="font-inter font-semibold text-[#8966F5] text-4xl">YS</h1>
                </div>
            </div>

            <div className="flex py-16 items-center w-full">
                <div className="w-[250px]  ml-[10%] mr-[15%]">
                    <label className="font-inter font-semibold text-3xl ">Last password :</label>
                </div>   
                <input type="password" className="border-black/[64%]  border-2 rounded-xl w-[300px] outline-none py-2 text-center font-inter text-xl text-[#A9AABC] "/>
            </div>

            <div className="flex items-center w-full">
                <div className="w-[250px]  ml-[10%] mr-[15%]">
                    <label className="font-inter font-semibold text-3xl ">New password :</label>
                </div>          
                <input type="password" className="border-black/[64%]  border-2 rounded-xl w-[300px] outline-none py-2 text-center font-inter text-xl text-[#A9AABC] "/>

            </div>

            <div className="flex pt-16 items-center w-full pb-[100px]">
                <div className="w-[250px]  ml-[10%] mr-[15%]">
                    <label className="font-inter font-semibold text-3xl ">New Password :</label>
                </div>
                <input type="password" className="border-black/[64%] border-2 rounded-xl w-[300px] outline-none py-2 text-center font-inter text-xl text-[#A9AABC] "/>
            </div>
        </div>
        <div className="mt-[70px] flex justify-center mx-auto ">
          <button type="submit" className="text-3xl font-inter font-semibold text-white bg-[#1B76FF] py-5 w-[500px] rounded-xl" >Change password</button>
      </div>
    </form>


  )
}
