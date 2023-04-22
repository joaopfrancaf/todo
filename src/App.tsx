import {
  DivContainer,
  DivContainer2,
  DivInputStyled,
  DivList,
  DivListConcluidas,
  DivListCriadas,
  DivListInfo,
  DivStyledEmpty,
  DivStyledHeader,
} from "./style/pages/App";
import lupa from "../src/assets/plus.svg";
import logo from "./assets/Logo.svg";
import Task from "./components/task";
import { ChangeEvent, useState } from "react";
import Clip from "./assets/Clipboard.svg";

export default function App() {
  const [taskName, setTaskName] = useState<string>("");
  const [task, setTask] = useState<string[]>([]);

  function handleTaskName(event: ChangeEvent<HTMLInputElement>) {
    setTaskName(event.target.value);
  }

  function handleNewTask() {
    setTask([...task, taskName]);
  }
  return (
    <>
      <DivStyledHeader>
        <img src={logo} />
      </DivStyledHeader>

      <DivInputStyled>
        <input
          type="text"
          name="todofield"
          value={taskName}
          placeholder="Adicione uma nova tarefa"
          onChange={handleTaskName}
        />
        <button type="button" onClick={handleNewTask}>
          Criar
          <img src={lupa} />
        </button>
      </DivInputStyled>

      <DivContainer>
        <DivContainer2>
          <DivListInfo>
            <DivListCriadas>
              <span>Tarefas criadas</span>
              <div>{task.length}</div>
            </DivListCriadas>
            <DivListConcluidas>
              <span>Concluídas</span>
              <div>2 de 5</div>
            </DivListConcluidas>
          </DivListInfo>

          <DivList>
            {task.length ? (
              task.map((task) => {
                return <Task tasktext={task} />;
              })
            ) : (
              <DivStyledEmpty>
                <img src={Clip} width={56} />
                <span>Você ainda não tem tarefas cadastradas</span>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </DivStyledEmpty>
            )}
          </DivList>
        </DivContainer2>
      </DivContainer>
    </>
  );
}
