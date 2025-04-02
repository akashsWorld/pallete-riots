import BrandName from "./BrandName";
import Buttton from "./Buttton";
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-auto min-h-[60px] md:min-h-[100px] mx-[10px] md:mx-[30px] xl:mx-[120px] relative">
      <a href="/"><BrandName className="w-[90px]"/></a>
      <div className="w-fit flex gap-4 lg:gap-9 navitems">
        <a href="#portfolio">Portfolio</a>
        <a href="#services">Services</a>
        <a href="#aboutus">About us</a>
      </div>
      <Buttton targetUrl="#contacts" className="w-fit md:w-[120px] lg:w-[183px] px-3" buttonName="Contact" />
    </nav>
  );
};

export default Navbar;
