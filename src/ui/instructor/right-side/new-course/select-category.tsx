"use client";
import React from "react";
import { useTranslations } from "next-intl";
import CustomSelect from "@/ui/common/custom-select";
import { type ICategory, type ITopicResponse } from "@/types/category";

interface Props {
  topic: string;
  setTopic: React.Dispatch<React.SetStateAction<string>>;
  errorMessage?: string;
  disabled?: boolean;
}

const SelectCategory = ({ topic, setTopic, errorMessage, disabled = false }: Props) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [data, setData] = React.useState<ICategory[]>([]);

  React.useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const res = await fetch("/api/topic");
        const json = await res.json();
        if (res.status === 200) {
          setData(json.data as ITopicResponse[]);
        }
      } catch (error) {}
      setIsLoading(false);
    }

    fetchData();
  }, []);
  const t = useTranslations();
  return (
    <div className="flex gap-2 justify-between px-1 flex-wrap">
      <CustomSelect
        label={t("Course.topic")}
        value={topic}
        setValue={setTopic}
        data={data}
        errorMessage={errorMessage}
        disabled={disabled}
      />
    </div>
  );
};

export default SelectCategory;
