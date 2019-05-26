import styled from 'styled-components';

export const Sections = styled.div`
    display: flex;
    flex-direction: ${props => (props.isRow ? 'row' : 'column')};
    align-items: flex-start;
    justify-content: ${props =>
        props.justifyContent ? props.justifyContent : 'column'};
    width: 100%;
    margin: 12px 0;
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
    width: 50%;
    padding: 12px;
    color: ${props => props.theme.theme().fg};
    font-weight: 600;
    font-size: 16px;

    a {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: inherit;
        text-decoration: inherit;
    }

    @media (min-width: 576px) {
        width: 25%;
    }
`;

export const Label = styled.div`
    margin-bottom: 12px;
    padding: 8px 25px;
    font-weight: 600;
    background-color: ${props => props.color};
    border-radius: 18px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;
