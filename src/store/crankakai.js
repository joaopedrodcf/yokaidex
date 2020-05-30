import React, { useState } from 'react';
import crankakai1 from '../mocks/yokai-watch-1/crankakai';
import crankakai2 from '../mocks/yokai-watch-2/crankakai';
import crankakai3 from '../mocks/yokai-watch-3/crankakai';
import utils from '../components/utils';

export const CrankakaisContext = React.createContext();

const getCrankakais = (gameVersion) => {
    switch (gameVersion) {
        case '1':
            return crankakai1;
        case '2':
            return crankakai2;
        default:
            return crankakai3;
    }
};

const CrankakaisProvider = ({ children }) => {
    const [crankakais, setCrankakais] = useState(
        getCrankakais(utils.getGameVersion())
    );

    const changeCrankakais = (gameVersion) => {
        setCrankakais(getCrankakais(gameVersion));
    };

    const getCrankakai = (crankakaiIndexes) => {
        if (crankakaiIndexes === undefined) {
            return;
        }

        const crankakaisArray = [];

        crankakaiIndexes.forEach((item) => {
            crankakaisArray.push(crankakais[item]);
        });

        // eslint-disable-next-line
        return crankakaisArray;
    };

    return (
        <CrankakaisContext.Provider
            value={{ crankakais, changeCrankakais, getCrankakai }}
        >
            {children}
        </CrankakaisContext.Provider>
    );
};

export default CrankakaisProvider;
