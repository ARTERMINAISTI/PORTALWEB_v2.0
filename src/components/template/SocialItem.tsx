

import Link from 'next/Link'

interface SocialItemProps{
   url?: string 
   texto:string 
   icone: any 
   className?:string
   onClick?: (evento:any) => void
}



export default function SocialItem (props : SocialItemProps){
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

    <li onClick = {props.onClick} className = {"items-center  ItemMenu "}>
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