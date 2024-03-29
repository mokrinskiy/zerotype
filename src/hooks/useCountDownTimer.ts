import { useCallback, useEffect, useRef, useState } from "react";

const useCountdown = (seconds: number) => {
    const [timeLeft, setTimeLeft] = useState(seconds);
    const intervalRef = useRef<NodeJS.Timer | null | number | any>(null);
    const hasTimerEnded = timeLeft <= 0;
    const isRunning = intervalRef.current != null;

    const startCountdown: any = useCallback(() => {
        if (!hasTimerEnded && !isRunning) {
            intervalRef.current = setInterval(() => {
                setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
            }, 1000);
        }
    }, [setTimeLeft, hasTimerEnded, isRunning]);

    const resetCountdown: any = useCallback(() => {
        clearInterval(intervalRef.current!);
        intervalRef.current = null;
        setTimeLeft(seconds);
    }, [seconds]);

    useEffect(() => {
        if (hasTimerEnded) {
            clearInterval(intervalRef.current!);
            intervalRef.current = null;
        }
    }, [hasTimerEnded]);

    useEffect(() => {
        return () => clearInterval(intervalRef.current!);
    }, []);

    return { timeLeft, startCountdown, resetCountdown };
};

export default useCountdown;
