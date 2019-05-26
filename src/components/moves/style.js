import styled from 'styled-components';

export const Move = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 8px;
    padding: 12px 12px;
    background-color: ${props => props.color};
    border-radius: 12px;

    > div:nth-child(1) {
        width: 75%;
        text-align: start;
    }

    > div:nth-child(2) {
        width: 25%;
        text-align: end;
    }
`;

export const MoveTitle = styled.div`
    margin-bottom: 12px;
    color: ${props => props.color};
    font-weight: 600;
    font-size: 18px;
`;

export const MoveText = styled.div`
    font-weight: ${props => (props.bold ? 600 : '')};

    img {
        position: absolute;
        top: 6px;
        right: 6px;
    }
`;
