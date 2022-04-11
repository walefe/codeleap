import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 72.3rem;
  width: 100%;
  height: 34.9rem;
  background: #ffffff;
  border-radius: 0.4rem;
  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.08);

  & + div {
    margin: 6rem 0;
  }
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  height: 6rem;
  padding: 2rem;
  background-color: #5429cc;
  color: #ffffff;
  font-size: 1.6rem;
  font-weight: bold;

  div {
    width: 8rem;
    height: 3rem;
    display: flex;
    justify-content: space-between;

    button {
      width: 3rem;
      height: 3rem;
      border: 0;
      background-color: transparent;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }

      svg {
        width: 3rem;
        height: 3rem;
        color: #ffff;
      }
    }
  }
`

export const PostHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1.6rem;

  span {
    color: #777777;
    font-size: 1.8rem;
    font-weight: bold;
  }
`

export const PostContent = styled.main`
  width: 100%;
  height: 100%;
  padding: 2.6rem;

  p {
    font-size: 1.6rem;
  }
`
