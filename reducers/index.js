import { RECIEVE_ENTRIES, ADD_ENTRY } from "../actions";

function entries(state = {}, action) {
  switch (action.type) {
    case RECIEVE_ENTRIES:
      return {};
    case ADD_ENTRY:
      return {};
    default:
      return state;
  }
}

export default entries;
