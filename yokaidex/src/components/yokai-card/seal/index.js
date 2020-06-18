import React from 'react';
import { Link } from 'react-router-dom';
import { Requirements, Requirement } from './style';
import { legendarys } from '../../../mocks';
import Global from '../../../styles';
import utils from '../../utils';
import Image from '../../shared/image';

const Seal = ({ yokai, color, gameVersion }) => {
    if (yokai.seal === undefined) {
        return null;
    }

    return (
        <Global.Section>
            <Global.SectionHeader color={color}>
                Yokai seal
            </Global.SectionHeader>

            <Requirements>
                {legendarys[yokai.seal].yokaisToUnlock.map(
                    (yokaiToUnlock, index) => (
                        <Requirement key={index}>
                            <Link
                                to={`/yokai-watch-${gameVersion}/yokais/${utils.uniformizeNames(
                                    yokaiToUnlock.name
                                )}`}
                            >
                                <Image
                                    imageUrl={yokaiToUnlock.image}
                                    altText=""
                                    size="medium"
                                />
                                {yokaiToUnlock.name}
                            </Link>
                        </Requirement>
                    )
                )}
            </Requirements>
        </Global.Section>
    );
};

export default React.memo(Seal);
