import React from "react";
import { Settings } from "lucide-react";
import { Button } from "./ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import StyleToggle from "./theme/StyleToggle";
import { useTheme } from "@/layouts/ThemeProvider";
import ModeToggle from "./theme/ModeToggle";
import { Separator } from "./ui/separator";

const SettingsMenu: React.FC = () => {
    const { style, theme } = useTheme();
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="flex items-center">
                    <Button
                        size="icon"
                        className="max-md:h-10 max-md:w-10 max-md:p-0"
                    >
                        <Settings />
                    </Button>
                    <p className="max-md:hidden md:ml-2">Settings</p>
                </div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Here is your settings</DialogTitle>
                    <DialogDescription></DialogDescription>
                </DialogHeader>
                <div className="space-y-3">
                    <div className="flex justify-between items-center">
                        <div className="text-md">Color mode:</div>
                        <div className="flex space-x-5 items-center">
                            <p>{theme}</p>
                            <ModeToggle />
                        </div>
                    </div>
                    <Separator orientation="horizontal" />
                    <div className="flex justify-between items-center">
                        <div className="text-md">Style:</div>
                        <div className="flex space-x-5 items-center">
                            <div>{style}</div>
                            <StyleToggle />
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default SettingsMenu;
