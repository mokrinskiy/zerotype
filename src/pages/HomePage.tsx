import React from "react";
import RestartButton from "@/components/RestartButton";
import Results from "@/components/Results";
import UserTypings from "@/components/UserTypings";
import useEngine from "@/hooks/useEngine";

const HomePage: React.FC = () => {
    const { words, state, timeLeft, typed } = useEngine();
    return (
        <div className="flex justify-center items-center flex-col h-screen space-y-8">
            <CountDownTimer timeLeft={timeLeft} />
            <Results />
            <WordsContainer>
                <GeneratedText data={words} />
                <UserTypings
                    className="absolute inset-0"
                    userInput={typed}
                />
            </WordsContainer>
            <RestartButton />
        </div>
    );
};

const WordsContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="relative text-xl breaks-all flex flex-col items-center max-w-4xl leading-relaxed max-md:text-sm max-md:max-w-md ">
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
