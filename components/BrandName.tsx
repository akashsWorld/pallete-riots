import Image from "next/image";
import brandImage from '@/public/brand-name.svg';

const BrandName = ({ className }: { className?: string }) => {

  // const brandName = (
  //   <div className="leading-0.5">
  //     <div className="flex gap-2 min-w-fit text-sm md:text-2xl">
  //       <h2 className=" font-bold uppercase font-inter inline-block gradient-bg text-bg">
  //         pale
  //         <span className="tracking-tighter">tt</span>e
  //       </h2>
  //       <h2 className="font-regular uppercase font-inter inline-block">
  //         riots
  //       </h2>
  //     </div>
  //     <div className="w-fit text-[8px] tracking-[0.16em] md:tracking-[0.22em] md:text-xs">
  //       <h3 className="text-inherit font-regular inline-block">concevoir | ‘excellence</h3>
  //     </div>
  //   </div>
  // )


  return (
    <div className={`min-w-[80px] md:min-w-[150px] lg:min-w-[200px] ${className}`}>
      <Image className="object-contain w-full" src={brandImage} height={500} width={500} alt ="anIm"/>
    </div>
  );
};

export default BrandName;

