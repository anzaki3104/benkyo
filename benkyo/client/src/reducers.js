import { combineReducers } from 'redux'
import { CHANGE_NAME, CHANGE_AGE, INITIALIZE_FORM } from './actions'

const initialState = {
  form: { //AddFormに入力されている文字
    name: '',
    age: '',
  },
  characters: {
    isFetching: false,  //サーバーからキャラクターのリストをとってきている最中かどうか
    characterArray: [],  //キャラクターのデータを入れるArry
  },
}

const formReducer = (state = initialState.form, action) => {
  switch (action.type) {
    case CHANGE_NAME:
      return {
        ...state,  //...stateは展開可能な要素を展開するため記法
        name: action.name,
      }
    case CHANGE_AGE:
      return {
        ...state,
        name: action.age,
      }
    case INITIALIZE_FORM:
      return initialState.form
    default:
      return state 
  }
}

const charactersReducer = (state = initialState.characters, action) =>{
  switch (action.type) {
    default:
      return state
  }
}

const rootReducer = combineReducers({
  form: formReducer,
  characters: characterReducer,
})

export rootReducer
