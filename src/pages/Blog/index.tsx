import React from 'react'
import { Profile } from './components/Profile'
import { SearchInput } from './components/SearchInput'
import { PostsListContainer } from './styles'
import { Post } from './components/Post'

export const Blog = () => {
  return (
    <>
      <Profile/>
      <SearchInput/>
      <PostsListContainer>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </PostsListContainer>
    </>
  )
}
