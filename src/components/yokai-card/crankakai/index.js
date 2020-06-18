import React from 'react';
import { Link } from 'react-router-dom';
import { Requirements, Requirement } from './style';
import Global from '../../../styles';
import utils from '../../utils';
import Image from '../../shared/image';

const Crankakai = ({ color, crankakai, gameVersion }) => {
    if (!crankakai) {
        return null;
    }
    return (
        <Global.Section>
            <Global.SectionHeader color={color}>
                Crank-a-kai
            </Global.SectionHeader>
            <Requirements>
                {crankakai.map((coin, index) => (
                    <Requirement key={index}>
                        <Link
                            to={`/yokai-watch-${gameVersion}/items/${utils.uniformizeNames(
                                utils.removeLocation(coin.name)
                            )}`}
                        >
                            <Image
                                imageUrl={coin.image}
                                altText=""
                                size="medium"
                            />
                            {coin.name}
                        </Link>
                    </Requirement>
                ))}
            </Requirements>
        </Global.Section>
    );
};

export default React.memo(Crankakai);
