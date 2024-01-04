import { generateWords } from "@/utils/generateWords";
import { useCallback, useState } from "react";

const useWords = (count: number) => {
    const [words, setWords] = useState<string>(generateWords(count));

    const updateWords = useCallback(() => {
        setWords(generateWords(count));
    }, [count]);

    return { words, updateWords };
};

export default useWords;
