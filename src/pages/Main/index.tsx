import { FormEvent, useCallback, useState } from 'react'

import * as S from './styles'

import { Header } from '../../components/Header'
import { Post } from '../../components/Post'
import { useDispatch, useSelector } from 'react-redux'
import { createPost } from '../../redux/reducers'
import { RootState } from '../../redux/store'

export const Main = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const posts = useSelector((state: RootState) => state.post)
  const dispatch = useDispatch()

  const handleSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault()

      dispatch(
        createPost({
          title,
          content,
          created_at: new Date().toLocaleDateString('pt-BR')
        })
      )
      setTitle('')
      setContent('')
    },
    [title, content, dispatch]
  )

  console.log(posts)

  return (
    <S.Wrapper>
      <Header title="Codeleap Network" />
      <S.FormContent onSubmit={handleSubmit}>
        <h1>What is on your mind ?</h1>
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <textarea
          placeholder="content"
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
        <button type="submit">Create</button>
      </S.FormContent>
      {posts.posts.map((post) => (
        <Post
          key={post.title}
          title={post.title}
          content={post.content}
          createdAt={post.created_at}
          username={posts.username}
        />
      ))}
    </S.Wrapper>
  )
}
