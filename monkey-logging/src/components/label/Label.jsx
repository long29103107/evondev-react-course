import React from 'react';
import styled from 'styled-components';

const LabelStyled = styled.label`
  color: ${(props) => props.theme.grayDark};
  font-weight: 600;
`;

const Label = ({ htmlFor = '', required: requiredField = false, children, ...props }) => {
  return (
    <LabelStyled htmlFor={htmlFor} {...props}>
      {children} {requiredField && <span className="text-red-500">*</span>}
    </LabelStyled>
  );
};

export default Label;