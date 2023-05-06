/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import SelectOptions from "../forms/SelectOptions";
import TextField from "@mui/material/TextField";
import axios from 'axios'

export default function App() {
  
  return (
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12"></div>

        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <TextField
                required
                
                defaultValue="Small"
                id="outlined-required"
                size="small"
                fullWidth
                label="Your Name"
               
              />
            </div>
            <div className="sm:col-span-3">
              <TextField
                required
                defaultValue="Small"
                id="outlined-required"
                size="small"
                fullWidth
                label="Phone Number"
                placeholder="without +91"
              
              />
            </div>

            <div className="col-span-full">
              <TextField
                required
                defaultValue="Small"
                id="outlined-required"
                size="small"
                fullWidth
                label="Address"
                
              />
            </div>
            <div className="sm:col-span-2">
              <TextField
                required
                type="number"
                defaultValue="Small"
                id="outlined-required"
                size="small"
                fullWidth
                label="Age"
                
              />
            </div>

            <SelectOptions />
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
}
