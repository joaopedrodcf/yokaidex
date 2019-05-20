import styled from 'styled-components';

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const SideInformation = styled.div`
    position: absolute;
    top: 68px;
    right: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${props => props.theme.theme().fg};

    > div,
    > img {
        margin-top: 6px;
    }

    @media (min-width: 960px) {
        padding: 12px 125px;
    }

    @media (min-width: 1280px) {
        padding: 12px 250px;
    }

    @media (min-width: 1444px) {
        padding: 12px 500px;
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

export const Requirements = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
`;

export const Requirement = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 16px;
    font-weight: 600;
    padding: 12px;
    border-radius: 0 0 12px 12px;
    color: ${props => props.theme.theme().fg};
    img {
        margin-right: 12px;
        width: 50%;
    }

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
