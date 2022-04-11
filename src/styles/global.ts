import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --background: #e5e5e5;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 67.5%;
    height: 100%;

    @media (max-width: 720px) {
      font-size: 87.5%; //14px
    }
  }

  body {
     height: auto;
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
  }

    body, #root {
    min-height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  #root {
    height: 100%;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 66.1rem;
    background: #ffff;
  }
`
