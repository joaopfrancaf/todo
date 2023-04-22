import { StyledTaskContainer } from "../style/components/task";
import lixo from "../assets/trash.svg";

interface taskProps {
  tasktext: string;
}

export default function Task({ tasktext }: taskProps) {
  return (
    <StyledTaskContainer>
      <input type="checkbox" />
      <span>{tasktext}</span>
      <button>
        <img src={lixo} />
      </button>
    </StyledTaskContainer>
  );
}
