import React from 'react';
import Card from '../../../components/card';

const Description = ({ color, description }) => {
    return (
        <Card isRow title="Bio" color={color}>
            {description}
        </Card>
    );
};

export default React.memo(Description);
