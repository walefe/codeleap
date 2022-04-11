import * as S from './styles'

type Props = {
  title: string
}

export const Header = ({ title }: Props) => {
  return <S.Header>{title}</S.Header>
}
