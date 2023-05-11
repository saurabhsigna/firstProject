import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { useCookies } from "react-cookie";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function BasicSelect() {
  const [currentClass, setClass] = React.useState("");
  const [cookie, setCookie] = useCookies(["currentClass"]);
  const handleChange = (event) => {
    setClass(event.target.value);
    console.log(event.target.value);
    setCookie("currentClass", JSON.stringify(event.target.value), {
      path: "/",
    });
  };

  return (
    // <Box>
    <FormControl fullWidth size="small">
      <InputLabel id="demo-select-small-label">Class</InputLabel>
      <Select
        required
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={currentClass}
        label="Class"
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
        fullWidth
        size="small"
        onChange={handleChange}
      >
        <MenuItem value={"Class 6"}>Class 6</MenuItem>
        <MenuItem value={"Class 7"}>Class 7</MenuItem>
        <MenuItem value={"Class 8"}>Class 8</MenuItem>
        <MenuItem value={"Class 9"}>Class 9</MenuItem>
        <MenuItem value={"Class 10"}>Class 10</MenuItem>
        <MenuItem value={"Class 11"}>Class 11</MenuItem>
        <MenuItem value={"Class 12"}>Class 12</MenuItem>
      </Select>
    </FormControl>
    // </Box>
  );
}
