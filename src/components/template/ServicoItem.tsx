

import Link from 'next/Link'

interface ServicoItemProps{
   url?: string 
   texto:string 
   icone: any 
   className?:string
   onClick?: (evento:any) => void
}



export default function ServicoItem (props : ServicoItemProps){
  function renderizarLink() {
      return (
        <a className={`
        flex 
        h-15
        items-center
        li
        
        
        ${props.className}
       `}>

       {props.icone}
       <span

        className = {`text-xs font-light pl-2 `}
       >
           {props.texto}
       </span>
       </a>


      )
  }
    return(

    <li onClick = {props.onClick} className = {" hover:bg-blue-900 rounded-r transition-color duration-700 w-24 transition ease-out  ItemServico  "}>
        {props.url ? (

         <Link href={props.url}>
            {renderizarLink()}
         </Link>

        ) : (

            renderizarLink()
        )} 
        
     
    </li>

    )
}