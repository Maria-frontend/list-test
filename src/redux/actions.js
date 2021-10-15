export const getList = () => {
  return (dispatch) => {
    dispatch({
      type: "REQUEST_STARTED",
    });

    return fetch("https://swapi.dev/api/planets")
      .then((res) => res.json())
      .then((res) =>
        dispatch({
          type: "LIST_RECEIVED",
          rootList: res,
        })
      )
      .catch((err) => ({
        type: "REQUEST_FAILED",
      }));
  };
};

export const getItem = (url) => {
  return (dispatch) => {
    dispatch({
      type: "REQUEST_STARTED",
    });

    return fetch(url)
      .then((res) => res.json())
      .then((res) =>
        dispatch({
          type: "PLANET_RECEIVED",
          details: res,
        })
      )
      .catch((err) => ({
        type: "REQUEST_FAILED",
      }));
  };
};
