import Vuex from 'vuex';
import axios from 'axios';

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      },
      addPost(state, post) {
        state.loadedPosts.push(post);
      },
      editPost(state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(post => post.id === editedPost.id);

        state.loadedPosts[postIndex] = editedPost;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios.get(`${process.env.BASE_API_URL}/posts.json`)
        .then(result => {
          const postsArray = [];

          for (const key in result.data) {
            postsArray.push({ ...result.data[key], id: key });
          }
          vuexContext.commit('setPosts', postsArray)
        })
        .catch(err => {
          console.error(err);
        });
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts);
      },
      addPost(vuexContext, post) {
        return axios.post(`${process.env.BASE_API_URL}/posts.json`, post)
        .then(result => {
          vuexContext.commit('addPost', { ...post, id: result.data.name });
        })
        .catch(err => {
          console.log('error on action', err);
        })
      },
      editPost(vuexContext, editedPost) {
        return axios.put(`${process.env.BASE_API_URL}/posts/${editedPost.id}.json`, editedPost)
        .then(res => {
          vuexContext.commit('editPost', editedPost);
        })
        .catch(err => {
          console.log(err);
        });
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      }
    }
  });
};

export default createStore;
