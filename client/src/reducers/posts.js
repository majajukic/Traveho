//in reducers, state always has to be equal to something.Empty array for the posts in this case:
export default (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;//our actual posts.
        case 'CREATE':
            return [...posts, action.payload];//first we spread the posts,so we dont override previous data.
        default:
            return posts;
    }
}