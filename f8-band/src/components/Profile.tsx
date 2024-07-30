function Profile() {
  return (
    <div className="profile font-lato">
      <div className="m-auto flex max-w-[800px] flex-col items-center px-[16px] py-[64px]">
        <h2 className="my-[10px] text-[30px] font-normal tracking-[4px]">
          THE BAND
        </h2>
        <i className="my-[15px] opacity-60"> We love music</i>
        <p className="mb-[15px] text-justify text-[15px] leading-[22.5px]">
          We have created a fictional band website. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>

        <div className="flex w-[100%] py-[32px]">
          <div className="item flex w-[33.3333333%] flex-col items-center">
            <p className="my-[15px] text-[15px] leading-[22.5px]">Name</p>
            <img
              src="https://www.w3schools.com/w3images/bandmember.jpg"
              alt=""
              className="w-[60%]"
            />
          </div>
          <div className="item flex w-[33.3333333%] flex-col items-center">
            <p className="my-[15px] text-[15px] leading-[22.5px]">Name</p>
            <img
              src="https://www.w3schools.com/w3images/bandmember.jpg"
              alt=""
              className="w-[60%]"
            />
          </div>
          <div className="item flex w-[33.3333333%] flex-col items-center">
            <p className="my-[15px] text-[15px] leading-[22.5px]">Name</p>
            <img
              src="https://www.w3schools.com/w3images/bandmember.jpg"
              alt=""
              className="w-[60%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
