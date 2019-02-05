import React from 'react';
import SCTable from './style';
import Image from '../image';
import utils from '../../utils';

const Table = ({ headers, rows, imageRows, color, children }) => (
    <SCTable color={color}>
        <table>
            <thead>
                <tr>
                    {headers.map(header => (
                        <th key={header}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {children}
                <tr>
                    {imageRows &&
                        imageRows.map((row, index) => (
                            <td key={index + row}>
                                {utils.getImage(row.types, row.wantedType) && (
                                    <Image
                                        imageUrl={utils.getImage(
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
                        rows.map((row, index) => (
                            <td key={index + row}>{row}</td>
                        ))}
                </tr>
            </tbody>
        </table>
    </SCTable>
);

export default Table;
