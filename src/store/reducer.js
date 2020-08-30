import * as actionTypes from "./actions"
const initialState = {
  persons: []
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PERSON_ADD:
      return {
        persons: [...state.persons, action.person]
      };
    case actionTypes.PERSON_DELETE:
      return {
        persons: state.persons.filter(person => person.id !== action.id)
      }
    default:
      break;
  }
  return state;
}

export default reducer;