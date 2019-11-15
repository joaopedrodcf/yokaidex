import styled from 'styled-components';

export const ContainerHeader = styled.div`
    padding: 12px 20px;
`;

export const Form = styled.form`
    width: 100%;
    height: calc(100vh - 215px); /*TODO: this is hammer */
`;

export const Section = styled.div`
    display: flex;
    flex-direction: ${props => (props.isRow ? 'row' : 'column')};
    align-items: flex-start;
    justify-content: ${props =>
        props.justifyContent ? props.justifyContent : 'column'};
    width: 100%;
    margin: 0 0 12px 0;

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        color: inherit;
        text-decoration: inherit;
    }
`;

export const SectionWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    width: 100%;
    padding: 6px;
    font-weight: 600;
    font-size: 18px;
    text-align: start;
    background-color: #ce93d8;
    border-radius: 12px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

export const SectionText = styled.div`
    margin-left: 12px;
    font-weight: 600;
    font-size: 18px;

    img {
        margin-right: 12px;
    }
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 50%;
    padding: 6px 0;
`;

export const InputContainerWrap = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 12px;
    color: ${props => props.theme.color};
`;
