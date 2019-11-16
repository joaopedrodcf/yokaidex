import React from 'react';
import utils from '../../../components/utils';
import BigLabel from '../../../components/big-label';
import Global from '../../../styles';

const Type = ({ type }) => {
    return (
        <Global.Section isRow justifyContent="space-evenly">
            {type &&
                type.map((tp, index) => (
                    <BigLabel
                        key={index}
                        backgroundColor="#000000"
                        color="#ffee58"
                        text2={utils.capitalize(tp)}
                        withoutWith
                        justifyContent="center"
                    />
                ))}
        </Global.Section>
    );
};

export default React.memo(Type);
