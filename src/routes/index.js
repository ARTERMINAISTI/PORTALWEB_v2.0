
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Autenticacao from '../pages/autenticacao.js'
function routes () {

return (
  <BrowserRouter>
    <Routes>
        <Route path="/"   element = {<Autenticacao/>}/>

    </Routes>
  
  </BrowserRouter>

)
}

export default routes ; 