import React from 'react';
import Global from '../../styles';

const BigLabel = ({
    backgroundColor,
    color,
    text1,
    text1Uppercase,
    text2,
    children
}) => {
    return (
        <Global.BigLabel backgroundColor={backgroundColor} color={color}>
            <Global.BigLabelContent uppercase={text1Uppercase}>
                {text1}
                {children}
            </Global.BigLabelContent>
            <Global.BigLabelContent>{text2}</Global.BigLabelContent>
        </Global.BigLabel>
    );
};

export default BigLabel;
