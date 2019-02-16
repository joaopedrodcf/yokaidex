const getColor = (types, wantedType) => {
    const typeRow = types.find(
        aux => wantedType.toLowerCase() === aux.name.toLowerCase()
    );

    return typeRow ? typeRow.color1 : '';
};

const getGradientColor = (types, wantedType) => {
    const typeRow = types.find(
        aux => wantedType.toLowerCase() === aux.name.toLowerCase()
    );

    return typeRow ? `${typeRow.color1}, ${typeRow.color2}` : '';
};

const getImage = (types, wantedType) => {
    const typeRow = types.find(aux => wantedType === aux.name.toLowerCase());

    return typeRow ? typeRow.image : '';
};

const getEvolution = (evolutions, evolutionIndexes) => {
    if (evolutionIndexes === undefined) {
        return;
    }

    const evolutionsArray = [];

    evolutionIndexes.forEach(evo => {
        evolutionsArray.push(evolutions[evo]);
    });

    // eslint-disable-next-line
    return evolutionsArray;
};

export default { getColor, getGradientColor, getImage, getEvolution };
