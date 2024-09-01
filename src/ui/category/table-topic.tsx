import React from "react";
import CustomTable from "../common/custom-table";
import { type ITopicResponse } from "@/types/category";

const TableTopic = ({ data, isLoading = false }: { data: ITopicResponse[]; isLoading: boolean }) => {
  const handleDelete = async (id: string) => {};

  return (
    <div>
      <CustomTable header={["Topic", "Category"]} data={data} isLoading={isLoading} onDelete={handleDelete} />
    </div>
  );
};

export default TableTopic;
