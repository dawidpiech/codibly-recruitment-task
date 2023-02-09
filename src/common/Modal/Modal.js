import { Dialog, List, ListItem, ListItemText } from "@mui/material";

const Modal = ({
  id,
  name,
  year,
  color,
  pantone_value,
  handleCloseModal,
  open,
}) => {
  return (
    <Dialog onClose={handleCloseModal} open={open}>
      <List>
        <ListItem>
          <ListItemText>ID: {id}</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>Name: {name}</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>Year: {year}</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>Color: {color}</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>Pantone value: {pantone_value}</ListItemText>
        </ListItem>
      </List>
    </Dialog>
  );
};

export default Modal;
