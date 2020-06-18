import React from 'react';
import Card from '../../card';

const Location = ({ locations }) => {
    return (
        <Card title="Locations" color="#ce93d8">
            {locations.map((location, index) => (
                <div key={index}>{location}</div>
            ))}
        </Card>
    );
};

export default React.memo(Location);
