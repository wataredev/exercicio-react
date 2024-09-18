import { useState } from "react";

function ClickButton() {
  function handleClick() {
    alert("O botão foi clicado!");
  }
  return <button onClick={handleClick}>Clique Aqui</button>;
}

function KeyDownComponent() {
  function handleKeyDown(event) {
    console.log(`Tecla pressionada: ${event.key}`);
  }
  return <input type="text" onKeyDown={handleKeyDown}></input>;
}

function InputField() {
  const [value, setValue] = useState("");

  function handleChange(event) {
    setValue(event.target.value);
  }
  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <p>Você Digitou: {value}</p>
    </div>
  );
}

function FocusBlurComponent() {
  function handleFocus() {
    console.log("Você está no Input!");
  }

  function handleBlur() {
    console.log("Você tirou do Input");
  }

  return (
    <input
      type="text"
      onFocus={handleFocus}
      onBlur={handleBlur}
      placeholder="Input de Foco"
    ></input>
  );
}

function MouseNaDiv() {
  function handleMouseEnter() {
    console.log("O mouse aqui na Div!");
  }

  function handleMouseLeave() {
    console.log("O mouse aqui na Div!");
  }

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      Passe o Mouse aqui
    </div>
  );
}
export {
  ClickButton,
  KeyDownComponent,
  InputField,
  FocusBlurComponent,
  MouseNaDiv,
};
