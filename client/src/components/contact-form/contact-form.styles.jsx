import styled, { css } from 'styled-components';

const subColor = 'grey';
const mainColor = 'black';

const shrinkLabelStyles = css`
  top: -24px;
  font-size: 16px;
  color: ${mainColor};
  left: 0;
`;

export const ContactFormContainer = styled.div`
    width: 380px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`

export const MessageForm = styled.div`
    display: flex;
    flex-direction: column;
`

export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  &.shrink {
    ${shrinkLabelStyles}
  }
`;

export const FormInputContainer = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 18px;
  position: relative;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ label {
    ${shrinkLabelStyles}
  }
`;