import React from "react";
import { faker } from "@faker-js/faker/locale/ru";
import typingStore from "@/stores/typingStore";
import RestartButton from "@/components/RestartButton";
import Results from "@/components/Results";
import UserTypings from "@/components/UserTypings";

const data = faker.lorem.words(40);
const { timeLeft } = typingStore;

const HomePage: React.FC = () => {
    return (
        <>
            <div className="flex justify-center items-center flex-col h-screen space-y-8">
                <CountDownTimer />
                <Results />
                <WordsContainer>
                    <GeneratedText data={data} />
                    <UserTypings
                        className="absolute inset-0 px-4 flex"
                        userInput="123"
                    />
                </WordsContainer>
                <RestartButton />
            </div>
        </>
    );
};

const WordsContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="relative px-4 text-xl flex items-center max-w-3xl leading-relaxed max-md:text-sm max-md:max-w-md">
            {children}
        </div>
    );
};

const GeneratedText = ({ data }: { data: any }) => {
    return <div>{data}</div>;
};

const CountDownTimer = () => {
    return <h2 className="text-xl text-neutral">{timeLeft} seconds</h2>;
};

export default HomePage;
