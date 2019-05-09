import React from 'react';
import Global from '../../styles';

const Card = ({ title, color, children }) => {
    return (
        <Global.Section>
            <Global.Card>
                <Global.CardTitle color={color}>{title}</Global.CardTitle>
                <Global.CardText bold>{children}</Global.CardText>
            </Global.Card>
        </Global.Section>
    );
};

export default Card;
