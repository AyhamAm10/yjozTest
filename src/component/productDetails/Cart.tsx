import { useSelector } from "react-redux";
import subCategory from "../../assets/productDetails/Frame.svg";
import branch from "../../assets/productDetails/branch.svg";
import stare from "../../assets/productDetails/star.svg";
import color from "../../assets/productDetails/color.svg";
import date from "../../assets/productDetails/date.svg";
import comp from "../../assets/productDetails/comp.svg";
import location from "../../assets/productDetails/location.svg";
import irtc from "../../assets/productDetails/artc.svg";
import money from "../../assets/productDetails/money.svg";
import flowpite from "../../assets/productDetails/flowbite_profile-card-outline.svg";
import view from "../../assets/productDetails/view.svg"
import CostumBtn from "../costumeComponent/CostumBtn";
const Cart: React.FC = () => {
  const product = useSelector(
    (state: any) => state.productDetailsSlice
  ).productDetailsState;
  return (
    <div className="md:bg-white rounded-md md:shadow-md px-6 sm:px-8 md:px-10 h-fit py-4 sm:py-6 md:py-8  md:translate-y-[-70px] flex flex-col gap-3 md:max-w-[450px]  ">
      <h3 className="text-dark text-lg sm:text-3xl lg:text-4xl  font-medium">
        {product.title}
      </h3>
      <div className="flex items-center gap-2 text-[#959595] mt-3">
        <img src={subCategory} alt="category" className="w-5 " />
        <span>{product.category.category} </span>
        <img src={branch} alt="category" className="w-5 ml-2" />
        <span>{product.category.sub_categories[0].category}</span>
        <img src={stare} alt="category" className="w-5 ml-2" />
        <span>{product.rate ?? 0}</span>
      </div>
      <div className="flex items-center gap-2 text-[#959595] mt-3">
        <img src={color} alt="category" className="w-5 " />
        <span>{product.category.category} </span>
        <img src={date} alt="category" className="w-5 ml-2" />
        <span>{product.category.sub_categories[0].category}</span>
        <img src={comp} alt="category" className="w-5 ml-2" />
        <span>{product.brand?.name ?? "not found"}</span>
      </div>
      <div className="flex items-center gap-2 mt-3 flex-wrap">
        <img src={location} alt="category" className="w-5 " />
        {product.available_cities &&
          product.available_cities.map((city: any) => (
            <div
              key={city.id}
              className="px-2 py-1 border border-red text-red rounded-sm"
            >
              {city.name}
            </div>
          ))}
      </div>
      <div className="flex items-center gap-2 mt-3">
        <img src={irtc} alt="category" className="w-5 " />
        {product.tag && (
          <div
            style={{
              background: product.tag.color,
              color: product.tag.font_color,
            }}
            className={`py-2 px-1 rounded-sm text-sm bg-[${product.tag.color}] text-[${product.tag.font_color}]`}
          >
            {product.tag.tag ?? " not found"}
          </div>
        )}
      </div>
      <div className="flex items-center gap-2 mt-3">
        <img src={money} alt="category" className="w-5 " />
        {product.prices && (
          <div className="flex items-center gap-6">
            <div className="text-xs flex flex-col items-center border border-dark px-5 py-1 rounded-sm ">
              <p className="text-[#ACA9A9] font-medium">1 Day</p>
              <p>{product.prices.day_price ?? " not found"}</p>
            </div>
            <div className="text-xs flex flex-col items-center border border-dark px-5 py-1 rounded-sm ">
              <p className="text-[#ACA9A9] font-medium">7 Day</p>
              <p>{product.prices.week_price ?? " not found"}</p>
            </div>
            <div className="text-xs flex flex-col items-center border border-dark px-5 py-1 rounded-sm ">
              <p className="text-[#ACA9A9] font-medium">30 Day</p>
              <p>{product.prices.month_price ?? " not found"}</p>
            </div>
          </div>
        )}
      </div>
        {product.product_keywords && (
          <div className="flex items-center gap-2 mt-3 w-3/5">
            <img src={flowpite} alt="" className="w-5 " />
            <p className="text-dark text-xs sm:text-sm font-medium truncate xl:text-lg">{product.product_keywords}</p>
            <img src={view} alt="" className="w-5 " />
          </div>
        )}

        <div className="w-full p-5">
          <CostumBtn value="Order Now" style="w-full" />
        </div>
    </div>
  );
};

export default Cart;
