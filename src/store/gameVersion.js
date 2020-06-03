import React, { useState } from 'react';
import utils from '../components/utils';

export const GameVersionContext = React.createContext();

const GameVersionProvider = ({ children }) => {
    const [gameVersion, setGameVersion] = useState(utils.getGameVersion());

    const changeGameVersion = (newGameVersion) => {
        setGameVersion(newGameVersion);
    };

    return (
        <GameVersionContext.Provider value={{ gameVersion, changeGameVersion }}>
            {children}
        </GameVersionContext.Provider>
    );
};

export default GameVersionProvider;
