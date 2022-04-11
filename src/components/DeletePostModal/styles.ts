import styled from 'styled-components'

export const Container = styled.div`
  height: 10rem;
  display: flex;
  flex-direction: column;
  padding: 1.6rem;

  p {
    font-size: 1.8rem;
    margin-bottom: 1.8rem;
  }

  div {
    width: auto;
    align-self: flex-end;
    justify-content: space-between;

    button + button {
      margin-left: 1rem;
    }

    button {
      width: 11rem;
      height: 3.3rem;
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
  }
`
