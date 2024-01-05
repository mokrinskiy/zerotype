import { isKeyboardCodeAllowed } from "@/utils/isKeyboardCodeAllowed";
import { useCallback, useEffect, useRef, useState } from "react";

const useTypings = (enabled: boolean) => {
    const [cursor, setCursor] = useState(0);
    const [typed, setTyped] = useState<string>("");
    const totalTyped = useRef(0);

    const keypressHandler = useCallback(
        ({ key, code }: KeyboardEvent) => {
            if (!enabled || !isKeyboardCodeAllowed(code)) {
                return;
            }

            switch (key) {
                case "Backspace":
                    console.log("back");
                    setTyped((prev) => prev.slice(0, -1));
                    setCursor((cursor) => cursor - 1);
                    totalTyped.current -= 1;
                    break;
                default:
                    console.log("дуееук");
                    setTyped((prev) => prev.concat(key));
                    setCursor((cursor) => cursor + 1);
                    totalTyped.current += 1;
            }
        },
        [enabled]
    );

    const clearTyped = useCallback(() => {
        setTyped("");
        setCursor(0);
    }, []);

    const resetTotalTyped = useCallback(() => {
        totalTyped.current = 0;
    }, []);

    useEffect(() => {
        const keydownHandler = (event: KeyboardEvent) => {
            keypressHandler(event);
        };

        window.addEventListener("keydown", keydownHandler);

        return () => {
            window.removeEventListener("keydown", keydownHandler);
        };
    }, [keypressHandler]);

    return {
        typed,
        cursor,
        clearTyped,
        resetTotalTyped,
        totalTyped: totalTyped.current,
    };
};

export default useTypings;
