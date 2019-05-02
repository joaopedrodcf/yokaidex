import React from 'react';
import GameVersionProvider from './gameVersion';
import YokaisProvider from './yokais';
import BaffleBoardProvider from './baffleBoard';
import ItemsProvider from './items';
import FilterMainProvider from './filterMain';
import SidebarProvider from './sidebar';
import FilterItemsProvider from './filterItems';

function ProviderComposer({ contexts, children }) {
    return contexts.reduceRight(
        (kids, parent) =>
            React.cloneElement(parent, {
                children: kids
            }),
        children
    );
}

function ContextProvider({ children }) {
    return (
        <ProviderComposer
            contexts={[
                <GameVersionProvider />,
                <YokaisProvider />,
                <BaffleBoardProvider />,
                <ItemsProvider />,
                <FilterMainProvider />,
                <SidebarProvider />,
                <FilterItemsProvider />
            ]}
        >
            {children}
        </ProviderComposer>
    );
}

export default ContextProvider;
