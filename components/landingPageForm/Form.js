import React from "react";
import YellowButton from "../Buttons/YellowButton";
import TextField from "@mui/material/TextField";
export default function App() {
  return (
    <div className="rounded-md border border-white backdrop-filter backdrop-blur-sm border-b  flex flex-col gap-[19px] items-center  bg-opacity-20">
      <TextField
        required
        defaultValue="Small"
        id="outlined-required"
        size="small"
        fullWidth
        label="name"
      />
    
     
        <TextField
        required
        defaultValue="Small"
        id="outlined-required"
        size="small"
        fullWidth
        label="class"
      />
          <TextField
        required
        defaultValue="Small"
        id="outlined-required"
        size="small"
        fullWidth
        label="subject"
      />
        <TextField
        required
        defaultValue="Small"
        id="outlined-required"
        size="small"
        fullWidth
        label="address"
      />
         <TextField
        required
        defaultValue="Small"
        id="outlined-required"
        size="small"
        type={"number"}
        fullWidth
        label="address"
      />
      <YellowButton text={"Submit"} />
    </div>
  );
}
