import React from 'react';
import GameVersionProvider from './gameVersion';
import YokaisProvider from './yokais';
import BaffleBoardProvider from './baffleBoard';
import ItemsProvider from './items';
import FilterMainProvider from './filterMain';
import SidebarProvider from './sidebar';
import FilterItemsProvider from './filterItems';
import CrankakaisProvider from './crankakai';
import ThemeProvider from './theme';

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
                <FilterItemsProvider />,
                <CrankakaisProvider />,
                <ThemeProvider />
            ]}
        >
            {children}
        </ProviderComposer>
    );
}

export default ContextProvider;
