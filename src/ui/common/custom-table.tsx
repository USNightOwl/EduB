"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CircularProgress from "@mui/material/CircularProgress";
import { type ICategory } from "@/types/category";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.box.bg,
    color: theme.palette.box.text,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

interface Props {
  isLoading?: boolean;
  header: string[];
  data: ICategory[];
}

const CustomTable = ({ header, data, isLoading = false }: Props) => {
  const t = useTranslations();

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              {header.map((h, idx) => (
                <StyledTableCell align="left" key={idx}>
                  <Typography variant="h6" className="font-bold">
                    {h}
                  </Typography>
                </StyledTableCell>
              ))}
              <StyledTableCell align="right">
                <Typography variant="h6" className="font-bold">
                  {t("Global.actions")}
                </Typography>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading && (
              <StyledTableRow>
                <StyledTableCell align="center" component="th" scope="row">
                  <div className="flex items-center justify-center w-full h-fit">
                    <CircularProgress color="inherit" />
                  </div>
                </StyledTableCell>
              </StyledTableRow>
            )}
            {data.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell align="left" component="th" scope="row">
                  <Typography className="text-base capitalize">{row.name}</Typography>
                </StyledTableCell>
                <StyledTableCell align="right" component="th" scope="row" className="flex gap-2">
                  <Button variant="contained" color="warning" className="text-white" startIcon={<EditIcon />}>
                    {t("Global.edit")}
                  </Button>
                  <Button variant="contained" color="error" startIcon={<DeleteIcon />}>
                    {t("Global.delete")}
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CustomTable;
