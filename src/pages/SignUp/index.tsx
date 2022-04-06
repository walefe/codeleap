import * as S from './styels'

export const SignUp = () => {
  return (
    <S.Wrapper>
      <h1>Welcome to CodeLeap network!</h1>
      <S.FormContainer>
        <S.Text>Please enter your username</S.Text>
        <S.Input placeholder="John Doe" />
      </S.FormContainer>
      <S.Button type="submit">Entrar</S.Button>
    </S.Wrapper>
  )
}
