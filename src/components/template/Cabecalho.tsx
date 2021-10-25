import MenuLateral from "./MenuLateral";
import Titulo from "./Titulo";

interface CabecalhoProps{
   titulo :string
   subtitulo : string
  


}

export default function Cabecalho(props:CabecalhoProps){

    return(

        <div 
        className = {`bg-blue-800 `}>
         <Titulo titulo = {props.titulo} subtitulo={props.subtitulo}/>
        </div>
    )
}