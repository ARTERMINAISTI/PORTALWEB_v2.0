
interface MensagemErroGenericaProps{
    Mensagem: string 
    icone: any 
   }

export default function MensagemErroGenerica(props:MensagemErroGenericaProps){

  return (
    <div className={`bg-red-600 text-white py-2 px-5 my-2  rounded-lg txt-xl flex items-center `}>
                 {props.icone}
                 <span className = { `text-xs pl-2`}>{props.Mensagem}</span>
              </div>



  )
}