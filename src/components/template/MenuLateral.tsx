import MenuItem from "./MenuItem";
import { Armazem, Home, InteligenciaNegocio, Logout, MarketPlace, Relatorio, Settings, Transporte } from "../Icons/Index";
import Logo from "./Logo";

export default function MenuLateral(){
    return (
     <aside className = {`bg-blue-900 flex flex-col
     `}> 
        <div className = {`
        
        flex flex-col items-center justify-center
        h-20 w-20
        bg-gradient-to-r from-indigo-500 to bg-white-800
        ` 



        }>
          <Logo/>  
         </div>
          
         <ul className ={"flex-grow"}>
           <MenuItem url = "/" texto = "Inicio" icone = {Home}/>
           <MenuItem url = "/Transporte" texto = "Transporte" icone = {Transporte}/>
           <MenuItem url = "/Armazem" texto = "Armazem" icone = {Armazem}/>
           <MenuItem url = "/MarketPlace" texto = "MarketPlace" icone = {MarketPlace}/>
           <MenuItem url = "/Relatorio" texto = "Relatorio" icone = {Relatorio}/>
           <MenuItem url = "/InteligenciaNegocio" texto = "Indicadores" icone = {InteligenciaNegocio}/>
           <MenuItem url= "/Settings" texto = "Settings" icone = {Settings}/>
           
         </ul>

         <ul className ={'text-blue-900  border-t-2'}>
          
           <MenuItem  texto = "Logout" icone = {Logout} onClick = {() =>console.log('logout')}  
           className = {`
           text-red-600   `

           }
           />
         </ul>


     </aside>

    ) }