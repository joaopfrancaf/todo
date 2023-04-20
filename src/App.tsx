import { DivContainer, DivContainer2, DivInputStyled, DivList, DivListConcluidas, DivListCriadas, DivListInfo, DivStyledHeader } from "./style/pages/App";
import lupa from '../src/assets/plus.svg'
import logo from './assets/Logo.svg'
import Task from "./components/task";

export default function App() {

  return (
    <>
      <DivStyledHeader><img src={logo}/></DivStyledHeader>

      <DivInputStyled>
        <input type="text" name="todofield" placeholder="Adicione uma nova tarefa"/> 
        <button type="button">Criar<img src={lupa}/></button>
      </DivInputStyled>

      <DivContainer>
        <DivContainer2>

          <DivListInfo>
            <DivListCriadas><span>Tarefas criadas</span><div>5</div></DivListCriadas>
            <DivListConcluidas><span>Concluídas</span><div>2 de 5</div></DivListConcluidas>
          </DivListInfo>

          <DivList>
            <Task/>
            <Task/>
            <Task/>
            <Task/>
            <Task/>
            <Task/>
            <Task/>
            <Task/>
            <Task/>
            <Task/>
            <Task/>
            <Task/>
            <Task/>
          </DivList>

        </DivContainer2>
      </DivContainer>
    </>
  )
}