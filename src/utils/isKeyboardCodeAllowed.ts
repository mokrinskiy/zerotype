export const isKeyboardCodeAllowed = (code: string) => {
    const isRussianCode = /[а-яА-Я]+/.test(code);
    return (
        code.startsWith("Key") ||
        code.startsWith("Digit") ||
        code === "Backspace" ||
        code === "Space" ||
        isRussianCode
    );
};
