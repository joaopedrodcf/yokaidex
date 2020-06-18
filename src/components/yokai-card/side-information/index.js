import React from 'react';
import { SCSideInformation } from './style';
import utils from '../../utils';
import Image from '../../shared/image';
import { ranks } from '../../../mocks';

const SideInformation = ({ yokaiNumber, rank }) => {
    return (
        <SCSideInformation>
            <h2>#{yokaiNumber}</h2>
            <Image
                imageUrl={utils.getImage(ranks, rank)}
                altText={rank}
                size="small"
            />
        </SCSideInformation>
    );
};

export default React.memo(SideInformation);
