function changeState(state, action) {
  switch (action.type) {
    case "INCREASE_COUNT":
      return { count: state.count + 1 };
    default:
      return state;
  }
}
function dispatch(action) {
  state = changeState(state, action);
}

let state = { count: 0 };
let action = { type: "INCREASE_COUNT" };

dispatch({ type: "INCREASE_COUNT" });
dispatch({ type: "INCREASE_COUNT" });
dispatch({ type: "INCREASE_COUNT" });

// debugger;
