import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Message(message,type){

    switch (type) {
        case   'error' :
            toast.error(message);
            break;
        case   'sucess' :
            toast.error(message);
            break;
        case   'info' :
                toast.error(message);
            break;
        case   'warn' :
                toast.error(message);
            break;
    
        default:
            toast.error(message);
            break;
    }
     



}