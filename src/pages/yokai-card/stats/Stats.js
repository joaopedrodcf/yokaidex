import React from 'react';
import memoize from 'fast-memoize';
import { ProgressBar, Bar } from './style';
import Global from '../../../styles';
import utils from '../../../components/utils';
import maxStats from '../../../mocks/max-stats';

// eslint-disable-next-line func-names
const getStyle = function(stat, value) {
    return {
        width: utils.calculatePercentage(
            value,
            maxStats.find(aux => aux.name === stat).max
        ),
        backgroundColor: maxStats.find(aux => aux.name === stat).color
    };
};

const memoizedGetStyle = memoize(getStyle);

const Stats = ({ yokai, color }) => {
    return (
        <Global.Section>
            <Global.SectionHeader color={color}>Stats</Global.SectionHeader>
            {Object.entries(yokai.stats).map(([stat, value]) => (
                <ProgressBar key={stat}>
                    <div>{stat}</div>
                    <div>{value}</div>
                    <Bar>
                        <div style={memoizedGetStyle(stat, value)} />
                    </Bar>
                </ProgressBar>
            ))}
        </Global.Section>
    );
};

export default React.memo(Stats);
