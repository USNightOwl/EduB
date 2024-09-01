"use client";
import React from "react";
import toast from "react-hot-toast";
import CustomTable from "@/ui/common/custom-table";
import { type ICategory } from "@/types/category";

const TableCategory = ({ data, isLoading = false }: { data: ICategory[]; isLoading: boolean }) => {
  const handleDelete = async (id: string) => {
    if (confirm("Confirm delete category") == true) {
      try {
        const res = await fetch(`/api/category/${id}`, {
          method: "DELETE",
        });
        if (res.status === 200) {
          toast.success("Delete category successfully");
          setTimeout(() => {
            window.location.reload();
          }, 300);
        } else {
          toast.error("Error deleting category");
        }
      } catch (error) {}
    }
  };

  return (
    <div>
      <CustomTable header={["Category"]} data={data} isLoading={isLoading} onDelete={handleDelete} />
    </div>
  );
};

export default TableCategory;
