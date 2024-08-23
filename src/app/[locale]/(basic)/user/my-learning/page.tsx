import Container from "@mui/material/Container";
import React from "react";
import { type Metadata } from "next";
import SideBar from "@/ui/user/side-bar";

export const metadata: Metadata = {
  title: "EduB - My learning - Choose your course, master your future",
  description: "Choose your course, master your future",
  icons: "/logo.png",
};

const Page = () => {
  return (
    <Container
      maxWidth={false}
      sx={{ bgcolor: "background.main", color: "primary.main" }}
      className="flex gap-2 relative w-full p-0 overflow-x-hidden"
    >
      <SideBar>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae nobis pariatur delectus illum id odio ex
          sint voluptatibus, sunt corporis? Porro deserunt eum explicabo quod obcaecati? Pariatur quae quod voluptates?
          Obcaecati repellendus molestias eveniet iure, neque labore? Sequi eveniet necessitatibus ex voluptate enim
          rerum consequuntur quia quae, nostrum impedit porro consectetur cupiditate hic quo molestiae, sit vero
          nesciunt incidunt? Adipisci! Nam temporibus quibusdam totam consectetur optio laborum beatae ipsa delectus
          sequi ut laboriosam exercitationem non enim harum nesciunt cum illo quod, perspiciatis in accusantium. Velit
          repudiandae et quis doloribus repellendus? Alias illum at incidunt, cumque provident sed distinctio deleniti
          in dignissimos! Recusandae neque veritatis perspiciatis, numquam omnis consectetur repellendus dicta fugiat
          vero quas. Dolore sapiente itaque facilis iusto minima. Optio. Odit hic corrupti tempore reprehenderit maiores
          unde. Inventore magnam, repudiandae amet ducimus aliquid, rem maxime doloribus eaque, facere aut minima?
          Doloremque aut excepturi nobis eius similique quae eveniet perferendis consequuntur. Odit ea aut vel maiores
          culpa earum facilis excepturi doloribus! Cupiditate neque voluptate omnis ab exercitationem quaerat! Eligendi
          aliquam accusamus odit architecto nulla soluta facilis iure, ad quos alias totam. Enim perspiciatis eaque
          tempora quisquam adipisci praesentium sed quae exercitationem at! Voluptate vero sit fugiat dolor quasi quo
          dicta quia at velit accusantium, quod repellat eligendi perferendis eaque iure numquam. Reprehenderit dolor
          mollitia natus odio itaque beatae sed excepturi voluptas! Beatae omnis aut quibusdam architecto totam! Illum
          nulla accusamus, officia fugiat quas maxime doloremque cupiditate eius, explicabo, earum ipsam libero.
          Quibusdam, suscipit officiis voluptatibus natus possimus neque dolor eveniet perferendis adipisci est illum
          illo? Perspiciatis, odio, nobis nulla ab maiores libero, maxime reiciendis quisquam dolorem mollitia voluptate
          recusandae tempore repellat. Quas ducimus voluptatem modi veniam? Quas quaerat eos, vero distinctio ut
          accusamus ipsam nemo. Eveniet, incidunt dolorum autem temporibus sed dolores nostrum debitis est doloremque
          illum ut quaerat animi iusto!
        </div>
      </SideBar>
    </Container>
  );
};

export default Page;
