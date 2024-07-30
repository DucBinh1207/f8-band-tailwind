import "./banner.css";

function Banner() {
  return (
    <div className="banner mt-[46.5px] font-lato">
      <div className="flex">
        <div className="banner-slide relative h-[calc(100vh-46.5px)] w-[100vw] bg-banner-1 bg-cover bg-center">
          <div className="absolute bottom-0 left-[50%] flex translate-x-[-50%] flex-col items-center justify-center px-[16px] py-[32px] text-white">
            <h3 className="text-[24px]">Los Angeles</h3>
            <b>We had the best time playing at Venice Beach!</b>
          </div>
        </div>
        <div className="banner-slide hidden h-[100vh] w-[100vw] bg-banner-2 bg-cover bg-center"></div>
        <div className="banner-slide hidden h-[100vh] w-[100vw] bg-banner-3 bg-cover bg-center"></div>
      </div>
    </div>
  );
}

export default Banner;
