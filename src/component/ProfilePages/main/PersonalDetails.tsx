import { useSelector } from "react-redux";
import { UserProfile } from "../../../type/reduxType";


const PersonalDetails = () => {

  const userData:UserProfile = useSelector((state: any) => state.userProfileSlice);

  return (
    <div className="py-4 sm:py-6 md:py-8 ">
      <form className="grid px-3 grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6">
      <div className="flex items-center justify-between sm:col-span-2">
        <h1 className="text-dark text-lg sm:text-xl md:text-2xl lg:text-[2rem] font-semibold">
          Personal Details
        </h1>
        <button type="submit" className="rounded-md hidden sm:block text-white px-14 py-3 bg-gradient-to-r from-[#E9233A] to-[#CC3030] font-bold text-sm">
          Save
        </button>
      </div>
        
        <div className="w-full">
          <label className="text-dark text-sm sm:text-[1rem] font-medium ">  
            First Name
          </label>
          <input
            type="text"
            className="w-full text-dark opacity-40 p-3 shadow-sm rounded-sm bg-white mt-2"
            placeholder={userData.first_name ?? "Your First Name"}
          />
        </div>
        <div className="w-full">
          <label className="text-dark text-sm sm:text-[1rem] font-medium ">
            
            Last Name
          </label>
          <input
            type="text"
            className="w-full text-dark opacity-40 p-3 shadow-sm rounded-sm bg-white mt-2"
            placeholder={userData.last_name ?? "Your Last Name"}
          />
        </div>
        <div className="w-full">
          <label className="text-dark text-sm sm:text-[1rem] font-medium ">
            Email
          </label>
          <input
            type="text"
            className="w-full text-dark opacity-40 p-3 shadow-sm rounded-sm bg-white mt-2"
            placeholder={userData.email?? "test@test.com"}
          />
        </div>
        <div className="w-full">
          <label className="text-dark text-sm sm:text-[1rem] font-medium ">
            
            Phone Number
          </label>
          <input
            type="text"
            className="w-full text-dark opacity-40 p-3 shadow-sm rounded-sm bg-white mt-2"
            placeholder={userData.phone_number?? "988754652"}
          />
        </div>
        <div className="w-full">
          <label className="text-dark text-sm sm:text-[1rem] font-medium ">
            {" "}
            Country{" "}
          </label>
          <input
            type="text"
            className="w-full text-dark opacity-40 p-3 shadow-sm rounded-sm bg-white mt-2"
            placeholder={userData.selected_country.country_en ?? "United Arab Emirates"}
          />
        </div>
        <div className="w-full sm:col-span-2">
          <label className="text-dark text-sm sm:text-[1rem] font-medium ">
            {" "}
            About{" "}
          </label>
          <textarea
            className="w-full text-dark opacity-40 p-3 shadow-sm resize-none rounded-sm  h-24 sm:h-40 bg-white mt-2"
            placeholder={userData.about_me ?? "Lorem ipsum dolor sit amet consectetu"}
          />

        </div>
        <button type="submit" className="rounded-md sm:hidden text-white px-14 py-3 bg-gradient-to-r from-[#E9233A] to-[#CC3030] font-bold text-sm">
          Save
        </button>
      </form>
    </div>
  );
};

export default PersonalDetails;
