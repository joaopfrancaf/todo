import { StyledTaskContainer } from "../style/components/task";
import lixo from "../assets/trash.svg";
import { ChangeEvent, useState } from "react";
import { task } from "../App";

interface taskProps {
  props: task,
  onDelete: (id: number) => void
  onCheck: (isDone: boolean) => void
}

export default function Task({ props, onDelete, onCheck }: taskProps) {
  //const [checked, setChecked] = useState(false);

  function handleRemove() {
    onDelete(props.id)
  }

  function isChecked() {
    onCheck(!props.isDone)
  }

  return (
    <StyledTaskContainer>
      <input type="checkbox" onClick={onCheck} />
      <span style={props.isDone ? {textDecoration: 'line-through'} : {textDecoration: 'none'}}>{props.tasknm}</span>
      <button onClick={handleRemove}>
        <img src={lixo} />
      </button>
    </StyledTaskContainer>
  );
}
