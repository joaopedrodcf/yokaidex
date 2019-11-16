import React from 'react';
import Global from '../../../styles';
import BigLabel from '../../../components/big-label';
import { elements, tribes } from '../../../mocks';
import utils from '../../../components/utils';
import Image from '../../../components/shared/image';

const TribeNElement = ({ color, tribe, element }) => {
    const elementColor = utils.getColor(elements, element);
    const elementSecondaryColor = utils.getSecondaryColor(elements, element);

    return (
        <Global.Section isRow justifyContent="space-evenly">
            <BigLabel backgroundColor={color} text2={tribe}>
                <Image
                    imageUrl={utils.getImage(tribes, tribe)}
                    altText={tribe}
                    size="small"
                />
            </BigLabel>

            {tribe !== 'Boss' && (
                <BigLabel
                    backgroundColor={elementColor}
                    color={elementSecondaryColor}
                    text2={element}
                >
                    <Image
                        imageUrl={utils.getImage(elements, element)}
                        altText={element}
                        size="small"
                    />
                </BigLabel>
            )}
        </Global.Section>
    );
};

export default React.memo(TribeNElement);
