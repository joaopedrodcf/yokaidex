import React from 'react';
import Card from '../../card';
import Image from '../../shared/image';
import utils from '../../utils';
import { foods } from '../../../mocks';

const Food = ({ color, favouriteFood }) => {
    return (
        <Card isRow title="Favourite food" color={color}>
            <Image
                imageUrl={utils.getImage(foods, favouriteFood)}
                altText={favouriteFood}
                size="special"
            />
            {favouriteFood}
        </Card>
    );
};

export default React.memo(Food);
