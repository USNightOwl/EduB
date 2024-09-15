import React, { Suspense } from "react";
import ClientListCategory from "./client-list-category";

const ListCategory = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <ClientListCategory />
      </Suspense>
    </>
  );
};

export default ListCategory;
