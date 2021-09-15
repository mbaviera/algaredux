//funcao que retorna o estado
export default function (state = 0, action){ //o estado incicial ali
    //quando desparar uma action que o type for o SUM o retorno vai trazer a soma 
    switch (action.type) {
        case 'SUM':
          return action.payload[0] + action.payload[1]       
          
        case 'SUBTRACT':
          return action.payload[0] - action.payload[1]  
          
        default:
            return state;
    }
}