import styled from 'styled-components';

export const SideInformation = styled.div`
    position: absolute;
    top: 68px;
    right: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${props => props.theme.color};

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
    width: 50%;
    padding: 12px;
    color: ${props => props.theme.color};
    font-weight: 600;
    font-size: 16px;
    text-align: center;
    border-radius: 0 0 12px 12px;

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

export const Location = styled.div`
    white-space: pre-line;
`;
