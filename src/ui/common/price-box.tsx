import { Stack, Typography } from "@mui/material";
import React from "react";
import { calcDiscount, convertToVND } from "@/utils/helper";

interface IPrice {
  price: number;
  discount?: number;
}

const PriceBox = ({ price, discount = 0 }: IPrice) => {
  return (
    <div className="flex w-full justify-end mt-2">
      <Stack direction="row">
        {discount < 100 && price > 0 ? (
          <>
            <Typography className="text-sm line-through">{convertToVND(price)}</Typography>
            <Typography className="font-bold">{convertToVND(calcDiscount(price, discount))}</Typography>
          </>
        ) : (
          <Typography className="font-bold">{price <= 0 || discount >= 100 ? "Free" : convertToVND(price)}</Typography>
        )}
      </Stack>
    </div>
  );
};

export default PriceBox;
