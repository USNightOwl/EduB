"use client";
import React from "react";
import { FileInputButton, FileCard, type ExtFile } from "@files-ui/react";

interface Props {
  maxFiles?: number;
}

const UploadImage = ({ maxFiles = 1 }: Props) => {
  const [files, setFiles] = React.useState<ExtFile[]>([]);
  const updateFiles = (incommingFiles: ExtFile[]) => {
    //do something with the files
    setFiles(incommingFiles);
    //even your own upload implementation
  };
  const removeFile = (id: number | string | undefined) => {
    setFiles(files.filter((x) => x.id !== id));
  };

  return (
    <div className="flex flex-col-reverse gap-3 flex-wrap w-fit justify-evenly">
      <FileInputButton
        onChange={updateFiles}
        value={files}
        accept={"image/*"}
        maxFileSize={28 * 1024 * 1024}
        maxFiles={maxFiles}
        fakeUpload
      />
      {files.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {files.map((file: ExtFile) => (
            <FileCard key={file.id} {...file} onDelete={removeFile} info preview className="bg-white" />
          ))}
        </div>
      )}
    </div>
  );
};

export default UploadImage;
