import { css } from 'styled-components';

const xs = css`
    font-weight: normal;
    font-size: 1rem;
    line-height: 1.6;
`;

const s = css`
    font-weight: normal;
    font-size: 1.2rem;
    line-height: 1.5;
`;

const m = css`
    font-weight: normal;
    font-size: 1.6rem;
    line-height: 1.4;
`;

const l = css`
    font-weight: normal;
    font-size: 1.8rem;
    line-height: 1.2;
`;

const xl = css`
    font-weight: normal;
    font-size: 2.6rem;
    line-height: 1.23;
`;

const xsTitle = css`
    ${xs};
    letter-spacing: 1.9px;
    text-transform: uppercase;
`;

const mTitle = css`
    ${m};
    letter-spacing: 1.9px;
    text-transform: uppercase;
`;

const lTitle = css`
    ${l};
    letter-spacing: 1.9px;
    text-transform: uppercase;
`;

const xsBold = css`
    ${xs};
    font-weight: bold;
`;

const mBold = css`
    ${m};
    font-weight: bold;
`;

const lBold = css`
    ${l};
    font-weight: bold;
`;

const typographys = {
    xs,
    s,
    m,
    l,
    xl,
    xsTitle,
    mTitle,
    lTitle,
    xsBold,
    mBold,
    lBold
};

export default typographys;
