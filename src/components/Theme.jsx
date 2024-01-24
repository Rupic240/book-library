import { CssBaseline } from "@mui/material";
import { createContext, useState } from "react"
import AppRouter from '../AppRouter';

export const ThemeContext = createContext();

const Theme = () => {

    const [mode, setMode] = useState('dark');

    return (
        <ThemeContext.Provider value={{ mode, setMode }}>
            <CssBaseline />
            <AppRouter />
        </ThemeContext.Provider>
    )
}

export default Theme