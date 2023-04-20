import { DivInputStyled, DivStyledHeader } from "./style/pages/App";
import lupa from '../src/assets/plus.svg'
import logo from './assets/Logo.svg'

export default function App() {

  return (
    <>
      <DivStyledHeader><img src={logo}/></DivStyledHeader>

      <DivInputStyled>
        <input type="text" name="todofield" placeholder="Adicione uma nova tarefa"/> 
        <button type="button">Criar<img src={lupa}/></button>
      </DivInputStyled>

      <div>
        
      </div>
    </>
  )
}