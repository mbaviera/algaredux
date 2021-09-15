//CICLO
//COMPONENTE DESPARA A AÇÃO DE SOMA E PASSA COMO PAYLOAD 1 E 2, ACTION RETORNA O TIPO SUM COM O PAYLOAD DE 1 E 2
//REDUCER RECEBE OS DADOS E RETORNA O RESULTADO PRO ESTADO ATUALIZANDO O DATA STORE

import {createStore, combineReducers} from 'redux';
import CalculatorReducer from './Calculator/Calculator.reducer';

const rootReducer = combineReducers({
    calculator: CalculatorReducer
})

const store = createStore(rootReducer)

export default store