import React from "react";
import { Stack, Button, IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const MuiButton = () => {
  return (
    <Stack spacing={2}>
      {/* button and Stack */}
      <Stack spacing={2} direction="row">
        <Button variant="text" href="">
          Text
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Contained</Button>
      </Stack>

      {/* button varient */}
      <Stack direction={"row"} spacing={2}>
        <Button variant="contained" color="primary">
          primary
        </Button>
        <Button variant="text" color="secondary">
          secondary
        </Button>
        <Button variant="outlined" color="error">
          error
        </Button>
        <Button variant="contained" color="info">
          info
        </Button>
        <Button variant="contained" color="success">
          success
        </Button>
      </Stack>

      {/*size  */}
      <Stack display={"block"} direction={"row"} spacing={2}>
        <Button variant="contained" color="primary" size="small">
          small
        </Button>
        <Button variant="contained" color="secondary" size="medium">
          medium
        </Button>
        <Button variant="contained" color="secondary" size="large">
          large
        </Button>
      </Stack>

      {/* this is for icons  */}
      <Stack spacing={2} direction={"row"}>
        {/* this is for icon at starting */}
        <Button
          variant="contained"
          color="secondary"
          size="large"
          startIcon={<AddCircleIcon />}
        >
          large1
        </Button>

        {/* this is for icon at ending */}
        <Button
          variant="contained"
          color="secondary"
          size="large"
          endIcon={<AddCircleIcon />}
        >
          large2
        </Button>

        {/* this is for only icon need */}
        <IconButton aria-label="addcircle" color="success" size="small">
          <AddCircleIcon />
        </IconButton>

        {/* disable showdows*/}
        <Button
          variant="contained"
          color="secondary"
          size="large"
          endIcon={<AddCircleIcon />}
          disableElevation
        >
          large2
        </Button>

        {/* disable effect */}
        <Button
          variant="contained"
          color="secondary"
          size="large"
          endIcon={<AddCircleIcon />}
          disableRipple
          onClick={() => {
            alert("welcomw to mui");
          }}
        >
          large3
        </Button>
      </Stack>
    </Stack>
  );
};

export default MuiButton;
