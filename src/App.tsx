import { Stack } from "@mui/material";

import "./App.css";
import MuiTyporaphy from "./components/MuiTyporaphy";
import MuiButton from "./components/MuiButton";
import { Typography } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Stack spacing={5}>
        <MuiTyporaphy />
        <Typography variant="body2">
          {" "}
          Button group ,Stack ,and IconButton
        </Typography>
        <MuiButton />
      </Stack>
    </div>
  );
}

export default App;
