import SettingsMenu from "@/components/SettingsMenu";
import ModeToggle from "@/components/theme/ModeToggle";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import React from "react";

const NavBar: React.FC = () => {
    return (
        <header className="p-5 h-[120px] max-md:h-[80px] flex justify-around items-center max-md:justify-between w-full fixed top-0">
            {/* pc nav */}
            <div className="max-md:hidden">
                <SettingsMenu />
            </div>
            <h1 className="text-2xl font-bold max-md:text-2xl">zerotype</h1>
            <div className="flex space-x-2 max-md:hidden">
                <Button size="icon">ENG</Button>
                <ModeToggle />
                <Button size="icon">
                    <User />
                </Button>
            </div>
            {/* mobile nav */}
            <div className="md:hidden flex space-x-2 mr-8">
                <SettingsMenu />
                <Button size="icon">
                    <User />
                </Button>
            </div>
        </header>
    );
};

export default NavBar;
