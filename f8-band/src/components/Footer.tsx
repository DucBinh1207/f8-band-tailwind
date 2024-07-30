function Footer() {
  return (
    <div className="footer">
      <img
        src="https://www.w3schools.com/w3images/map.jpg"
        alt=""
        className="w-[100%] grayscale-[50%]"
      />
      <div className="flex w-[100%] flex-col items-center py-[64px] text-[24px] opacity-60">
        <div className="flex gap-[5px]">
          <i className="fa-brands fa-square-facebook"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-snapchat"></i>
          <i className="fa-brands fa-pinterest-p"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-linkedin-in"></i>
        </div>
        <div className="my-[15px] text-[15px] leading-[22.5px]">
          Powered by w3.css
        </div>
      </div>
    </div>
  );
}

export default Footer;
