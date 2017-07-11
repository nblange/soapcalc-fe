import { createStore } from 'redux';
import reducer from './reducer';

var startingState = {
 name: null,
 currentIngredient: {},
 id: null,
 sap: null,
 hardness: null,
 cleansing: null,
 condiition1: null,
 bubbly: null,
 creamy: null,
 iodine: null,
 ins: null,
 lauric: null,
 myrstic: null,
 palmitic: null,
 stearic: null,
 rincinoleic: null,
 oleic: null,
 linoleic: null,
 linolenic: null,
};


module.exports = createStore(reducer, startingState, window && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
