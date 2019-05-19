import styled from 'styled-components';

export const ContainerHeader = styled.div`
    padding: 12px 20px;
`;

export const Section = styled.div`
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
    margin: 0 0 12px 0;

    a {
        width: 100%;
        color: inherit;
        text-decoration: inherit;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const SectionWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    text-align: start;
    border-radius: 12px;
    padding: 6px;
    justify-content: start;
    align-items: center;
    font-weight: 600;
    font-size: 18px;
    background-color: #e1bee7;
`;

export const SectionText = styled.div`
    font-weight: 600;
    font-size: 18px;
    margin-left: 12px;

    img {
        margin-right: 12px;
    }
`;

export const InputContainer = styled.div`
    padding: 6px 0;
    display: flex;
    flex-direction: row;
    width: 50%;
`;

export const InputContainerWrap = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 12px;
    color: ${props => props.theme.theme().fg};
`;
