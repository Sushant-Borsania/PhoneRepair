export const createBrand = (details) => {
  return (dispatch, getState) => {
    //make async call to DB
    dispatch({type: 'CREATE_BRAND', details})
  }
}

export const createModel = (details) => {
  return (dispatch, getState) => {
    //make async call to DB
    dispatch({type: 'CREATE_MODEL', details})
  }
}
export const createColor = (details) => {
  return (dispatch, getState) => {
    //make async call to DB
    dispatch({type: 'CREATE_COLOR', details})
  }
}

export const clearColor = () => {
  return (dispatch) => {
    dispatch({type: 'CLEAR_COLOR'})
  }
}