import logo from "../assets/FAQ/Icon.svg";

const Conditions = () => {
  return (
    <section className="max-w-[97rem] mx-auto ">
      <div className="py-4 sm:py-8 px-7 flex-col flex gap-5">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-lg sm:text-xl md:text-3xl lg:text-[2rem] text-[#1F2732] font-medium text-center">
          Terms and Conditions
          </h1>
          <h3 className="text-lg sm:text-xl md:text-3xl lg:text-3xl  text-red font-semibold  text-center">
          Last Update 2/10/2023  
          </h3>
          <img src={logo} alt="FAQ`s icon" />
        </div>
        <div className="p-2 text-sm font-normal text-[#696969] ">
            <p>Welcome to YJOZ. Before using , please carefully review the following Terms and Conditions, as they govern the contractual relationship between you  and YJOZ.</p>
        </div>
        <div className="p-6 text-[1rem] rounded-lg shadow-sm bg-white  ">
            <p className="text-xl sm:text-2xl text-red font-bold py-2">→ 1. YJOZ is a platform that allows</p>
            <ol className=" order-last px-2">
                <li>(a) users to advertise items for rent (such users being "owners").</li>
                <li>(b) owners to communicate with, and enter into rental arrangements with other users (such users who borrow are referred to as "renters").</li>
                <li>(c) renters to pay owners for renting the relevant items; and</li>
                <li>(d) users to resolve disputes concerning the rentd items, which we make available to you through the YJOZ application available for download on your mobile device called "YJOZ App".</li>
            </ol>
        </div>
        <div className="p-6 text-[1rem] rounded-lg shadow-sm bg-white  ">
            <p className="text-xl sm:text-2xl text-red font-bold py-2">→ 2. YJOZ Platform</p>
            <ol className=" order-last px-2">
                <li>2.1 We may, from time-to-time, provide social features on the YJOZ Platform that enable you to message and share information about your use of the YJOZ Platform with other users.</li>
               <li>2.2 Any use of these social features should comply with our Rules of Acceptable Use below.</li>
            </ol>
        </div>
       
      </div>
    </section>
  )
}

export default Conditions