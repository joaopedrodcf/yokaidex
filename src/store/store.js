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

const contexts = [
    <GameVersionProvider />,
    <YokaisProvider />,
    <BaffleBoardProvider />,
    <ItemsProvider />,
    <FilterMainProvider />,
    <SidebarProvider />,
    <FilterItemsProvider />,
    <CrankakaisProvider />,
    <ThemeProvider />
];

function ContextProvider({ children }) {
    return <ProviderComposer contexts={contexts}>{children}</ProviderComposer>;
}

export default ContextProvider;
