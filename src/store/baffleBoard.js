import React, { useState } from 'react';
import baffleBoardYW2 from '../mocks/yokai-watch-2/baffle-boards';
import baffleBoardYW3 from '../mocks/yokai-watch-3/baffle-boards';
import utils from '../components/utils';

export const BaffleBoardContext = React.createContext();

const getBaffleBoard = gameVersion => {
    switch (gameVersion) {
        case '2':
            return baffleBoardYW2;
        case '3':
            return baffleBoardYW3;
        default:
            return undefined;
    }
};

const BaffleBoardProvider = ({ children }) => {
    const [baffleBoard, setBaffleBoard] = useState(
        getBaffleBoard(utils.getGameVersion())
    );

    const changeBaffleBoard = gameVersion => {
        setBaffleBoard(getBaffleBoard(gameVersion));
    };

    return (
        <BaffleBoardContext.Provider value={{ baffleBoard, changeBaffleBoard }}>
            {children}
        </BaffleBoardContext.Provider>
    );
};

export default BaffleBoardProvider;
