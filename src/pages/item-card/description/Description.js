import React from 'react';
import Card from '../../../components/card';

const Description = ({ description }) => {
    return (
        <Card title="Description" color="#ce93d8">
            {description}
        </Card>
    );
};

export default React.memo(Description);
