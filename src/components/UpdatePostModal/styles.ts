import styled from 'styled-components'

export const FormContent = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 72.3rem;
  width: 100%;
  padding: 2.8rem;
  margin: 4rem 0;

  input {
    padding: 1rem;
    margin: 2.4rem 0;
  }

  textarea {
    padding: 1rem;
    height: 12rem;
  }

  button {
    width: 11rem;
    height: 3.3rem;
    align-self: flex-end;
    margin-top: 1.8rem;
    background-color: #6933ff;
    border: 0;
    border-radius: 0.4rem;
    color: #fff;
    font-weight: bold;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`
