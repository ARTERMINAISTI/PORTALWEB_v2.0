import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import { Warning } from "../components/Icons/Index";
import AreaSocial from "../components/template/AreaSocial";
import MensagemErroGenerica from "../components/template/MensagemErroGenerica";
import Servicos from "../components/template/Servicos";

export default function autenticacao() {
   const [erro , SetErro] = useState(null)
   const [user,setUser] = useState('')
   const [senha,setSenha] = useState('')
   function exibirErro(msg,tempo = 5) {
    SetErro(msg)
     setTimeout(() => SetErro(null),tempo *1000)
   }

   function submeter () {
          console.log ('Login')
          exibirErro('Ocorreu um Erro ')
   }
  return (
    <div className = "flex items-center h-screen justify-center m-0  ">
      <div className= { " flex flex-col w-screen h-screen m-0   "}> 
        <div className = {"   bg-gradient-to-r from-blue-900 to bg-black h-full  m-0   z-20 hidden md:block " }>
           <div className = " flex   justify-center h-full  m-0  ">   
                <div className={"self-center border-r-2 border-gray-700 "}>
                    <img src="http://web.arterminais.com.br/view/tecnologia/img/LogoLoginNovo.png"
                    alt="imagem" 
                    className =""
                    />
                    </div >
                    <h1 className  = { "self-center TituloAutenticacao ml-3"}> SOLUCOES LOGISTICAS</h1>
        
            </div>
         
        </div>
         
        <div className = "bg-gradient-to-r from-gray-400 to bg-gray-800 hidden md:block ">
          <Servicos/>
        </div>
        </div>
      
      <div className = { "flex flex-col  items-center justify-center h-full md:w-1/4  w-full"}>
      <div className = {`  flex h-full m-10 items-center  justify-center  `  }>
         <div className= {'flex flex-col items-center '}>  <h1 className = {'text-xl font-bold mb-7 text-center'}>
            {erro ?(<MensagemErroGenerica icone = {Warning} Mensagem = {erro}/>) : false
            
          
          }
    
        Login
   

      </h1>
       <AuthInput 
          label = "User"
          tipo = "text"
          valor={user}
          valorMudou ={setUser}
          obrigatorio
       />
     
       <AuthInput 
          label = "Senha"
          tipo ="password"
          valor={senha}
          valorMudou =  {setSenha}
          obrigatorio
       />
       <div className={"flex flex-col items-center"}> 
                <button onClick= {submeter}
                className = {`w-200 AzulPadrao transition duration-500 ease-in-out bg-blue-900 hover:bg-indigo-500 transform hover:-translate-y-1 hover:scale-100
                rounded-lg px-5 py-1 mt-6
                text-white
                text-sm
                justify-center
                `}
                >
                    Entrar
            
                </button>
                </div>
       </div>


       </div>

                <div className = { '  pb-2'}>
                       <AreaSocial/>

                </div>
        </div>
    </div>
    
  )

}