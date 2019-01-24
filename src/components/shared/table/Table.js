import React from 'react';
import SCTable from './style';
import Image from '../image';

const getImage = (types, wantedType) => {
    const typeRow = types.find(aux => wantedType === aux.name.toLowerCase());

    return typeRow ? typeRow.image : '';
};

const Table = ({ headers, rows, imageRows, color }) => (
    <SCTable color={color}>
        <thead>
            <tr>
                {headers.map(header => (
                    <th key={header}>{header}</th>
                ))}
            </tr>
        </thead>
        <tbody>
            <tr>
                {imageRows &&
                    imageRows.map((row, index) => (
                        <td key={index + row}>
                            {getImage(row.types, row.wantedType) && (
                                <Image
                                    imageUrl={getImage(
                                        row.types,
                                        row.wantedType
                                    )}
                                    altText={row.yokaiType}
                                    size={row.size}
                                />
                            )}
                        </td>
                    ))}

                {rows &&
                    rows.map((row, index) => <td key={index + row}>{row}</td>)}
            </tr>
        </tbody>
    </SCTable>
);

export default Table;
