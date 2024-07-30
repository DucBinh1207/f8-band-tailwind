function Booking() {
  return (
    <div className="booking bg-black font-lato text-white">
      <div className="m-auto flex max-w-[800px] flex-col items-center px-[16px] py-[64px]">
        <h2 className="my-[10px] text-[30px] font-normal tracking-[4px]">
          TOUR DATES
        </h2>
        <i className="my-[15px] opacity-60"> Remember to book your tickets!</i>{" "}
        <br />
        <ul className="month-booking w-[100%] border border-solid border-[#ccc] bg-white text-[#757575]">
          <li className="month-item flex px-[16px] py-[8px] text-[15px] leading-[22.5px]">
            September
            <p className="ml-[16px] bg-[#f44336] px-[8px] text-center text-white">
              Sold Out
            </p>
          </li>
          <li className="month-item flex px-[16px] py-[8px] text-[15px] leading-[22.5px]">
            October{" "}
            <p className="ml-[16px] bg-[#f44336] px-[8px] text-center text-white">
              Sold Out
            </p>
          </li>
          <li className="month-item px-[16px] py-[8px]">
            November
            <p className="float-right mr-[16px] rounded-[50%] bg-black px-[8px] text-white">
              3
            </p>
          </li>
        </ul>
        <div className="ticket flex w-[100%] py-[32px]">
          <div className="ticket-item mb-[16px] mr-[8px] flex w-[33.3333333%] flex-col items-start text-black">
            <img
              src="https://www.w3schools.com/w3images/newyork.jpg"
              alt=""
              className="align-middle"
            />
            <div className="bg-white px-[16px]">
              <h3 className="my-[15px] text-[15px] font-bold leading-[22.5px]">
                New York
              </h3>
              <p className="my-[15px] text-[15px] leading-[22.5px] opacity-60">
                Fri 27 Nov 2016
              </p>
              <p className="my-[15px] text-[15px] leading-[22.5px]">
                Praesent tincidunt sed tellus ut rutrum sed vitae justo.
              </p>
              <button className="my-[15px] mb-[16px] bg-black px-[16px] py-[8px] text-white">
                Buy Tickets
              </button>
            </div>
          </div>
          <div className="ticket-item mx-[8px] mb-[16px] flex w-[33.3333333%] flex-col items-start text-black">
            <img
              src="https://www.w3schools.com/w3images/paris.jpg"
              alt=""
              className="align-middle"
            />
            <div className="bg-white px-[16px]">
              <h3 className="my-[15px] text-[15px] font-bold leading-[22.5px]">
                Paris
              </h3>
              <p className="my-[15px] text-[15px] leading-[22.5px] opacity-60">
                Sat 28 Nov 2016
              </p>
              <p className="my-[15px] text-[15px] leading-[22.5px]">
                Praesent tincidunt sed tellus ut rutrum sed vitae justo.
              </p>
              <button className="my-[15px] mb-[16px] bg-black px-[16px] py-[8px] text-white">
                Buy Tickets
              </button>
            </div>
          </div>
          <div className="ticket-item mb-[16px] ml-[8px] flex w-[33.3333333%] flex-col items-start text-black">
            <img
              src="https://www.w3schools.com/w3images/sanfran.jpg"
              alt=""
              className="align-middle"
            />
            <div className="bg-white px-[16px]">
              <h3 className="my-[15px] text-[15px] font-bold leading-[22.5px]">
                San Francisco
              </h3>
              <p className="my-[15px] text-[15px] leading-[22.5px] opacity-60">
                Sun 29 Nov 2016
              </p>
              <p className="my-[15px] text-[15px] leading-[22.5px]">
                Praesent tincidunt sed tellus ut rutrum sed vitae justo.
              </p>
              <button className="my-[15px] mb-[16px] bg-black px-[16px] py-[8px] text-white">
                Buy Tickets
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
