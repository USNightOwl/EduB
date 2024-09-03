"use client";
import React from "react";
import { useTranslations } from "next-intl";
import CustomSelect from "@/ui/common/custom-select";
import { type ICategory, type ITopicResponse } from "@/types/category";

interface Props {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  topic: string;
  setTopic: React.Dispatch<React.SetStateAction<string>>;
  errorMessage1?: string;
  errorMessage2?: string;
  disabled?: boolean;
}

const SelectCategory = ({
  category,
  topic,
  setCategory,
  setTopic,
  errorMessage1,
  errorMessage2,
  disabled = false,
}: Props) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [data, setData] = React.useState<ICategory[]>([]);
  const [data2, setData2] = React.useState<ITopicResponse[]>([]);

  React.useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const res = await fetch("/api/category");
        const json = await res.json();
        if (res.status === 200) {
          setData(json.data as ICategory[]);
        }
      } catch (error) {}
      setIsLoading(false);
    }

    async function fetchData2() {
      setIsLoading(true);
      try {
        const res2 = await fetch("/api/topic");
        const json2 = await res2.json();
        if (res2.status === 200) {
          setData2(json2.data as ITopicResponse[]);
        }
      } catch (error) {}
      setIsLoading(false);
    }

    fetchData();
    fetchData2();
  }, []);
  const t = useTranslations();
  return (
    <div className="flex gap-2 justify-between px-1 flex-wrap">
      <CustomSelect
        label={t("Course.category")}
        value={category}
        setValue={setCategory}
        data={data}
        errorMessage={errorMessage1}
        disabled={disabled}
      />
      <CustomSelect
        label={t("Course.topic")}
        value={topic}
        setValue={setTopic}
        data={data2}
        errorMessage={errorMessage2}
        disabled={disabled}
      />
    </div>
  );
};

export default SelectCategory;
