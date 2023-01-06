import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin:${(props)=> props.margin};
    padding:${(props)=> props.padding};
`

export default function container({children,margin,padding}) {
  return (
    <Container margin={margin} padding={padding}>
        {children}
    </Container>
  )
}
