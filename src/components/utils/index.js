import { useLocation } from 'react-router';

const getColor = (types, wantedType) => {
    const typeRow = types.find(
        (aux) => wantedType.toLowerCase() === aux.name.toLowerCase()
    );

    return typeRow ? typeRow.color1 : '';
};

const getSecondaryColor = (types, wantedType) => {
    const typeRow = types.find(
        (aux) => wantedType.toLowerCase() === aux.name.toLowerCase()
    );

    return typeRow ? typeRow.color2 : '';
};

const getGradientColor = (types, wantedType) => {
    const typeRow = types.find(
        (aux) => wantedType.toLowerCase() === aux.name.toLowerCase()
    );

    return typeRow ? `${typeRow.color1}, ${typeRow.color2}` : '';
};

const getImage = (types, wantedType) => {
    const typeRow = types.find(
        (aux) => wantedType.toLowerCase() === aux.name.toLowerCase()
    );

    return typeRow ? typeRow.image : '';
};

const getEvolution = (evolutions, evolutionIndexes) => {
    if (evolutionIndexes === undefined) {
        return;
    }

    const evolutionsArray = [];

    evolutionIndexes.forEach((evo) => {
        evolutionsArray.push(evolutions[evo]);
    });

    // eslint-disable-next-line
    return evolutionsArray;
};

const uniformizeNames = (name, tribe = '') => {
    let uniformizeName = name.replace(/ /g, '_').toLowerCase();
    if (tribe.toLowerCase() === 'boss') {
        uniformizeName += '_boss';
    }

    return uniformizeName;
};

const removeLocation = (name) => {
    return name
        .replace(' (Past)', '')
        .replace(' (Present)', '')
        .replace(' (USA)', '');
};

const capitalize = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
};

const calculatePercentage = (value, max) => {
    const percentage = (value / max) * 100;
    return `${percentage}%`;
};

const useGameVersion = () => {
    const location = useLocation();

    return location.pathname.split('/')[1].split('-')[2] || '3';
};

export default {
    getColor,
    getSecondaryColor,
    getGradientColor,
    getImage,
    getEvolution,
    uniformizeNames,
    capitalize,
    calculatePercentage,
    useGameVersion,
    removeLocation,
};
