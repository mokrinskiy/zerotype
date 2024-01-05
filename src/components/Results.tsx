import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

const Results = ({
    state,
    errors,
    accuracyPercentage,
    total,
}: {
    state: string;
    errors: any;
    accuracyPercentage: any;
    total: any;
}) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    useEffect(() => {
        if (state === "finish") {
            setIsDrawerOpen(true);
        }
    }, [state]);

    return (
        <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
            <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader>
                        <DrawerTitle>Are you sure absolutely sure?</DrawerTitle>
                        <DrawerDescription>
                            This action cannot be undone.
                        </DrawerDescription>
                    </DrawerHeader>
                    <div className="h-[300px]">
                        <div>Errors: {errors}</div>
                        <div>AC: {accuracyPercentage}</div>
                    </div>
                    <DrawerFooter>
                        <Button>Submit</Button>
                        <DrawerClose asChild>
                            <Button
                                onClick={() => setIsDrawerOpen(false)}
                                variant="outline"
                            >
                                Cancel
                            </Button>
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    );
};

export default Results;
