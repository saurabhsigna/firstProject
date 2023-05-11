import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function App({ board, setBoard }) {
  const handleChange = (e) => {
    setBoard(e.target.value);
  };
  return (
    <FormControl fullWidth size="small">
      <InputLabel id="demo-select-small-label">Board</InputLabel>
      <Select
        sx={{
          minWidth: "160px",
          "@media (min-width: 960px)": {
            // md breakpoint
            minWidth: "250px",
          },
          "@media (min-width: 1280px)": {
            // lg breakpoint
            minWidth: "250px",
          },
        }}
        required
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={board}
        label="Board"
        fullWidth
        size="small"
        onChange={handleChange}
      >
        <MenuItem value={"UP Board"}>UP Board</MenuItem>
        <MenuItem value={"CBSE Board"}>CBSE Board</MenuItem>
      </Select>
    </FormControl>
  );
}
