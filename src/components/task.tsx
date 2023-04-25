import { StyledTaskContainer } from "../style/components/task";
import lixo from "../assets/trash.svg";
import { ChangeEvent, useState } from "react";
import { task } from "../App";

interface taskProps {
  props: task;
  onDelete: (id: number) => void;
  onCheck: (isDone: boolean, id: number) => void;
}

export default function Task({ props, onDelete, onCheck }: taskProps) {
  //const [checked, setChecked] = useState(false);

  function handleRemove() {
    onDelete(props.id);
  }

  function isChecked(event: ChangeEvent<HTMLInputElement>) {
    const isCheck: boolean = event.target.checked;
    onCheck(isCheck, props.id);
  }

  return (
    <StyledTaskContainer>
      <input type="checkbox" onChange={isChecked} />
      <p
        style={
          props.isDone
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }
      >
        {props.tasknm}
      </p>
      <button onClick={handleRemove}>
        <img src={lixo} />
      </button>
    </StyledTaskContainer>
  );
}
