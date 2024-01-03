import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system" | "red-dark";
type Style =
    | "slate"
    | "red"
    | "rose"
    | "orange"
    | "green"
    | "blue"
    | "yellow"
    | "violet";

type ThemeProviderProps = {
    children: React.ReactNode;
    defaultTheme?: Theme;
    defaultStyle?: Style;
    storageKey?: string;
};

type ThemeProviderState = {
    theme: Theme;
    style: Style;
    setTheme: (theme: Theme) => void;
    setStyle: (style: Style) => void;
};

const initialState: ThemeProviderState = {
    theme: "system",
    style: "slate",
    setTheme: () => null,
    setStyle: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
    children,
    defaultTheme = "system",
    defaultStyle = "slate",
    storageKey = "vite-ui-theme",
    ...props
}: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>(
        () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
    );
    const [style, setStyle] = useState<Style>(
        () => (localStorage.getItem("vite-ui-style") as Style) || defaultStyle
    );

    useEffect(() => {
        const root = window.document.documentElement;

        root.classList.remove(
            "slate",
            "red",
            "rose",
            "orange",
            "green",
            "blue",
            "yellow",
            "violet"
        );
        root.classList.add(style);

        root.classList.remove("light", "dark");
        root.classList.add(theme);
    }, [theme, style]);

    const value = {
        theme,
        style,
        setTheme: (newTheme: Theme) => {
            localStorage.setItem(storageKey, newTheme);
            setTheme(newTheme);
        },
        setStyle: (newStyle: Style) => {
            localStorage.setItem("vite-ui-style", newStyle);
            setStyle(newStyle);
        },
    };

    return (
        <ThemeProviderContext.Provider {...props} value={value}>
            <div className="px-4">{children}</div>
        </ThemeProviderContext.Provider>
    );
}

export const useTheme = () => {
    const context = useContext(ThemeProviderContext);

    if (context === undefined)
        throw new Error("useTheme must be used within a ThemeProvider");

    return context;
};
