import React from 'react';
import GameVersionProvider from './gameVersion';
import YokaisProvider from './yokais';
import BaffleBoardProvider from './baffleBoard';
import ItemsProvider from './items';
import SidebarProvider from './sidebar';
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
    <SidebarProvider />,
    <CrankakaisProvider />,
    <ThemeProvider />
];

function ContextProvider({ children }) {
    return <ProviderComposer contexts={contexts}>{children}</ProviderComposer>;
}

export default ContextProvider;
