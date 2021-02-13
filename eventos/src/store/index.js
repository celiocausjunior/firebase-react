import {createStore} from 'redux';
import reduceUser from './reduceUser';

const store = createStore(reduceUser);

export default store;