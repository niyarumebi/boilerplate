import React from 'react';
import styled from "styled-components";

const IconButton = (props) => {

    const {children, onClick} = props;

    return (
        <Wrapper>
            {React.cloneElement(children, {size: 20, color: '#08c', onClick: onClick})}
        </Wrapper>
    )
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  cursor:pointer;
`;

export default IconButton;