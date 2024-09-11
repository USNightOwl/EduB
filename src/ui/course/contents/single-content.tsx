import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GroupContent from "./group";
import { type FullChapter } from "@/models/chapter";

interface Props {
  chapter: FullChapter;
}

const SingleContent = ({ chapter }: Props) => {
  return (
    <Accordion defaultExpanded={true} sx={{ color: "box.text", bgcolor: "box.bg" }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
        <Typography variant="h5">{chapter.name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <GroupContent listLecture={chapter.lecture} />
      </AccordionDetails>
    </Accordion>
  );
};

export default SingleContent;
