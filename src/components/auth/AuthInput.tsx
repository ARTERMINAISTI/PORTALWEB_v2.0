interface AuthInputProps {

      label : string 
      valor : any
      tipo?: 'text' | 'password'
      valorMudou: (novoValor:any) => void
      obrigatorio?:boolean
}

export default function AuthInput (props: AuthInputProps){

    return (

          <div className={'flex flex-col mt-4'}>
               <label htmlFor="">
                       {props.label}            
               </label>
               <input type={props.tipo ?? 'text'}                      
                      value={props.valor}
                      onChange = {e => props.valorMudou?.(e.target.value)}
                      required = {props.obrigatorio} 
                      className = { `px-4 py-1 rounded-lg 
                                   bg-gray-200 mt-2
                                   border focus:border-blue-800
                                   focus:outline-none
                                     
                                     
                      `}
                    
               />

          </div>

    )
}