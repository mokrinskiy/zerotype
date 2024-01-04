import Caret from "./Caret";

const UserTypings = ({
    userInput,
    className,
}: {
    userInput: string;
    className?: string;
}) => {
    const typedCharacters = userInput.split("");

    return (
        <div className={className}>
            {typedCharacters.map((char, index) => (
                <span className="text-red-500" key={`${char}_${index}`}>
                    {char}
                </span>
            ))}
            <Caret />
        </div>
    );
};

export default UserTypings;
