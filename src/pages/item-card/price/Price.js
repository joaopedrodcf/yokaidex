import React from 'react';
import Global from '../../../styles';
import BigLabel from '../../../components/big-label';

const Price = ({ sell, buy }) => {
    return (
        <Global.Section isRow justifyContent="space-evenly">
            <BigLabel backgroundColor="#ce93d8" text1="Sell" text2={sell} />

            <BigLabel backgroundColor="#ce93d8" text1="Buy" text2={buy} />
        </Global.Section>
    );
};

export default React.memo(Price);
