import React from 'react';
import ReactSidebar from 'react-sidebar';
import SCSidebar from './Sidebar';
import { withSidebarContext } from '../../store';

const Sidebar = ({ context, children }) => {
    const { isSidebarOpen, handleSidebar } = context;

    const sidebar = <SCSidebar />;
    return (
        <ReactSidebar
            sidebar={sidebar}
            open={isSidebarOpen}
            onSetOpen={handleSidebar}
            styles={{
                sidebar: { background: 'white', position: 'fixed' },
                root: {
                    overflow: 'initial'
                },
                content: {
                    overflowY: 'initial'
                }
            }}
        >
            {children}
        </ReactSidebar>
    );
};

export default withSidebarContext(Sidebar);
