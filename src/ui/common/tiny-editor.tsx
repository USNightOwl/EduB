"use client";
import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Button } from "@mui/material";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";

interface Props {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: () => void;
  title: string;
  disabled?: boolean;
}

const TinyEditor = ({ value, setValue, handleSubmit, title, disabled = false }: Props) => {
  return (
    <React.Fragment>
      <Editor
        value={value}
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        onEditorChange={(newValue) => setValue(newValue)}
        apiKey={process.env.NEXT_PUBLIC_TINY_EDITOR_API}
        disabled={disabled}
        init={{
          plugins:
            "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown",
          toolbar:
            "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
          tinycomments_mode: "embedded",
          tinycomments_author: "nxhawk",
          mergetags_list: [
            { value: "First.Name", title: "First Name" },
            { value: "Email", title: "Email" },
          ],
        }}
      />
      <div className="my-2 flex justify-end">
        <Button
          variant="contained"
          color="secondary"
          onClick={handleSubmit}
          disabled={disabled}
          className="flex text-nowrap items-center gap-1"
        >
          <ModeEditOutlineIcon className="text-lg" />
          {title}
        </Button>
      </div>
    </React.Fragment>
  );
};

export default TinyEditor;
