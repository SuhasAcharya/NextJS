import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
    height:${(props)=> props.height};
    width:${(props)=> props.width};
    max-width:100%;

    @media (max-width:768px){
        height:${(props)=> props.height};
        width:${(props)=> props.width};
        max-width:100%;
    }
`

const img = ({src,width,height}) => {
    return (
        <Img src={src} height={height} width={width}></Img>
    );
}

export default Img;
