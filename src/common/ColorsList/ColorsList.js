import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
  Stack,
  CircularProgress,
} from "@mui/material";
import Modal from "../Modal/Modal";
import Error from "../Error/Error";

function ColorsList({ colors, total, page, loading, id, errorMessage }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState();

  const handleChangePage = (event, page) => {
    navigate(`/page/${++page}`);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleOpenModal = () => {
    console.log("afasdfsad");
    setOpen(true);
  };

  let render = "";
  switch (loading) {
    case "loading":
      render = (
        <Stack
          sx={{ display: "flex", justifyContent: "center", padding: "50px" }}
          direction="row"
        >
          <CircularProgress />
        </Stack>
      );
      break;
    case "success":
      render = (
        <>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Year</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {colors &&
                  colors.map((e) => (
                    <TableRow
                      key={e.id}
                      sx={{
                        bgcolor: e.color,
                        width: "100%",
                        height: "100%",
                        "&:hover": {
                          opacity: 0.8,
                          cursor: "pointer",
                        },
                      }}
                      onClick={() => {
                        setSelectedValue(
                          colors.find((color) => color.id === e.id)
                        );
                        handleOpenModal();
                      }}
                    >
                      <TableCell>{e.id}</TableCell>
                      <TableCell>{e.name}</TableCell>
                      <TableCell>{e.year}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          {id === undefined && colors && page < total / page ? (
            <TablePagination
              component="div"
              count={total}
              page={page - 1}
              onPageChange={handleChangePage}
              rowsPerPageOptions={[-1]}
              rowsPerPage={5}
            />
          ) : (
            ""
          )}
          <Modal
            {...selectedValue}
            handleCloseModal={handleCloseModal}
            open={open}
          />
        </>
      );
      break;
    default:
      render = <Error errorMessage={errorMessage}></Error>;
      break;
  }
  return render;
}

export default ColorsList;
