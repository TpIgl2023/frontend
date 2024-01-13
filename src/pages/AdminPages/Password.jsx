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
        

        <h1 className="text-center font-inter font-semibold text-5xl xl:text-6xl py-[50px] sm:py-[75px] md:py-[100px]">Change your Password</h1>

      <div className="mt-[70px] bg-white w-[90%] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] 2xl:max-w-[900px] mx-auto rounded-2xl ">

        <div className="flex flex-col sm:flex-row  py-16 ustify-center sm:justify-normal sm:items-center w-full pl-[10%] sm:pl-0 gap-[10px] sm:gap-0">
          <div className="w-full sm:w-[200px] lg:w-[250px]  ml-0 sm:ml-[15%] lg:ml-[20%] ">
                <label className="font-inter font-semibold text-xl lg:text-2xl ">Old password :</label>
          </div>          
          <input type="password" className="border-[#A9AABC] border-2 w-[90%] sm:w-[250px] lg:w-[280px] outline-none py-1 text-center font-inter text-xl text-[#A9AABC]"/>
        </div>
        <div className="flex flex-col sm:flex-row  ustify-center sm:justify-normal sm:items-center w-full pl-[10%] sm:pl-0 gap-[10px] sm:gap-0">
           <div className="w-full sm:w-[200px] lg:w-[250px]  ml-0 sm:ml-[15%] lg:ml-[20%]">
                <label className="font-inter font-semibold text-xl lg:text-2xl  ">New password :</label>
            </div>          
            <input type="password" className="border-[#A9AABC] border-2 w-[90%] sm:w-[250px] lg:w-[280px] outline-none py-1 text-center font-inter text-xl text-[#A9AABC]"/>
        </div>
        <div className="flex flex-col sm:flex-row  py-16 ustify-center sm:justify-normal sm:items-center w-full pl-[10%] sm:pl-0 gap-[10px] sm:gap-0">
          <div className="w-full sm:w-[200px] lg:w-[250px] ml-0 sm:ml-[15%] lg:ml-[20%]">
              <label className="font-inter font-semibold text-xl lg:text-2xl  ">New password :</label>
          </div>
            <input type="password" className="border-[#A9AABC] border-2 w-[90%] sm:w-[250px] lg:w-[280px] outline-none py-1 text-center font-inter text-xl text-[#A9AABC]"/>
        </div>

      </div>
    </form>


  )
}
