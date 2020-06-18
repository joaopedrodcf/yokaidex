import React from 'react';
import { Wrapper, FlexWrapProducts, Link, Price, Name } from './style';
import Image from '../image';
import Button from '../button';

const amazonAdProducts = [
    {
        name: 'Yo-kai Watch Season 1 Watch',
        price: '$8.49',
        image:
            '//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B015KNDYKE&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=yokaidex-20&language=en_US',
        link:
            'https://www.amazon.com/Yo-kai-Watch-Season-1/dp/B015KNDYKE/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=yokaidex-20&linkId=909f6005161f1bc662f0af478028c82b&language=en_US',
    },
    {
        name: 'Yokai Watch Model Zero',
        price: '$22.68',
        image:
            '//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01LX3G2P2&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=yokaidex-20&language=en_US',
        link:
            'https://www.amazon.com/Yokai-YO-Watch-Model-Zero/dp/B01LX3G2P2/ref=as_li_ss_tl?dchild=1&keywords=yokai+watch&qid=1592065008&sr=8-6&linkCode=ll1&tag=yokaidex-20&linkId=5e3b65a6db617b4e8a0e9d40521fba94&language=en_US',
    },
];
const ProductAdsAmazon = () => {
    return (
        <Wrapper>
            <h3>Recommended products</h3>
            <FlexWrapProducts>
                {amazonAdProducts.map((x) => (
                    <Link href={x.link}>
                        <Image
                            imageUrl={x.image}
                            altText={x.type}
                            size="large"
                            isToLazyLoad={false}
                        />
                        <Name>{x.name}</Name>
                        <Price>{x.price}</Price>
                        <Button type="button">Buy now</Button>
                    </Link>
                ))}
            </FlexWrapProducts>
        </Wrapper>
    );
};

export default ProductAdsAmazon;
