import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PostState {
  username: string
  posts: post[]
}

const initialState: PostState = {
  username: '',
  posts: []
}

type user = {
  username: string
}

type post = {
  title: string
  content: string
  created_at: string
}

export const counterSlice = createSlice({
  name: 'Post',
  initialState,
  reducers: {
    createUser: (state, action: PayloadAction<user>) => {
      state.username = action.payload.username
    },
    createPost: (state, action: PayloadAction<post>) => {
      state.posts.push(action.payload)
    },
    deletePost: (state, action: PayloadAction<{ title: string }>) => {
      state.posts = state.posts.filter(
        (post) => post.title !== action.payload.title
      )
    },
    updatePost: (
      state,
      action: PayloadAction<{
        title: string
        pastTitle: string
        content: string
        created_at: string
      }>
    ) => {
      const post = state.posts.findIndex(
        (post) => post.title === action.payload.pastTitle
      )
      state.posts[post] = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { createUser, createPost, deletePost, updatePost } =
  counterSlice.actions

export default counterSlice.reducer
