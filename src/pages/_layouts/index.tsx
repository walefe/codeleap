import { ReactNode } from 'react'
import * as S from './styles'

type Props = {
  children: ReactNode
}

export const Layout = ({ children }: Props) => (
  <S.Container>{children}</S.Container>
)
