import { Armazem, MarketPlace, Patio, Transporte } from "../Icons/Index";
import MenuLateral from "./MenuLateral";
import ServicoItem from "./ServicoItem";
import Titulo from "./Titulo";



export default function Servicos(){

    return(

        <div 
        className = {`flex justify-around  `}>
         <ServicoItem url = "/Transporte" texto = "Transporte" icone = {Transporte} />
         <ServicoItem url = "/Transporte" texto = "Armazem" icone = {Armazem} />
         <ServicoItem url = "/Transporte" texto = "Patio" icone = {Patio} />
         <ServicoItem url = "/Transporte" texto = "E-commerce" icone = {MarketPlace} />
        </div>
    )
}