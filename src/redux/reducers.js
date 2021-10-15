const initialState = {
  rootList: null,
  details: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LIST_RECEIVED": {
      const rootList = action.rootList.results.map(item => {
        return {
          ...item,
          key: item.name
        }
      })
      return { ...state, rootList: rootList };
    }
    case "PLANET_RECEIVED": {
      return { ...state, details: action.details };
    }
    default:
      return { ...state };
  }
};

export default rootReducer;
