export const createBrand = details => {
  return (dispatch, getState) => {
    //make async call to DB
    dispatch({ type: "CREATE_BRAND", details });
  };
};

export const createModel = details => {
  return (dispatch, getState) => {
    //make async call to DB
    dispatch({ type: "CREATE_MODEL", details });
  };
};
export const createColor = details => {
  return (dispatch, getState) => {
    //make async call to DB
    dispatch({ type: "CREATE_COLOR", details });
  };
};

export const createDate = details => {
  return dispatch => {
    dispatch({ type: "CREATE_DATE", details });
  };
};

export const createTime = details => {
  return dispatch => {
    dispatch({ type: "CREATE_TIME", details });
  };
};

export const createCost = (details) => {
  return dispatch => {
    dispatch({ type: "CREATE_COST", details });
  };
};

export const clearColor = () => {
  return dispatch => {
    dispatch({ type: "CLEAR_COLOR" });
  };
};
