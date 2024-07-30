function Contact() {
  return (
    <div className="contact font-lato">
      <div className="m-auto flex max-w-[800px] flex-col items-center px-[16px] py-[64px]">
        <h2 className="my-[10px] text-[30px] font-normal tracking-[4px]">
          CONTACT
        </h2>
        <i className="my-[15px] opacity-60"> Fan? Drop a note! </i>
        <div className="flex w-[100%] py-[32px]">
          <div className="flex w-[50%] flex-col text-[18px] leading-[27px]">
            <div>
              <i className="fa-solid fa-location-dot w-[30px]"></i> Chicago, US
            </div>
            <div>
              <i className="fa-solid fa-phone w-[30px]"></i> Phone: +00 151515
            </div>
            <div>
              <i className="fa-solid fa-envelope w-[30px]"></i> Email:
              mail@mail.com
            </div>
          </div>
          <div className="flex w-[50%] flex-col text-[15px] leading-[22.5px]">
            <form action="">
              <div className="mb-[8px] flex justify-between">
                <input
                  type="text"
                  placeholder="Name"
                  className="border border-[#ccc] p-[8px] placeholder-[#757575]"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="border border-[#ccc] p-[8px] placeholder-[#757575]"
                />
              </div>
              <input
                type="text"
                placeholder="Message"
                className="w-[100%] border border-[#ccc] p-[8px] placeholder-[#757575]"
              />
              <div className="my-[16px]">
                <button className="float-right bg-black px-[16px] py-[8px] text-[15px] leading-[22.5px] text-white">
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
