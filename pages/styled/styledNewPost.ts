import styled from "styled-components";

export const Input = styled.input`
  width: 400px;
  height: 40px;
  border: 0;
  &:focus {
    outline: none;
  }
`;


export const TextArea = styled.textarea`
  width: 400px;
  height: 40px;
  border: 0;
  &:focus {
    outline: none;
  }
`;


export const Button = styled.button`
  height: 40px;
  padding: 0 10px;
  margin-top: 20px;
  background-color: lightgreen;
  border: 0;
  &:focus {
    outline: none;
  }
`;


export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 100px 20px;
`

export const Label = styled.label`
    width: 400px;
    display: flex;
    flex-direction: column;
`