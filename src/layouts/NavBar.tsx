import { Button } from "@/components/ui/button";
import { Moon, Settings, User } from "lucide-react";
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
            <h1 className="text-4xl font-bold">zerotype</h1>
            <div className="flex space-x-2 max-md:hidden">
                <Button size="icon">ENG</Button>
                <Button size="icon">
                    <Moon />
                </Button>
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
