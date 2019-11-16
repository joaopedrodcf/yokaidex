import React from 'react';
import Card from '../../../components/card';

const Effect = ({ effect }) => {
    if (effect !== '') {
        return null;
    }
    return (
        <Card title="Effect" color="#ce93d8">
            {effect}
        </Card>
    );
};

export default React.memo(Effect);
