const INITIAL_STATE = {
    id:0,
    nama:'',
    email:'',
    phone_number:'',
    dataUsers:[],
    listBarang:[],
    isLogin:false,
    isLoading:false,
    dataPokemon:[]
}

export default (state =INITIAL_STATE,action)=>{
    switch(action.type){
        
        case 'LOGIN':
            console.log('auth reducer jalan')
            return {...state,isLogin:true,isLoading:false,dataUsers:action.dataUsers}

        case 'LOGOUT':
                return {INITIAL_STATE}
        case 'SAVEPOKEMON':
            console.log('Auth Reducer Pokemon')
            return {...state,dataPokemon:action.dataPokemon,isLogin:true,isLoading:false}

        default : return state
    }
}