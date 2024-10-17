const RentingUnit = () => {
  return (
    <>
      <div className="flex items-end flex-wrap gap-5 sm:gap-8 sm:gap-8 md:gap-10 mt-3 sm:mt-6">
        <div className="flex flex-col gap-3 sm:w-auto w-full">
          <label
            className="text-dark opacity-80 text-sm sm:text-[1rem] font-medium"
            htmlFor="Renting unit"
          >
            Renting unit
          </label>
          <select
            name="Renting "
            className="p-3 text-dark opacity-40 rounded-sm  sm:w-full bg-white lg:w-[30rem]"
            id=""
          >
            <option value="Daily">Daily</option>
          </select>
        </div>
        <div className="flex items-center gap-3 ">
          <span className="text-dark font-medium text-sm sm:text-[1rem] ">
            For Renting
          </span>
          <svg
            className=" cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M20 12V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H15"
              stroke="url(#paint0_linear_339_7813)"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_339_7813"
                x1="4"
                y1="12"
                x2="20"
                y2="12"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#E9233A" />
                <stop offset="1" stop-color="#FFC41B" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="flex items-center gap-3 ">
          <span className="text-dark font-medium text-sm sm:text-[1rem] ">
            For Selling
          </span>
          <svg
            className=" cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M20 12V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H15"
              stroke="url(#paint0_linear_339_7813)"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_339_7813"
                x1="4"
                y1="12"
                x2="20"
                y2="12"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#E9233A" />
                <stop offset="1" stop-color="#FFC41B" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="flex items-center gap-3 ">
          <span className="text-dark font-medium text-sm sm:text-[1rem] ">
            Rent To Buy
          </span>
          <svg
            className=" cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M20 12V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H15"
              stroke="url(#paint0_linear_339_7813)"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_339_7813"
                x1="4"
                y1="12"
                x2="20"
                y2="12"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#E9233A" />
                <stop offset="1" stop-color="#FFC41B" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="flex flex-col gap-3 w-full my-3 sm:my-6 md:my-9">
        <label
          className="text-dark opacity-80 text-sm sm:text-[1rem] font-medium"
          htmlFor="Renting unit"
        >
          Item Info
        </label>
        <input
          type="text"
          className="p-3 text-dark opacity-40 rounded-sm  sm:w-full bg-white "
          placeholder="Title"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-9">
        <div className="flex flex-col gap-3  w-full">
          <label
            className="text-dark opacity-80 text-sm sm:text-[1rem] font-medium"
            htmlFor="Renting unit"
          >
            Main category
          </label>
          <select
            name="Renting "
            className="p-3 text-dark opacity-40 rounded-sm  sm:w-full bg-white "
            id=""
          >
            <option value="Main category">Main category</option>
          </select>
        </div>
        <div className="flex flex-col gap-3  w-full">
          <label
            className="text-dark opacity-80 text-sm sm:text-[1rem] font-medium"
            htmlFor="Renting unit"
          >
            Sub category
          </label>
          <select
            name="Renting "
            className="p-3 text-dark opacity-40 rounded-sm  sm:w-full bg-white "
            id=""
          >
            <option value="Daily">Sub category</option>
          </select>
        </div>
        <div className="flex flex-col gap-3  w-full">
          <label
            className="text-dark opacity-80 text-sm sm:text-[1rem] font-medium"
            htmlFor="Renting unit"
          >
            Variant
          </label>
          <select
            name="Renting "
            className="p-3 text-dark opacity-40 rounded-sm  sm:w-full bg-white "
            id=""
          >
            <option value="Variant">Variant</option>
          </select>
        </div>
        <div className="flex flex-col gap-3 w-full ">
          <label
            className="text-dark opacity-80 text-sm sm:text-[1rem] font-medium"
            htmlFor="Renting unit"
          >
            Number of doors
          </label>
          <input
            type="text"
            className="p-3 text-dark opacity-40 rounded-sm  sm:w-full bg-white "
            placeholder="Number of doors"
          />
        </div>
        <div className="flex flex-col gap-3 w-full ">
          <label
            className="text-dark opacity-80 text-sm sm:text-[1rem] font-medium"
            htmlFor="Renting unit"
          >
            Number of doors
          </label>
          <input
            type="text"
            className="p-3 text-dark opacity-40 rounded-sm  sm:w-full bg-white "
            placeholder="Number of doors"
          />
        </div>
        <div className="flex flex-col gap-3 w-full">
          <label
            className="text-dark opacity-80 text-sm sm:text-[1rem] font-medium"
            htmlFor="Renting unit"
          >
            Variant
          </label>
          <select
            name="Gear car "
            className="p-3 text-dark opacity-40 rounded-sm  sm:w-full bg-white "
            id=""
          >
            <option value="Variant">Gear car</option>
          </select>
        </div>
      </div>
      {/* ?description  */}

      <div className="flex flex-col gap-3 w-full my-3 sm:my-6 md:my-9 ">
        <label
          className="text-dark opacity-80 text-sm sm:text-[1rem] font-medium"
          htmlFor="Renting unit"
        >
          Number of doors
        </label>
        <textarea
          className="p-3 resize-none h-40 w-full text-dark opacity-40 rounded-sm  sm:w-full bg-white "
          placeholder="Number of doors"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-9">
        <div className="flex flex-col gap-3 w-full ">
          <label
            className="text-dark opacity-80 text-sm sm:text-[1rem] font-medium"
            htmlFor="Renting unit"
          >
            Item price car
          </label>
          <input
            type="text"
            className="p-3 text-dark opacity-40 rounded-sm  sm:w-full bg-white "
            placeholder="Day"
          />
        </div>

        <div className="flex flex-col gap-3 w-full ">
          <label
            className="text-dark opacity-80 text-sm sm:text-[1rem] font-medium"
            htmlFor="Renting unit"
          >
            Item price car
          </label>
          <input
            type="text"
            className="p-3 text-dark opacity-40 rounded-sm  sm:w-full bg-white "
            placeholder="7 day price"
          />
        </div>

        <div className="flex flex-col gap-3 w-full ">
          <label
            className="text-dark opacity-80 text-sm sm:text-[1rem] font-medium"
            htmlFor="Renting unit"
          >
            Item price car
          </label>
          <input
            type="text"
            className="p-3 text-dark opacity-40 rounded-sm  sm:w-full bg-white "
            placeholder="28 day price"
          />
        </div>

        <div className="flex flex-col gap-3 w-full">
          <label
            className="text-dark opacity-80 text-sm sm:text-[1rem] font-medium"
            htmlFor="Renting unit"
          >
            item Status
          </label>
          <select
            name="Gear car "
            className="p-3 text-dark opacity-40 rounded-sm  sm:w-full bg-white "
            id=""
          >
            <option value="Variant">Like New</option>
          </select>
        </div>

        <div className="flex flex-col gap-3 w-full ">
          <label
            className="text-dark opacity-80 text-sm sm:text-[1rem] font-medium"
            htmlFor="Renting unit"
          >
            Item Price
          </label>
          <input
            type="text"
            className="p-3 text-dark opacity-40 rounded-sm  sm:w-full bg-white "
            placeholder="Item Price"
          />
        </div>

        <div className="flex flex-col gap-3 w-full ">
          <label
            className="text-dark opacity-80 text-sm sm:text-[1rem] font-medium"
            htmlFor="Renting unit"
          >
            Quantity
          </label>
          <input
            type="text"
            className="p-3 text-dark opacity-40 rounded-sm  sm:w-full bg-white "
            placeholder="Quantity"
          />
        </div>

        <div className="flex flex-col gap-3 w-full ">
          <label
            className="text-dark opacity-80 text-sm sm:text-[1rem] font-medium"
            htmlFor="Renting unit"
          >
            Minimum rental days
          </label>
          <input
            type="text"
            className="p-3 text-dark opacity-40 rounded-sm  sm:w-full bg-white "
            placeholder="Minimum rental days"
          />
        </div>

        <div className=" sm:col-span-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 sm:gap-6 md:gap-10 lg:gap-12 xl:gap-14">
          <div className="flex items-center gap-3 justify-between ">
            <span className="text-dark font-medium text-[1rem] ">
              Umm Al Quwain
            </span>
            <svg
              className=" cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M20 12V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H15"
                stroke="url(#paint0_linear_339_7813)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_339_7813"
                  x1="4"
                  y1="12"
                  x2="20"
                  y2="12"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E9233A" />
                  <stop offset="1" stop-color="#FFC41B" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex items-center gap-3 justify-between">
            <span className="text-dark font-medium text-[1rem] ">
            Ras Al Khaimah
            </span>
            <svg
              className=" cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M20 12V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H15"
                stroke="url(#paint0_linear_339_7813)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_339_7813"
                  x1="4"
                  y1="12"
                  x2="20"
                  y2="12"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E9233A" />
                  <stop offset="1" stop-color="#FFC41B" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex items-center gap-3 justify-between">
            <span className="text-dark font-medium text-[1rem] ">
            Abu Dhabi
            </span>
            <svg
              className=" cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M20 12V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H15"
                stroke="url(#paint0_linear_339_7813)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_339_7813"
                  x1="4"
                  y1="12"
                  x2="20"
                  y2="12"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E9233A" />
                  <stop offset="1" stop-color="#FFC41B" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex items-center gap-3 justify-between">
            <span className="text-dark font-medium text-[1rem] ">
            Dubai
            </span>
            <svg
              className=" cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M20 12V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H15"
                stroke="url(#paint0_linear_339_7813)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_339_7813"
                  x1="4"
                  y1="12"
                  x2="20"
                  y2="12"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E9233A" />
                  <stop offset="1" stop-color="#FFC41B" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex items-center gap-3 justify-between">
            <span className="text-dark font-medium text-[1rem] ">
            Fujairah
            </span>
            <svg
              className=" cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M20 12V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H15"
                stroke="url(#paint0_linear_339_7813)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_339_7813"
                  x1="4"
                  y1="12"
                  x2="20"
                  y2="12"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E9233A" />
                  <stop offset="1" stop-color="#FFC41B" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex items-center gap-3 justify-between">
            <span className="text-dark font-medium text-[1rem] ">
            Ajman
            </span>
            <svg
              className=" cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M20 12V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H15"
                stroke="url(#paint0_linear_339_7813)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_339_7813"
                  x1="4"
                  y1="12"
                  x2="20"
                  y2="12"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E9233A" />
                  <stop offset="1" stop-color="#FFC41B" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex items-center gap-3 justify-between">
            <span className="text-dark font-medium text-[1rem] ">
            Sharjah
            </span>
            <svg
              className=" cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M20 12V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H15"
                stroke="url(#paint0_linear_339_7813)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_339_7813"
                  x1="4"
                  y1="12"
                  x2="20"
                  y2="12"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E9233A" />
                  <stop offset="1" stop-color="#FFC41B" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default RentingUnit;
