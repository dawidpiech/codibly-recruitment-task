import React, { useEffect } from "react";
import { TextField, Container } from "@mui/material";
import ColorsList from "../../common/ColorsList/ColorsList";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  fetchColors,
  selectColorsResults,
  selectColorsLoading,
  fetchFilteredColor,
  selectErrorMessage,
} from "../../features/colors/colorsSlice";

function ColorsPage() {
  const navigate = useNavigate();
  let { id, page } = useParams();
  const dispatch = useDispatch();
  const colors = useSelector(selectColorsResults);
  const loading = useSelector(selectColorsLoading);
  const errorMessage = useSelector(selectErrorMessage);

  const changeInputValue = (value) => {
    if (value !== "") {
      navigate(`/id/${value}`);
    } else {
      navigate(`/`);
    }
  };

  if (id === undefined && page === undefined) page = 1;

  useEffect(() => {
    id === undefined
      ? dispatch(fetchColors(page))
      : dispatch(fetchFilteredColor(id));
  }, [page, id, dispatch]);

  return (
    <Container maxWidth="lg">
      <Container maxWidth="sm">
        <TextField
          id="outlined-basic"
          label="Type color ID"
          variant="outlined"
          type="number"
          fullWidth
          margin="dense"
          onChange={(e) => {
            changeInputValue(e.target.value);
          }}
        />
        <ColorsList
          colors={colors.data}
          total={colors.total}
          page={colors.page}
          loading={loading}
          id={id}
          errorMessage={errorMessage}
        ></ColorsList>
      </Container>
    </Container>
  );
}

export default ColorsPage;
