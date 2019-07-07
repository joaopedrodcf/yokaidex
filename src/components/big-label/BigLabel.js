import React from 'react';
import Global from '../../styles';

const BigLabel = ({
    backgroundColor,
    color,
    text1,
    text1Uppercase,
    text2,
    width,
    justifyContent,
    withoutWith,
    children
}) => {
    return (
        <Global.BigLabel
            backgroundColor={backgroundColor}
            color={color}
            width={width}
            justifyContent={justifyContent}
            withoutWith={withoutWith}
        >
            <Global.BigLabelContent uppercase={text1Uppercase}>
                {text1}
                {children}
            </Global.BigLabelContent>
            <Global.BigLabelContent>{text2}</Global.BigLabelContent>
        </Global.BigLabel>
    );
};

export default React.memo(BigLabel);
