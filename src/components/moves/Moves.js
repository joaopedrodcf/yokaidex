import React from 'react';
import { Move, MoveTitle, MoveText } from './style';
import Global from '../../styles';
import Image from '../shared/image';

const Moves = ({ yokai, color }) => {
    return (
        <Global.Section>
            <Global.SectionHeader color={color}>Moves</Global.SectionHeader>
            <Move color="#e1bee7">
                <div>
                    <MoveTitle color="#7b1fa2">Skill</MoveTitle>
                    <MoveText bold>{yokai.skill.name}</MoveText>
                    <MoveText>{yokai.skill.description}</MoveText>
                </div>
            </Move>
            <Move color="#fff176">
                <div>
                    <MoveTitle color="#f57f17">Attack</MoveTitle>
                    <MoveText bold>{yokai.attack.name}</MoveText>
                </div>
                <MoveText>
                    <Image
                        imageUrl="https://res.cloudinary.com/dcrcweea8/image/upload/v1549121429/Yokai/info/attack.png"
                        altText="attack"
                        size="small"
                    />
                    {yokai.attack.power}
                </MoveText>
            </Move>
            <Move color="#b3e5fc">
                <div>
                    <MoveTitle color="#0277bd">Technique</MoveTitle>
                    <MoveText bold>{yokai.technique.name}</MoveText>
                </div>
                <MoveText>
                    <Image
                        imageUrl="https://res.cloudinary.com/dcrcweea8/image/upload/v1549121429/Yokai/info/technique.png"
                        altText="attack"
                        size="small"
                    />
                    {yokai.technique.power}
                </MoveText>
            </Move>
            <Move color="#ef9a9a">
                <div>
                    <MoveTitle color="#c62828">Soultime</MoveTitle>
                    <MoveText bold>{yokai.soultime.name}</MoveText>
                    <MoveText>{yokai.soultime.description}</MoveText>
                </div>
                <MoveText>
                    <Image
                        imageUrl="https://res.cloudinary.com/dcrcweea8/image/upload/v1549121429/Yokai/info/soultime.png"
                        altText="attack"
                        size="small"
                    />
                    {yokai.soultime.power}
                </MoveText>
            </Move>
            <Move color="#f8bbd0">
                <div>
                    <MoveTitle color="#d81b60">Inspirit</MoveTitle>
                    <MoveText bold>{yokai.inspirit.name}</MoveText>
                    <MoveText>{yokai.inspirit.description}</MoveText>
                </div>
                <MoveText>
                    <Image
                        imageUrl="https://res.cloudinary.com/dcrcweea8/image/upload/v1549121429/Yokai/info/inspirit.png"
                        altText="attack"
                        size="small"
                    />
                    {yokai.inspirit.power}
                </MoveText>
            </Move>
        </Global.Section>
    );
};

export default Moves;
