import React from "react";
import { Palette } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/layouts/ThemeProvider";
import { theme_styles } from "@/utils/constants";

const StyleToggle: React.FC = () => {
    const { setStyle } = useTheme();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button size="icon">
                    <Palette />
                    <p className="sr-only">Toggle style</p>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {theme_styles.map((style: any) => (
                    <DropdownMenuItem
                        key={style}
                        onClick={() => setStyle(style)}
                    >
                        {style}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default StyleToggle;
