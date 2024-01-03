import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Settings, User } from "lucide-react";
import React from "react";

const NavBar: React.FC = () => {
    return (
        <header className="p-5 h-[120px] max-md:h-[80px] flex justify-around items-center max-md:justify-between">
            {/* pc nav */}
            <div className="max-md:hidden">
                <Button>
                    <Settings className="md:mr-2" />
                    <p>Settings</p>
                </Button>
            </div>
            <h1 className="text-4xl font-bold max-md:text-2xl">zerotype</h1>
            <div className="flex space-x-2 max-md:hidden">
                <Button size="icon">ENG</Button>
                <ThemeToggle />
                <Button size="icon">
                    <User />
                </Button>
            </div>
            {/* mobile nav */}
            <div className="md:hidden space-x-2">
                <Button size="icon">
                    <Settings />
                </Button>
                <Button size="icon">
                    <User />
                </Button>
            </div>
        </header>
    );
};

export default NavBar;
