import { createContext, useState } from "react";
import { createTheme } from "@mui/material";
import { grey, blue } from "@mui/material/colors";
import { useMemo } from "react";

export const tokens = (mode) => ({
   ...(mode === 'light'
   ? {
    primary : grey[300],
    main: '#FFFFFF',
    black: '#000000',
    secondary: '#FFFFFF',
    icons: '#000000'
   } : {
    primary : grey[900],
    main: blue[900],
    black: '#000000',
    secondary: '#002244',
    icons: '#FFFFFF'
   })
})

export const themeSettings = (mode) => {
    return {
        palette: {
            mode: mode,
            ...(mode === 'light'
                ? {
                    primary: {
                        main: '#F2F2F2',
                    },
                    secondary: {
                        main: '#FFFFFF'
                    },
                    // body background color
                    background: {
                        default: '#F2F2F2'
                    }
                } : { // dark mode
                    primary: {
                        main: blue[700],
                    },
                    secondary: {
                        main: grey[500]
                    },
                    background: {
                        default: '#002244'
                    }
                }
            )
        },
        typography: {
            fontFamily: ["Quicksand", "sans-serif"].join(","),
            fontSize: 16,
            h1: {
                fontFamily: ["Quicksand", "sans-serif"].join(","),
                fontSize: 40
            },
            h2: {
                fontFamily: ["Quicksand", "sans-serif"].join(","),
                fontSize: 32
            },
            h3: {
                fontFamily: ["Quicksand", "sans-serif"].join(","),
                fontSize: 24
            },
            h4: {
                fontFamily: ["Quicksand", "sans-serif"].join(","),
                fontSize: 20
            },
            h5: {
                fontFamily: ["Quicksand", "sans-serif"].join(","),
                fontSize: 16
            },
            h6: {
                fontFamily: ["Quicksand", "cursive"].join(","),
                fontSize: 14
            }
        }
    }
}

export const ColorModeContext = createContext({
    toggleColorMode: () => {}
});

export const useMode = () => {
    const [mode, setMode] = useState('light');

    const theme = useMemo(() => 
        createTheme(themeSettings(mode)), 
        [mode]
    );

    const colorMode = useMemo(() => ({
        toggleColorMode: () => setMode((prev) => (
            prev === 'dark' ? 'light' : 'dark'
        ))
    }), 
    []
    );

    return [theme, colorMode];
};