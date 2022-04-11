import { FormEvent, useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { createUser } from '../../redux/reducers'

import * as S from './styels'

export const SignUp = () => {
  const [name, setName] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const submitForm = useCallback(
    (event: FormEvent) => {
      event.preventDefault()
      dispatch(
        createUser({
          username: name
        })
      )
      setName('')
      navigate('/feed')
    },
    [name, dispatch, navigate]
  )

  return (
    <S.Wrapper>
      <S.Content>
        <h1>Welcome to CodeLeap network!</h1>
        <S.FormContainer onSubmit={submitForm}>
          <S.Text>Please enter your username</S.Text>
          <S.Input
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <S.Button type="submit">Entrar</S.Button>
        </S.FormContainer>
      </S.Content>
    </S.Wrapper>
  )
}
