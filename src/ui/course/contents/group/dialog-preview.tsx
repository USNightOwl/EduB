/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { Suspense, useRef } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { type TransitionProps } from "@mui/material/transitions";
import LaunchIcon from "@mui/icons-material/Launch";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import VideoComponent from "./video-component";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const DialogPreview = () => {
  const vidRef = useRef<HTMLIFrameElement>(null);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    if (vidRef?.current) {
      vidRef.current.contentWindow?.postMessage(JSON.stringify({ event: "command", func: "pauseVideo" }), "*");
    }
    setOpen(false);
  };

  return (
    <React.Fragment>
      <div
        className="flex items-center justify-end cursor-pointer hover:underline font-semibold"
        onClick={handleClickOpen}
      >
        Preview
        <LaunchIcon className="text-base" />
      </div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle className="flex gap-2 justify-between items-center">
          Preview
          <IconButton aria-label="delete" onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description" className="w-full">
            <Suspense fallback={<p>Loading video...</p>}>
              <VideoComponent vidRef={vidRef} src="zbxCAZuj16g" />
            </Suspense>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default DialogPreview;
