"use client";
import React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { styled } from "@mui/material/styles";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { type IBreadcumb } from "@/types/global";
import { Link } from "@/navigation";

const CustomTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
}));

const MyBreadcrumbs = ({ listBread }: { listBread: IBreadcumb[] }) => {
  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      separator={<NavigateNextIcon fontSize="medium" sx={{ color: "primary.main" }} />}
    >
      {listBread.map((item) => (
        <Link href={{ pathname: "/course/[id]", params: { id: item.id } }} key={item.slug}>
          <CustomTypography className="font-bold hover:underline" variant="h6">
            {item.name}
          </CustomTypography>
        </Link>
      ))}
    </Breadcrumbs>
  );
};

export default MyBreadcrumbs;
