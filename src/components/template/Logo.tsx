export default function Logo(){
  return(
      <div className={`bg-gray-600
                        h-10 w-10
                        rounded-full
                        flex flex-col
                        items-center
                        justify-center
      `}>
     
           <div className={`h-3 w-3 rounded-full bg-red-300        
           `}>
            <div className = "flex">
            <div className={`h-3 w-3 rounded-full bg-yellow-500        
           `}/>
                 <div className={`h-3 w-3 rounded-full bg-green-600        
           `}/>


            </div>
            

           </div>
      </div>
  )
}