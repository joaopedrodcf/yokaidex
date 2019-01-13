import styled from 'styled-components';

const SCImage = styled.img`
    height: ${props => {
        if (props.size === 'small') return '35px';
        if (props.size === 'medium') return '62px';
        if (props.size === 'large') return '150px';
        if (props.size === 'special') return '25px';

        return '35px';
    }};

    width: ${props => {
        if (props.size === 'small') return '35px';
        if (props.size === 'medium') return '62px';
        if (props.size === 'large') return '150px';
        if (props.size === 'special') return '100px';

        return '35px';
    }};
`;

export default SCImage;
