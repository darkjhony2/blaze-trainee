import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const greenTheme = createTheme({
    palette:{
        primary: {
            main: '#95bb72'
        },
        secondary: {
            main: '#4b6043'
        },
        error: {
            main: red.A400
        }
    }
})