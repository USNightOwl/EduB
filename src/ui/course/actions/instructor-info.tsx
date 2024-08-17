import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import { useTranslations } from "next-intl";

const InstructorInfo = () => {
  const t = useTranslations("Course");

  return (
    <Accordion defaultExpanded className="mt-5" sx={{ color: "box.text", bgcolor: "box.bg" }}>
      <AccordionSummary expandIcon={<ArrowDropDownIcon />} aria-controls="panel2-content" id="panel2-header">
        <Typography variant="h6" className="flex items-center gap-3">
          <PermContactCalendarIcon />
          {t("instructor-information")}
        </Typography>
      </AccordionSummary>
      <AccordionDetails className="max-h-[15rem] overflow-y-auto">
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
          lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
          amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
          lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
          lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default InstructorInfo;