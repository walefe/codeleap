import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.4rem;

  max-width: 50rem;
  width: 100%;

  max-height: 22rem;
  height: 100%;

  background-color: #fff;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;

  margin-top: 2.6rem;
  height: auto;
`

export const Text = styled.p`
  font-size: 1.6rem;
`

export const Input = styled.input`
  border-radius: 0.4rem;
  border: 0;
  border: 2px solid #777777;
  margin-top: 1rem;
  padding: 0.4rem;

  &::placeholder {
    color: #777777;
  }
`
export const Button = styled.button`
  width: 11.1rem;
  height: 3.3rem;
  align-self: flex-end;
  margin-top: 2.6rem;
  background-color: black;
  border: 0;
  color: #fff;
  font-weight: bold;
`
