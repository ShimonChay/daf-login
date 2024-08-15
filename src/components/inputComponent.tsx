import { FC } from "react";

interface shker {
  propNumber: number,
  increase: () => void
}

// to send a props you should declear them in the type of the component and send it into the compoent.
// sheker
const InputComponent: FC<shker> = ({
  propNumber,
  increase
}) => {
  return (
    <>
      <div>{propNumber}</div>
      <button onClick={increase}>increase from child</button>
    </>
  );
};

export default InputComponent;
