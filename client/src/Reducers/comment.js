const commentreducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case "POST_COMMENT":
      // Assuming action.payload contains the new comment object
      return { ...state, data: [...state.data, action.payload] };
      
    case "EDIT_COMMENT":
      // Update the comment in the array (you need to find it by ID and modify it)
      return {
        ...state,
        data: state.data.map((comment) =>
          comment._id === action.payload._id ? action.payload : comment
        ),
      };
      
    case "FETCH_ALL_COMMENTS":
      // Ensure that payload is an array of comments
      return { ...state, data: action.payload };
      
    default:
      return state;
  }
};

export default commentreducer;
