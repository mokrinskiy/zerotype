import { useState } from "react";
import useWords from "./useWords";
import useCounDownTimer from "./useCountDownTimer";
import useTypings from "./useTypings";

export type State = "start" | "run" | "finish";

const NUMBER_OF_WORDS = 70;
const COUNTDOWN_SECONDS = 30;

export default function useEngine() {
    const [state, setState] = useState<State>("start");
    const { words, updateWords } = useWords(NUMBER_OF_WORDS);
    const { timeLeft, startCoundDown, resetCoundown } =
        useCounDownTimer(COUNTDOWN_SECONDS);
    const { clearTyped, cursor, typed, totalTyped, resetTotalTyped } =
        useTypings(state !== "finish");
    return {
        state,
        words,
        timeLeft,
        typed,
    };
}
