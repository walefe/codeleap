import styled from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding-bottom: 1.6rem;
  background-color: #e5e5e5;
`

export const FormContent = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 72.3rem;
  width: 100%;
  padding: 2.8rem;
  margin: 4rem 0;
  background: #ffffff;
  border-radius: 0.4rem;
  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.08);

  input {
    padding: 1rem;
    margin: 2.4rem 0;
  }

  textarea {
    padding: 1rem;
    height: 12rem;
  }

  button {
    width: 11.1rem;
    height: 3.3rem;
    align-self: flex-end;
    margin-top: 2.6rem;
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
