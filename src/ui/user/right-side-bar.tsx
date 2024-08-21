import React from "react";
import { cn } from "@/lib/utils";

const RightSideBar = ({ openSideLeft }: { openSideLeft: boolean }) => {
  return (
    <div className={cn("px-1 w-full", !openSideLeft && "w-[134%] max-lg:w-[153%] max-md:w-full")}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit tempore praesentium sapiente asperiores, magni
      magnam assumenda commodi sint illo, quidem nemo repellendus ipsam in explicabo iste aut consequatur inventore
      provident. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto quasi ducimus, quisquam possimus
      dolorem fugiat blanditiis repudiandae, debitis quibusdam, inventore tempora corporis rerum impedit. Cupiditate,
      asperiores! Incidunt eos consectetur totam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias,
      nisi exercitationem. Ducimus voluptatem modi sequi velit aliquid eaque, doloribus est praesentium ipsam, ipsa
      tenetur aspernatur amet. Dolor amet ex rerum! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
      esse a placeat saepe harum blanditiis quisquam sunt, dolorum, tempore, omnis excepturi eaque dolor quia assumenda
      deserunt aspernatur molestias consectetur sit. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      Accusantium quis, consectetur, culpa similique eum tempore rem molestiae velit cumque dolorum nostrum reiciendis
      sit eos minima reprehenderit quia mollitia. Ipsum, sint. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Delectus ipsum placeat voluptates fugit earum consequatur! Vero tempore quas, nisi veritatis est in eos,
      accusantium non magnam dolor ea odio porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
      explicabo maiores quia optio soluta facilis in, tempora aperiam? Possimus quos aliquam sed numquam adipisci,
      deleniti nemo necessitatibus itaque hic? Ipsa! magnam assumenda commodi sint illo, quidem nemo repellendus ipsam
      in explicabo iste aut consequatur inventore provident. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      Architecto quasi ducimus, quisquam possimus dolorem fugiat blanditiis repudiandae, debitis quibusdam, inventore
      tempora corporis rerum impedit. Cupiditate, asperiores! Incidunt eos consectetur totam. Lorem ipsum dolor sit
      amet, consectetur adipisicing elit. Molestias, nisi exercitationem. Ducimus voluptatem modi sequi velit aliquid
      eaque, doloribus est praesentium ipsam, ipsa tenetur aspernatur amet. Dolor amet ex rerum! Lorem ipsum dolor sit
      amet consectetur, adipisicing elit. Corporis esse a placeat saepe harum blanditiis quisquam sunt, dolorum,
      tempore, omnis excepturi eaque dolor quia assumenda deserunt aspernatur molestias consectetur sit. Lorem ipsum
      dolor sit amet consectetur, adipisicing elit. Accusantium quis, consectetur, culpa similique eum tempore rem
      molestiae velit cumque dolorum nostrum reiciendis sit eos minima reprehenderit quia mollitia. Ipsum, sint. Lorem
      ipsum dolor sit amet, consectetur adipisicing elit. Delectus ipsum placeat voluptates fugit earum consequatur!
      Vero tempore quas, nisi veritatis est in eos, accusantium non magnam dolor ea odio porro? Lorem ipsum dolor sit
      amet consectetur adipisicing elit. Sunt explicabo maiores quia optio soluta facilis in, tempora aperiam? Possimus
      quos aliquam sed numquam adipisci, deleniti nemo necessitatibus itaque hic? Ipsa!
    </div>
  );
};

export default RightSideBar;
