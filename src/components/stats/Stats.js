import React from 'react';
import { ProgressBar, Bar } from './style';
import Global from '../../styles';
import utils from '../utils';
import maxStats from '../../mocks/max-stats';

const Stats = ({ yokai, color }) => {
    return (
        <Global.Section>
            <Global.SectionHeader color={color}>Stats</Global.SectionHeader>
            {Object.entries(yokai.stats).map(([stat, value]) => (
                <ProgressBar key={stat}>
                    <div>{stat}</div>
                    <div>{value}</div>
                    <Bar>
                        <div
                            style={{
                                width: utils.calculatePercentage(
                                    value,
                                    maxStats.find(aux => aux.name === stat).max
                                ),
                                backgroundColor: maxStats.find(
                                    aux => aux.name === stat
                                ).color
                            }}
                        />
                    </Bar>
                </ProgressBar>
            ))}
        </Global.Section>
    );
};

export default Stats;
