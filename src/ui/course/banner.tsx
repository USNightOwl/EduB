import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="h-80 max-md:h-[14rem] overflow-clip w-full !bg-black/30 relative flex justify-center">
      <Image
        src="/banner-course.jpg"
        alt="main banner"
        width={1000}
        height={250}
        priority={true}
        className="object-contain w-full absolute top-0 left-0 -z-10"
      />
      <Image src="/sample/react-native.jpg" alt="course banner" width={800} height={250} priority={true} />
    </div>
  );
};

export default Banner;
