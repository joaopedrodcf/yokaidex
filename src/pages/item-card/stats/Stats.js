import React from 'react';
import Global from '../../../styles';
import BigLabel from '../../../components/big-label';

const hasStatsInfo = statsInfo =>
    Object.keys(statsInfo).some(key => statsInfo[key] !== '0');

const Stats = ({ statsInfo }) => {
    if (!hasStatsInfo(statsInfo)) {
        return null;
    }

    return (
        <Global.Section isRow justifyContent="space-evenly">
            {Object.keys(statsInfo).map(
                (key, index) =>
                    statsInfo[key].includes('+') && (
                        <BigLabel
                            key={index}
                            backgroundColor="#a5d6a7"
                            text1={key}
                            text1Uppercase
                            text2={statsInfo[key]}
                        />
                    )
            )}

            {Object.keys(statsInfo).map(
                (key, index) =>
                    statsInfo[key].includes('-') && (
                        <BigLabel
                            key={index}
                            backgroundColor="#ef9a9a"
                            text1={key}
                            text1Uppercase
                            text2={statsInfo[key]}
                        />
                    )
            )}
        </Global.Section>
    );
};

export default React.memo(Stats);
