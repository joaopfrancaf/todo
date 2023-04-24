import { StyledTaskContainer } from "../style/components/task";
import lixo from "../assets/trash.svg";
import { ChangeEvent, useState } from "react";

interface taskProps {
  tasktext: string;
  onDelete: (taskText: string) => void;
}

export default function Task({ tasktext, onDelete }: taskProps) {
  const [checked, setChecked] = useState(false) 

  function handleRemove() {
    onDelete(tasktext)
  }

  function isChecked(event: ChangeEvent<HTMLInputElement>) {
    setChecked(event.target.checked)
  }

  return (
    <StyledTaskContainer>
      <input type="checkbox" onChange={isChecked} />
      <span style={checked ? {textDecoration: 'line-through'} : {textDecoration: 'none'}}>{tasktext}</span>
      <button onClick={handleRemove}>
        <img src={lixo} />
      </button>
    </StyledTaskContainer>
  );
}
