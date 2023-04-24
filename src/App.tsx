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

export interface task  {
  id: number;
  tasknm: string;
  isDone: boolean
}

export default function App() {
  const [taskName, setTaskName] = useState<string>("");
  const [id, setId] =useState<number>(0)
  const [task, setTask] = useState<task[]>([]);

  function handleTaskName(event: ChangeEvent<HTMLInputElement>) {
    setTaskName(event.target.value);
  }

  function handleNewTask() {
    const newObjTask = {
      id: id,
      tasknm: taskName,
      isDone: false
    }
    setTask([...task, newObjTask]);
    setId(id + 1)
  }

  function handleRemoveTask(id: number) {
    const newCommentList = task.filter(x => x.id != id)

    setTask(newCommentList)
  }
  
  const isTaskNameEmpty = taskName.length === 0;
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
          required
        />
        <button
          type="button"
          onClick={handleNewTask}
          disabled={isTaskNameEmpty}
        >
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
              <div>2 de {task.length}</div>
            </DivListConcluidas>
          </DivListInfo>

          <DivList>
            {task.length ? (
              task.map((task) => {
                return <Task key={task.id} props={task} onDelete={handleRemoveTask}/>;
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
