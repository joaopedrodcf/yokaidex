import React from 'react';
import ReactSidebar from 'react-sidebar';
import SCSidebar from './Sidebar';
import { withSidebarContext } from '../../store';

const styles = {
    sidebar: { background: 'white', position: 'fixed' },
    root: {
        overflow: 'initial'
    },
    content: {
        overflowY: 'initial'
    }
};

const sidebar = <SCSidebar />;

const Sidebar = ({ context, children }) => {
    const { isSidebarOpen, handleSidebar } = context;

    return (
        <ReactSidebar
            sidebar={sidebar}
            open={isSidebarOpen}
            onSetOpen={handleSidebar}
            styles={styles}
        >
            {children}
        </ReactSidebar>
    );
};

export default withSidebarContext(Sidebar);
