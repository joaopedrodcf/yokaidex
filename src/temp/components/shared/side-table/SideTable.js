import React from 'react';
import SCSideTable from './style';

const SideTable = ({ headers, rows, color, colors }) => (
    <SCSideTable color={color}>
        <tbody>
            {headers.map((header, index) => (
                <tr key={header + index}>
                    <th style={{ backgroundColor: colors && colors[index] }}>
                        {header}
                    </th>
                    <td>{rows[index]}</td>
                </tr>
            ))}
        </tbody>
    </SCSideTable>
);

export default SideTable;
