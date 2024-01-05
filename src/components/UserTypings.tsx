import cn from "classnames";
import Caret from "./Caret";

const UserTypings = ({
    userInput,
    words,
    className = "",
}: {
    userInput: string;
    words: string;
    className?: string;
}) => {
    const typedCharacters = userInput.split("");

    return (
        <div className={className}>
            {typedCharacters.map((char, index) => (
                <Character
                    key={`${char}_${index}`}
                    actual={char}
                    expected={words[index]}
                />
            ))}
            <Caret />
        </div>
    );
};

const Character = ({
    actual,
    expected,
}: {
    actual: string;
    expected: string;
}) => {
    const isCorrect = actual === expected;
    const isWhiteSpace = expected === " ";

    return (
        <span
            className={cn({
                "text-red-500 font-extrabold text-xl": !isCorrect && !isWhiteSpace,
                "text-primary-900 font-extrabold": isCorrect && !isWhiteSpace,
                "bg-red-500/50": !isCorrect && isWhiteSpace,
            })}
        >
            {expected}
        </span>
    );
};

export default UserTypings;
