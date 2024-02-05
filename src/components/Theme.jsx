import { createContext, useState } from "react"
import AppRouter from '../AppRouter';

export const ThemeContext = createContext();

const Theme = () => {

    const [mode, setMode] = useState('dark');

    return (
        <ThemeContext.Provider value={{ mode, setMode }}>
            <AppRouter />
        </ThemeContext.Provider>
    )
}

export default Theme