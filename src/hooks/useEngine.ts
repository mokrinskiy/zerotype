import { useCallback, useEffect, useState } from "react";
import useWords from "./useWords";
import useCounDownTimer from "./useCountDownTimer";
import useTypings from "./useTypings";
import { countErrors } from "@/utils/countErrors";

export type State = "start" | "run" | "finish";

const NUMBER_OF_WORDS = 50;
const COUNTDOWN_SECONDS = 3;

export default function useEngine() {
    const [state, setState] = useState<State>("start");
    const { words, updateWords } = useWords(NUMBER_OF_WORDS);
    const { timeLeft, startCountdown, resetCountdown } =
        useCounDownTimer(COUNTDOWN_SECONDS);

    const { clearTyped, cursor, typed, totalTyped, resetTotalTyped } =
        useTypings(state !== "finish");

    const [errors, setErrors] = useState(0);
    const isStarting = state == "start" && cursor > 0;
    const areWordsFinished = cursor === words.length;

    const sumErros = useCallback(() => {
        const wordsReached = words.substring(0, cursor);
        setErrors((prev) => prev + countErrors(typed, wordsReached));
    }, [typed, words, cursor]);

    useEffect(() => {
        if (isStarting) {
            setState("run");
            startCountdown();
        }
    }, [isStarting, startCountdown, cursor]);

    useEffect(() => {
        if (!timeLeft) {
            setState("finish");
            sumErros();
        }
    }, [timeLeft, sumErros]);

    useEffect(() => {
        if (areWordsFinished) {
            sumErros();
            updateWords();
            clearTyped();
        }
    }, [
        cursor,
        words,
        clearTyped,
        typed,
        areWordsFinished,
        updateWords,
        sumErros,
    ]);

    const restart = useCallback(() => {
        resetCountdown();
        resetTotalTyped();
        setState("start");
        setErrors(0);
        updateWords();
        clearTyped();
    }, [clearTyped, updateWords, resetCountdown, resetTotalTyped]);

    return {
        state,
        words,
        timeLeft,
        typed,
        errors,
        totalTyped,
        restart,
    };
}
