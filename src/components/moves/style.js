import styled from 'styled-components';

export const Move = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 12px 12px;
    justify-content: space-between;
    border-radius: 12px;
    align-items: flex-end;
    position: relative;

    > div:nth-child(1) {
        width: 75%;
        text-align: start;
    }

    > div:nth-child(2) {
        width: 25%;
        text-align: end;
    }

    background-color: ${props => {
        if (props.color) return props.color;

        return '';
    }};

    margin-bottom: 8px;
`;

export const MoveTitle = styled.div`
    color: ${props => {
        if (props.color) return props.color;

        return '';
    }};
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 12px;
`;

export const MoveText = styled.div`
    font-weight: ${props => {
        if (props.bold) return 600;

        return '';
    }};

    img {
        position: absolute;
        top: 6px;
        right: 6px;
    }
`;
