import {React,useContext,createContext,useState} from 'react';

const cryptoContext = createContext(null);


const ValueContext = ({children})=>{
const [coinId,setCoinId] = useState('Qwsogvtv82FCd')
    return (

        <cryptoContext.Provider value={{coinId,setCoinId}}>
{children}
    </cryptoContext.Provider>
        )

}

const useCryptoContext = ()=>{
    return useContext(cryptoContext)
}

export {ValueContext,useCryptoContext}