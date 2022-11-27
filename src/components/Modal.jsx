import React from "react";
import {
  Box,
  useTheme,
  Typography,
  Button,
  TextField,
  Modal,
} from "@mui/material";
import { tokens } from "../theme";

const ModalInput = ({ closeModal, titleInput, title }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  //   const [open, setOpen] = React.useState(true);
  const handleOpen = () => closeModal(true);
  const handleClose = () => closeModal(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    // bgcolor: {colors.primary[400]},
    border: "none",
    boxShadow: 24,
    p: 4,
  };

  const handleDateClick = (selected) => {

  }
  return (
    <div>
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} bgcolor={colors.primary[400]} borderRadius="20px">
          <Typography variant="h3">Please enter your Event title:</Typography>
          <Box my="10px">
            <TextField
              fullWidth
			  value={title}
			  onChange={(e) => titleInput(e.target.value)}
              variant="filled"
              type="text"
              label="Title"
              mt="5px"
            ></TextField>
          </Box>

          <Button
            onClick={() => closeModal(false)}
            color="secondary"
            variant="contained"
          >
            Submit
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalInput;

//<Box width="100%" height="100%" top="20%" left="40%" position="fixed" justifyContent="center" alignItems="center">
//   <Box width="500px" height="400px" borderRadius="13px" position="fixed" bgcolor="blue">
//     <Box>
//       <Typography variant="h3">Please enter your Event title:</Typography>
//     </Box>
// 	<Box>
// 	<TextField
//             widt
//             variant="filled"
//             type="text"
//             label="Title"

//           ></TextField>
// 	</Box>
//     <Box>
//       <Button onClick={() => closeModal(false)} color="secondary" variant="contained">
//         Submit
//       </Button>
//     </Box>
//   </Box>
// </Box>
