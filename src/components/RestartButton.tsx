import { useRef } from "react";
import { Button } from "./ui/button";
import { RotateCcw } from "lucide-react";

const RestartButton = ({ onRestart: handleRestart }: { onRestart: any }) => {
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleClick = () => {
        buttonRef.current?.blur();
        handleRestart();
    };
    return (
        <Button
            tabIndex={-1}
            ref={buttonRef}
            variant="ghost"
            className="block rounded px-8 py-2 hover:bg-slate-700/50"
            onClick={handleClick}
        >
            <RotateCcw />
        </Button>
    );
};

export default RestartButton;
