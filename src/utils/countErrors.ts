export const countErrors = (actual: string, expected: string) => {
    const expectedCharacters = expected.split("");

    return expectedCharacters.reduce((errors, expectedChar, i) => {
        const actualChar = actual[i];
        if (actualChar !== expectedChar) {
            errors++;
        }
        return errors;
    }, 0);
};
