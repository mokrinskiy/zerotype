import { Button } from "@/components/ui/button";
import { Github, Instagram, Send } from "lucide-react";
import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="flex justify-between items-center p-5 w-full fixed bottom-0">
            {/* logo */}
            <div className="text-xl font-bold flex items-center space-x-2">
                <img className="w-5" src="/logo.svg" />
                <h1 className="text-sm font-bold">zerotype @2024</h1>
            </div>
            {/* social */}
            <div className="flex items-start mr-9 max-md:space-x-2">
                <Button variant="link" className="space-x-1 max-md:p-1">
                    <Send className="max-md:w-5" />
                    <p className="max-md:hidden">Telegram</p>
                </Button>
                <Button variant="link" className="space-x-1 max-md:p-1">
                    <Instagram className="max-md:w-5" />
                    <p className="max-md:hidden">Instagram</p>
                </Button>
                <Button variant="link" className="space-x-1 max-md:p-1">
                    <Github className="max-md:w-5" />
                    <p className="max-md:hidden">GitHub</p>
                </Button>
            </div>
        </footer>
    );
};

export default Footer;
