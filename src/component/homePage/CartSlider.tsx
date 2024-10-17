import React from "react";
import star from "../../assets/home/Star 1.svg"
import subCategory from "../../assets/home/iconamoon_category-thin.svg"
import userImg from "../../assets/home/user.svg"
import frame from "../../assets/home/Frame.svg"
import ice from "../../assets/home/ice.svg"
import door from "../../assets/home/doors.svg"
import { productCart } from "../../content/statckValue";
import arrowRight from "../../assets/home/arrow-right.svg"


const CartSlider: React.FC<any> = ({ data }) => {
  return(
    <div className="bg-white shadow-lg rounded-lg p-5 hover:scale-110 duration-300 transition-all ">
      {/* Image */}
      <div className="relative">
        <img
          src={data?.images[0]?? null}
          alt={data.title}
          className="rounded-t-lg w-full h-40 object-cover"
        />
        <button className="absolute top-2 right-2 p-1  bg-primery rounded-full shadow-lg">
        <svg
          className=""
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.1 18.55L12 18.65L11.89 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 6 11.07 7.36H12.93C13.46 6 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55ZM16.5 3C14.76 3 13.09 3.81 12 5.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5C2 12.27 5.4 15.36 10.55 20.03L12 21.35L13.45 20.03C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z"
              fill="#333"
            />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="">
        {/* Title */}
        <h2 className="text-lg font-bold truncate w-full">{data.title}</h2>
        <div className="flex items-center text-center">
         <img src={star} alt="stare" />
          <span className="ml-1 text-sm text-dark">{data.rate ?? 0}</span>
        </div>

        {/* Subcategory */}
        <div className="text-sm text-dark font-semibold flex items-center gap-2 my-3">
          <img src={subCategory} alt="sub category icon" />
          Sub Category
          </div>

        {/* Features */}
        <div className="grid grid-cols-2 gap-2 text-sm text-textLight">
          <div className="flex items-center  text-sm">
            <img src={userImg} alt="user icon" />
            {productCart.Passagers}
          </div>
          <div className="flex items-center  text-sm">
            <img src={frame} alt="user icon" />
            {productCart.branch}
          </div>
          <div className="flex items-center  text-sm">
            <img src={ice} alt="user icon" />
            {productCart.air}
          </div>
          <div className="flex items-center  text-sm">
            <img src={door} alt="user icon" />
            {productCart.door}
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-3 flex">
          <button
          style={{backgroundColor:data.tag.color , color:data.tag.font_color }}
          className={` bg-blue-[${data.tag.color}] text-[${data.tag.font_color}] py-1 px-3 rounded-sm text-sm`}>
            {data.tag.tag}
          </button>
        </div>

        {/* Price */}
        <hr className="border-textLight w-90% my-4" />
        <div className="border-textLight text-sm font-normal flex items-center justify-between">
          <p>price</p>
         <p className="flex items-center gap-2">  <span className="text-lg font-semibold  ">{data.prices?.day_price?? "null"}</span>/day</p>
        </div>

        {/* View Details Button */}
        <button className="mt-3 w-full py-2  border border-yalwe text-dark  rounded-lg text-lg flex items-center justify-center">
          View Details
          <img src={arrowRight} alt="arrowRight" />
        </button>
      </div>
    </div>
  );
}
export default CartSlider
