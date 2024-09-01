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
import CustomSelect from "@/ui/common/custom-select";
import { type ITopic, type ICategory, type ITopicResponse } from "@/types/category";
import TableTopic from "@/ui/category/table-topic";

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

  const [openTopic, setOpenTopic] = React.useState(false);
  const [topic, setTopic] = React.useState<string>("");
  const [errorTopic, setErrorTopic] = React.useState<string>("");
  const [isLoading1, setIsLoading1] = React.useState(false);
  const [isLoading2, setIsLoading2] = React.useState(false);

  const [catSelect, setCatSelect] = React.useState<string>("");
  const [data, setData] = React.useState<ICategory[]>([]);
  const [data2, setData2] = React.useState<ITopicResponse[]>([]);

  React.useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading1(true);
        const res = await fetch("/api/category");
        const json = await res.json();
        if (res.status === 200) {
          setData(json.data as ICategory[]);
        }
        setIsLoading1(false);
      } catch (error) {
        setIsLoading1(false);
      }
    }

    async function fetchData2() {
      try {
        setIsLoading2(true);
        const res2 = await fetch("/api/topic");
        const json2 = await res2.json();
        if (res2.status === 200) {
          setData2(json2.data as ITopicResponse[]);
        }
        setIsLoading2(false);
      } catch (error) {
        setIsLoading2(false);
      }
    }

    fetchData();
    fetchData2();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAddNewCategory = async () => {
    if (category.length <= 0) {
      setErrorCategory("category-required");
    } else {
      setErrorCategory("");
      setIsLoading1(true);
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
      setIsLoading1(false);
    }
  };

  const handleAddNewTopic = async () => {
    if (topic.length <= 0) {
      setErrorTopic("topic-required");
    } else {
      setErrorCategory("");
      setIsLoading2(true);
      try {
        const res = await fetch("/api/topic", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            topic,
            categoryId: catSelect,
          }),
        });
        const json = await res.json();
        if (res.status === 200) {
          toast.success("Add topic successfully");
          setTopic("");
          setTimeout(() => {
            window.location.reload();
          }, 100);
        } else {
          toast.error(json.message as string);
        }
      } catch (error) {
        toast.error("Error");
      }
      setIsLoading2(false);
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
            onClick={() => setOpenCategory(true)}
          >
            {t("Course.new-category")}
          </Button>
          <Dialog
            open={openCategory}
            TransitionComponent={Transition}
            keepMounted
            onClose={() => setOpenCategory(false)}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle className="flex gap-2 justify-between items-center">
              {t("Course.new-category")}
              <IconButton aria-label="delete" onClick={() => setOpenCategory(false)}>
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
                  disabled={isLoading1}
                />
                <Button
                  variant="contained"
                  color="success"
                  className="text-white"
                  onClick={handleAddNewCategory}
                  disabled={isLoading1}
                >
                  {t("Global.add")}
                </Button>
              </DialogContentText>
            </DialogContent>
          </Dialog>
        </div>
        <TableCategory data={data} isLoading={isLoading1} />
      </div>

      {/* topic */}
      <div className="my-10">
        <div className="flex items-center justify-between mb-2">
          <Typography variant="h5" className="mb-2">
            {t("Course.topic")}
          </Typography>
          <Button
            startIcon={<AddIcon />}
            variant="contained"
            color="success"
            className="text-white"
            onClick={() => setOpenTopic(true)}
          >
            {t("Course.new-topic")}
          </Button>
          <Dialog
            open={openTopic}
            TransitionComponent={Transition}
            keepMounted
            onClose={() => setOpenTopic(false)}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle className="flex gap-2 justify-between items-center">
              {t("Course.new-topic")}
              <IconButton aria-label="delete" onClick={() => setOpenTopic(false)}>
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description" className="w-full flex flex-col gap-3">
                <InputField
                  title={t("Course.topic")}
                  value={topic}
                  setValue={setTopic}
                  errorMessage={errorTopic}
                  disabled={isLoading2}
                />
                <CustomSelect label={t("Course.category")} data={data} value={catSelect} setValue={setCatSelect} />
                <Button
                  variant="contained"
                  color="success"
                  className="text-white"
                  onClick={handleAddNewTopic}
                  disabled={isLoading2}
                >
                  {t("Global.add")}
                </Button>
              </DialogContentText>
            </DialogContent>
          </Dialog>
        </div>
        <TableTopic data={data2} isLoading={isLoading2} />
      </div>
    </div>
  );
};

export default Category;
