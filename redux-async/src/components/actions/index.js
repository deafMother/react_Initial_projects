import jsonPlaceHolder from "../../apis/jsonPlaceHolder";
import _ from "lodash";

// this action creator will call the other two action creators
// when we call an action creator from within another action creator we have to use dispatch
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts()); // wait for the fetchPost to complete then move to the next line
  const userIds = _.uniq(_.map(getState().posts, "userId"));
  userIds.forEach(id => dispatch(fetchUser(id)));
};

// fetch posts is a function that returns an asyns function, we are
// making use of redux-thunk middle-ware as this is a network/api  request
// so the dispatch function is used
export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceHolder.get("/posts");
  dispatch({
    type: "FETCH_POSTS",
    payload: response.data
  });
};

/*  using memoizing : memoize prevents identical calls to the same url more than once*/
// export const fetchUser = id =>  dispatch => _fetchUser(id,dispatch);
// // using memoize to prevent repeated network calls to the same add, i.e each add can be called exactly once and not more

// const _fetchUser = _.memoize(async(id, dispatch)=>{
//     const response = await jsonPlaceHolder.get(`/users/${ id}`);
//     dispatch({
//         type: 'FETCH_USER',
//         payload: response.data
//     });
// });

/* without memoizing*/
export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceHolder.get(`/users/${id}`);
  dispatch({
    type: "FETCH_USER",
    payload: response.data
  });
};

// export const fetchUser = function(id) {
//     return  _.memoize(async function(dispatch){
//     const response = await jsonPlaceHolder.get(`/users/${id}`);
//     dispatch({
//         type: 'FETCH_USER',
//         payload: response.data
//     });
//     });
// }
