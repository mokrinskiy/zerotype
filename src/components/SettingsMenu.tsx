import React from "react";
import { Settings } from "lucide-react";
import { Button } from "./ui/button";

const SettingsMenu: React.FC = () => {
    return (
        <Button className="max-md:h-10 max-md:w-10 max-md:p-0">
            <Settings className="md:mr-2" />
            <p className="max-md:hidden">Settings</p>
        </Button>
    );
};

export default SettingsMenu;
