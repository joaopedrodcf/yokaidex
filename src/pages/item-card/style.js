import styled from 'styled-components';

export const Sections = styled.div`
    display: flex;

    flex-direction: ${props => {
        if (props.isRow) return 'row';

        return 'column';
    }};

    justify-content: ${props => {
        if (props.justifyContent) return props.justifyContent;

        return 'column';
    }};

    width: 100%;
    align-items: flex-start;
    margin: 12px 0;
`;

export const STable = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    text-align: center;
    border-radius: 12px;
`;

export const STableTitle = styled.div`
    background-color: ${props => {
        if (props.color) return props.color;

        return '';
    }};

    font-weight: 600;
    font-size: 18px;
    border-radius: 12px 12px 0 0;
    padding: 6px;
`;

export const STableText = styled.div`
    font-size: 18px;
    padding: 12px;
    border-radius: 0 0 12px 12px;
    color: ${props => props.theme.theme().fg};
    img {
        margin-right: 12px;
    }
`;

export const ContainerSeal = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    width: 100%;
`;

export const SealElements = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 16px;
    font-weight: 600;
    padding: 12px;
    width: 50%;
    color: ${props => props.theme.theme().fg};

    a {
        color: inherit;
        text-decoration: inherit;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    @media (min-width: 576px) {
        width: 25%;
    }
`;

export const Label = styled.div`
    background-color: ${props => {
        if (props.color) return props.color;

        return '';
    }};

    border-radius: 18px;
    padding: 8px 25px;
    font-weight: 600;
    margin-bottom: 12px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;
