import React from "react";
import RestartButton from "@/components/RestartButton";
import Results from "@/components/Results";
import UserTypings from "@/components/UserTypings";
import useEngine from "@/hooks/useEngine";
import { calculateAccuracyPercentage } from "@/utils/calculateAccuracyPercentage";

const HomePage: React.FC = () => {
    const { words, state, timeLeft, typed, errors, restart, totalTyped } =
        useEngine();
    return (
        <div className="flex justify-center items-center flex-col h-screen space-y-8">
            <CountDownTimer timeLeft={timeLeft} />
            <WordsContainer>
                <GeneratedText data={words} />
                <UserTypings
                    words={words}
                    className="absolute inset-0"
                    userInput={typed}
                />
            </WordsContainer>
            <RestartButton onRestart={restart} />
            <Results
                state={state}
                errors={errors}
                accuracyPercentage={calculateAccuracyPercentage(
                    errors,
                    totalTyped
                )}
                total={totalTyped}
            />
        </div>
    );
};

const WordsContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="relative text-xl break-all flex flex-col items-center max-w-4xl leading-relaxed max-md:text-sm max-md:max-w-md ">
            {children}
        </div>
    );
};

const GeneratedText = ({ data }: { data: any }) => {
    return <div>{data}</div>;
};

const CountDownTimer = ({ timeLeft }: { timeLeft: number }) => {
    return <h2 className="text-xl text-neutral">{timeLeft} seconds</h2>;
};

export default HomePage;
