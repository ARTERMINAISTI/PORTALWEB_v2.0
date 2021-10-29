import { Armazem, Facebook, Instagram, Linkedin, MarketPlace, Transporte } from "../Icons/Index";
import MenuLateral from "./MenuLateral";
import ServicoItem from "./ServicoItem";
import SocialItem from "./SocialItem";
import Titulo from "./Titulo";



export default function AreaSocial(){

    return(

        <div 
        className = {`flex justify-around  `}>
         <SocialItem url = "/Transporte" texto = "" icone = {Facebook} />
         <SocialItem url = "/Transporte" texto = "" icone = {Instagram} />
         <SocialItem url = "/Transporte" texto = "" icone = {Linkedin} />
         
        </div>
    )
}