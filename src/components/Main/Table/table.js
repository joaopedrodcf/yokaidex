import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TableStyle from './style';
import elements from '../../../mocks/elements';
import tribes from '../../../mocks/tribes';
import ranks from '../../../mocks/ranks';
import Image from '../../shared/image/Image';
import utils from '../../utils';

const Table = props => {
    const { handleSort, tablePropsVars } = props;
    const {
        sort,
        orderAsc,
        yokais,
        tribe,
        rank,
        element,
        name
    } = tablePropsVars;
    return (
        <TableStyle>
            <thead>
                <tr>
                    <th onClick={handleSort} thtype="name">
                        Name{' '}
                        {sort === 'name' ? (
                            <FontAwesomeIcon
                                icon={orderAsc ? 'arrow-down' : 'arrow-up'}
                            />
                        ) : null}
                    </th>

                    <th onClick={handleSort} thtype="tribe">
                        Tribe
                        {sort === 'tribe' ? (
                            <FontAwesomeIcon
                                icon={orderAsc ? 'arrow-down' : 'arrow-up'}
                            />
                        ) : null}
                    </th>
                    <th onClick={handleSort} thtype="rank">
                        Rank
                        {sort === 'rank' ? (
                            <FontAwesomeIcon
                                icon={orderAsc ? 'arrow-down' : 'arrow-up'}
                            />
                        ) : null}
                    </th>
                    <th onClick={handleSort} thtype="element">
                        Attribute
                        {sort === 'element' ? (
                            <FontAwesomeIcon
                                icon={orderAsc ? 'arrow-down' : 'arrow-up'}
                            />
                        ) : null}
                    </th>
                </tr>
            </thead>
            <tbody>
                {yokais
                    .sort((a, b) => {
                        if (sort === '') {
                            return 0;
                        }

                        const nameA = a[sort].toLowerCase();
                        const nameB = b[sort].toLowerCase();

                        if (orderAsc) {
                            if (nameA < nameB) {
                                return -1;
                            }
                            if (nameA > nameB) {
                                return 1;
                            }
                        } else {
                            if (nameA > nameB) {
                                return -1;
                            }
                            if (nameA < nameB) {
                                return 1;
                            }
                        }

                        return 0;
                    })
                    .filter(yokai => {
                        let aux = true;

                        const filters = {
                            tribe,
                            rank,
                            element
                        };

                        if (!yokai.name.toLowerCase().includes(name)) {
                            return false;
                        }

                        Object.keys(filters).forEach(type => {
                            if (
                                filters[type].length > 0 &&
                                !filters[type].includes(
                                    yokai[type].toLowerCase()
                                )
                            ) {
                                aux = false;
                            }
                        });

                        return aux;
                    })
                    .map(yokai => (
                        <tr
                            key={yokai.name + yokai.tribe}
                            onClick={() => this.goTo(yokai.name, yokai.tribe)}
                            style={{
                                background: `linear-gradient(to bottom, ${utils.getGradientColor(
                                    tribes,
                                    yokai.tribe
                                )})`
                            }}
                        >
                            <td>
                                <Image
                                    imageUrl={yokai.image}
                                    altText={yokai.name}
                                    size="medium"
                                    isThumbnail
                                />
                                {yokai.name}
                            </td>
                            <td>
                                <Image
                                    imageUrl={utils.getImage(
                                        tribes,
                                        yokai.tribe
                                    )}
                                    altText={yokai.tribe}
                                    size="small"
                                />
                            </td>
                            <td>
                                <Image
                                    imageUrl={utils.getImage(ranks, yokai.rank)}
                                    altText={yokai.rank}
                                    size="small"
                                />
                            </td>
                            <td>
                                <Image
                                    imageUrl={utils.getImage(
                                        elements,
                                        yokai.element
                                    )}
                                    altText={yokai.element}
                                    size="small"
                                />
                            </td>
                        </tr>
                    ))}
            </tbody>
        </TableStyle>
    );
};

export default Table;
