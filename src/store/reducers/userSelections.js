const initState = {
  company: "",
  model: "",
  color: "",
  date: "",
  time: ""
};

const userSelections = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_BRAND":
      return {
        company: action.details
      };
    case "CREATE_MODEL":
      return Object.assign({}, state, {
        model: action.details
      });
    case "CREATE_COLOR":
      return Object.assign({}, state, {
        color: action.details
      });
    case "CLEAR_COLOR":
      return Object.assign({}, state, {
        color: null
      });
    case "CREATE_DATE":
      return Object.assign({}, state, {
        date: action.details
      });
    case "CREATE_TIME":
      return Object.assign({}, state, {
        time: action.details
      });
  }
  return state;
};

export default userSelections;
