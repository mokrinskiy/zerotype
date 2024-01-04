import React, { useRef } from "react";
import { Button } from "./ui/button";
import { RotateCcw } from "lucide-react";

const RestartButton: React.FC = () => {
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleClick = () => {
        buttonRef.current?.blur;
        // handlerestart()
    };
    return (
        <Button onClick={handleClick} ref={buttonRef} variant="ghost">
            <RotateCcw />
        </Button>
    );
};

export default RestartButton;
