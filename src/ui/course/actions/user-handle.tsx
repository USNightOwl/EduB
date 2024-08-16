import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import { useTranslations } from "next-intl";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AllInclusiveOutlinedIcon from "@mui/icons-material/AllInclusiveOutlined";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import PriceBox from "@/ui/common/price-box";

const UserHandle = () => {
  const t = useTranslations("Course.Actions");

  return (
    <div>
      <Card sx={{ bgcolor: "box.bg", color: "box.text" }}>
        <CardMedia sx={{ height: 230 }} image="/sample/react-native.jpg" title="course image" />
        <CardContent>
          <PriceBox price={1280000} discount={50} />
          <Stack spacing={3} mt={4}>
            <Button variant="contained" color="warning" className="text-white" endIcon={<FavoriteBorderOutlinedIcon />}>
              {t("add-to-watch-list")}
            </Button>
            <Button variant="contained" color="success" className="text-white" endIcon={<ShoppingCartOutlinedIcon />}>
              {t("buy-now")}
            </Button>
          </Stack>
        </CardContent>
        <CardActions>
          <Stack className="text-xs" ml={1} mb={1}>
            <div className="flex items-center gap-1">
              <RefreshOutlinedIcon className="text-base" />
              {t("refund")}
            </div>
            <div className="flex items-center gap-1 mt-1">
              <AllInclusiveOutlinedIcon className="text-base" />
              {t("lifetime")}
            </div>
          </Stack>
        </CardActions>
      </Card>
    </div>
  );
};

export default UserHandle;
