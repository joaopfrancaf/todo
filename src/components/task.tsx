import { StyledTaskContainer } from "../style/components/task";
import lixo from "../assets/trash.svg";
import { ChangeEvent, useState } from "react";
import { task } from "../App";

interface taskProps {
  props: task,
  onDelete: (id: number) => void
}

export default function Task({ props, onDelete }: taskProps) {
  const [checked, setChecked] = useState(false) 

  function handleRemove() {
    onDelete(props.id)
  }

  function isChecked(event: ChangeEvent<HTMLInputElement>) {
    setChecked(event.target.checked)
  }

  return (
    <StyledTaskContainer>
      <input type="checkbox" onChange={isChecked} />
      <span style={checked ? {textDecoration: 'line-through'} : {textDecoration: 'none'}}>{props.tasknm}</span>
      <button onClick={handleRemove}>
        <img src={lixo} />
      </button>
    </StyledTaskContainer>
  );
}
