import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostsState } from './posts.state';

const getPostsState = createFeatureSelector<PostsState>('posts');

export const getPosts = createSelector(getPostsState, (state) => {
  return state.posts;
});

export const getPostById = createSelector(getPostsState, (state, props) => {
  return state.posts[props.id - 1] ? state.posts[props.id - 1] : null;
});
