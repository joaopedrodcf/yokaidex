import React from 'react';
import { SCLocation } from './styles';
import Card from '../../card';

const Location = ({ color, locations }) => {
    return (
        <>
            {locations.length > 0 && (
                <Card title="Locations" color={color}>
                    {locations.map((location, index) => (
                        <SCLocation key={index}>{location}</SCLocation>
                    ))}
                </Card>
            )}
        </>
    );
};

export default React.memo(Location);
