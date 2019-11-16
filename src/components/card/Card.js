import React from 'react';
import Global from '../../styles';

const Card = ({ isRow, title, color, children }) => {
    return (
        <Global.Section>
            <Global.Card>
                <Global.CardTitle color={color}>{title}</Global.CardTitle>
                <Global.CardText bold isRow={isRow}>
                    {children}
                </Global.CardText>
            </Global.Card>
        </Global.Section>
    );
};

export default React.memo(Card);
