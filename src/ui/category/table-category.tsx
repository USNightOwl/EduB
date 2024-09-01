"use client";
import React from "react";
import CustomTable from "@/ui/common/custom-table";
import { type ICategory } from "@/types/category";

const TableCategory = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [data, setData] = React.useState<ICategory[]>([]);

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
    fetchData();
  }, []);

  return (
    <div>
      <CustomTable header={["Category"]} data={data} isLoading={isLoading} />
    </div>
  );
};

export default TableCategory;
