import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit('setPosts', [
              {
                id: "1",
                title: "First Post",
                previewText: "This is our first post!",
                thumbnail:
                  "https://associationsnow.com/wp-content/uploads/2016/01/0111_javascript.jpg",
              },
              {
                id: "2",
                title: "Second Post",
                previewText: "This is our second post!",
                thumbnail:
                  "https://associationsnow.com/wp-content/uploads/2016/01/0111_javascript.jpg",
              },
              {
                id: '3',
                title: 'Assignment 2',
                previewText: 'Practicing the "async data" feature',
                thumbnail: 'https://associationsnow.com/wp-content/uploads/2016/01/0111_javascript.jpg'
              }
            ]
            )
            resolve();
          }, 1000);
          // reject(new Error())
        });
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts);
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
