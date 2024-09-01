"use client";
import * as React from "react";
import { Button, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { type TransitionProps } from "@mui/material/transitions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import toast from "react-hot-toast";
import InputField from "@/ui/common/input-field";
import TableCategory from "@/ui/category/table-category";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const Category = () => {
  const t = useTranslations();
  const [openCategory, setOpenCategory] = React.useState(false);
  const [category, setCategory] = React.useState<string>("");
  const [errorCategory, setErrorCategory] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState(false);

  const handleClickOpenCategory = () => {
    setOpenCategory(true);
  };
  const handleCloseCategory = () => {
    setOpenCategory(false);
  };

  const handleAddNewCategory = async () => {
    if (category.length <= 0) {
      setErrorCategory("category-required");
    } else {
      setErrorCategory("");
      setIsLoading(true);
      try {
        const res = await fetch("/api/category", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            category,
          }),
        });
        const json = await res.json();
        if (res.status === 200) {
          toast.success("Add category successfully");
          setCategory("");
          setTimeout(() => {
            window.location.reload();
          }, 100);
        } else {
          toast.error(json.message as string);
        }
      } catch (error) {
        toast.error("Error");
      }
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div>
        <div className="flex items-center justify-between mb-2">
          <Typography variant="h5" className="mb-2">
            {t("Course.category")}
          </Typography>
          <Button
            startIcon={<AddIcon />}
            variant="contained"
            color="success"
            className="text-white"
            onClick={handleClickOpenCategory}
          >
            {t("Course.new-category")}
          </Button>
          <Dialog
            open={openCategory}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleCloseCategory}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle className="flex gap-2 justify-between items-center">
              {t("Course.new-category")}
              <IconButton aria-label="delete" onClick={handleCloseCategory}>
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description" className="w-full flex flex-col gap-8">
                <InputField
                  title={t("Course.category")}
                  value={category}
                  setValue={setCategory}
                  errorMessage={errorCategory}
                  disabled={isLoading}
                />
                <Button
                  variant="contained"
                  color="success"
                  className="text-white"
                  onClick={handleAddNewCategory}
                  disabled={isLoading}
                >
                  {t("Global.add")}
                </Button>
              </DialogContentText>
            </DialogContent>
          </Dialog>
        </div>
        <TableCategory />
      </div>
    </div>
  );
};

export default Category;
