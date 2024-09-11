"use client";
import Image from "next/image";
import React, { type ChangeEvent, type SetStateAction } from "react";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { Button } from "@mui/material";

interface Props {
  handleOnChange: (changeEvent: ChangeEvent<HTMLInputElement>, multiple?: boolean) => void;
  attachments: string[];
  setAttachments: (value: SetStateAction<string[]>) => void;
  multiple?: boolean;
}

export default function InputImage({ handleOnChange, attachments, setAttachments, multiple = true }: Props) {
  return (
    <React.Fragment>
      <Button variant="contained" className="w-fit">
        <label className="cursor-pointer">
          BROWSE
          <input
            id="image"
            onChange={(e) => handleOnChange(e, multiple)}
            className="hidden"
            type="file"
            name="files[]"
            multiple={multiple}
            accept="image/*"
          />
        </label>
      </Button>

      <div className="flex gap-2 flex-wrap">
        {attachments.map((attachment, index) => (
          <span key={index}>
            <div className="relative w-fit">
              <Image alt="attachment" src={attachment} width={800} height={400} className="h-[300px] w-fit" />
              <IconButton
                onClick={() => setAttachments(attachments.filter((_, i) => i !== index))}
                aria-label="delete"
                className="absolute z-10 right-0 top-0 cursor-pointer text-4xl text-red-500 hover:text-red-600"
              >
                <CloseIcon />
              </IconButton>
            </div>
          </span>
        ))}
      </div>
    </React.Fragment>
  );
}
