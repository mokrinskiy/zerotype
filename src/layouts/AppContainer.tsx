import React from "react";

interface AppContainerProps {
    children: JSX.Element[];
}

const AppContainer: React.FC<AppContainerProps> = ({ children }) => {
    return <div className="px-4">{children}</div>;
};

export default AppContainer;
