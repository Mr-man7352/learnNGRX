import { Post } from 'src/app/models/post.model';

export interface PostsState {
  posts: Post[];
}

export const initialState: PostsState = {
  posts: [
    {
      id: '1',
      title: 'manish',
      description: 'this is it',
    },
    {
      id: '1',
      title: 'manish',
      description: 'this is it',
    },
    {
      id: '1',
      title: 'manish',
      description: 'this is it',
    },
  ],
};
