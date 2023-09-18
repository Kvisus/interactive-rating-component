import { useState } from "react";
import "./App.css";
import Rating from "./Rating";
import Thank from "./Thank";

export type AppState = {
  clicked: boolean;
  buttonNumber: undefined | number;
};

function App() {
  const [appState, setAppState] = useState<AppState>({
    clicked: false,
    buttonNumber: undefined,
  });
  function handleClick(
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>
  ) {
    e.stopPropagation();
    console.log(e);
    // e.target.children.forEach((element) => {
    //   element.classList.remove("chosen-button");
    // });
    const target = e.target as HTMLButtonElement;

    if (!target.id) return;
    console.log(target.id);
    target.id === "submit"
      ? appState.buttonNumber
        ? setAppState({ ...appState, clicked: true })
        : ""
      : setAppState({ ...appState, buttonNumber: Number(target.id) });

    // Number(target.id) === appState.buttonNumber
    //   ? target.classList.add("chosen-button")
    //   : "";

    // target.classList.add("chosen-button");
  }
  return (
    <div id="bg-wrap">
      <div className="main-frame">
        {/* <Rating handleClick={handleClick} appState={appState} /> */}
        {!appState.clicked ? (
          <Rating handleClick={handleClick} appState={appState} />
        ) : (
          <Thank buttonNumber={appState.buttonNumber} />
        )}
      </div>
    </div>
  );
}
export default App;
