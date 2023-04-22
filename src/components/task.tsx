import { StyledTaskContainer } from "../style/components/task";
import lixo from "../assets/trash.svg";

interface taskProps {
  tasktext: string;
  taskDelete: (taskText: string) => void;
}

export default function Task({ tasktext, taskDelete }: taskProps) {
  function deleteTask() {
    taskDelete(tasktext);
  }

  return (
    <StyledTaskContainer>
      <input type="checkbox" />
      <span>{tasktext}</span>
      <button onClick={deleteTask}>
        <img src={lixo} />
      </button>
    </StyledTaskContainer>
  );
}
