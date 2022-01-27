import { useState } from "react";
import { Box } from "@mui/material"
import AppBar from "./components/AppBar";
import Dialog from "./components/Dialog";
import { app } from './styles';

const App = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <AppBar handleClickOpen={handleClickOpen}/>
      <Box sx={{ padding: "80px 40px", textAlign: 'center'}}>
        <span style={app.context}>
          Please connect on BSC or Polygon to continue
        </span>
      </Box>
      <Dialog handleClose={handleClose} open={open}/>
    </Box>
  );
};
export default App;
