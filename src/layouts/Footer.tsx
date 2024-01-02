import { Button } from "@/components/ui/button";
import { Github, Instagram, Send } from "lucide-react";
import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="flex justify-between items-center p-5">
            {/* logo */}
            <h1 className="text-xl font-bold">zerotype</h1>
            {/* social */}
            <div className="max-md:flex-col flex items-start">
                <Button variant="link" className="space-x-1">
                    <Send />
                    <p>Telegram</p>
                </Button>
                <Button variant="link" className="space-x-1">
                    <Instagram />
                    <p>Instagram</p>
                </Button>
                <Button variant="link" className="space-x-1">
                    <Github />
                    <p>GitHub</p>
                </Button>
            </div>
        </footer>
    );
};

export default Footer;
