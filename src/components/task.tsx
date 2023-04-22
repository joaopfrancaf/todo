import { StyledTaskContainer } from "../style/components/task";
import lixo from "../assets/trash.svg";

interface taskProps {
  tasktext: string;
  taskDelete: () => void;
}

export default function Task({ tasktext, taskDelete }: taskProps) {
  return (
    <StyledTaskContainer>
      <input type="checkbox" />
      <span>{tasktext}</span>
      <button onClick={taskDelete}>
        <img src={lixo} />
      </button>
    </StyledTaskContainer>
  );
}
