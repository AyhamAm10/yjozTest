import img from "../../assets/profile/Tuesday (1).png";
import img2 from "../../assets/profile/Tuesday.png";
type props = {
  active: boolean;
  dayOff: boolean;
};
const WorkingCart: React.FC<props> = ({ active, dayOff }) => {
  return (
    <div className={` relative flex flex-col items-center py-3 gap-2 rounded-lg ${active? "bg-white border border-[#E1AF4C]": null}`}>
      <h3 className="text-[#868686] text-xs sm:text-sm font-medium">Sunday</h3>
      <div className="text-[#E1AF4C] gap-1 text-xs sm:text-sm flex-col flex items-center">
        <img src={dayOff ? img2 : img} alt="hours" />
        <p>10:00 - 19:00</p>
      </div>
      {
        active && 
        <h4 className=" absolute text-[#E1AF4C] font-medium text-xs sm:text-sm top-[-30px]">
            Today 
        </h4>
      }
      <h4></h4>
    </div>
  );
};

export default WorkingCart;
