import React, { useState } from 'react';

export const SidebarContext = React.createContext();

const SidebarProvider = ({ children }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const handleSidebarOpen = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <SidebarContext.Provider value={{ isSidebarOpen, handleSidebarOpen }}>
            {children}
        </SidebarContext.Provider>
    );
};

export default SidebarProvider;
