import type { AppState } from "./App";

type Props = {
  handleClick: (
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>
  ) => void;
  appState: AppState;
};

function Rating({ handleClick, appState }: Props) {
  return (
    <>
      <img className="star-icon" src="./images/icon-star.svg" />
      <h3>How did we do?</h3>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated
        <br />
        to help us improve our offering!
      </p>
      <div className="button-container" onClick={handleClick}>
        <button
          className={`num-button ${
            appState.buttonNumber === 1 ? "chosen-button" : ""
          }`}
          id="1"
        >
          1
        </button>
        <button
          className={`num-button ${
            appState.buttonNumber === 2 ? "chosen-button" : ""
          }`}
          id="2"
        >
          2
        </button>
        <button
          className={`num-button ${
            appState.buttonNumber === 3 ? "chosen-button" : ""
          }`}
          id="3"
        >
          3
        </button>
        <button
          className={`num-button ${
            appState.buttonNumber === 4 ? "chosen-button" : ""
          }`}
          id="4"
        >
          4
        </button>
        <button
          className={`num-button ${
            appState.buttonNumber === 5 ? "chosen-button" : ""
          }`}
          id="5"
        >
          5
        </button>
      </div>
      <button onClick={handleClick} className="submit" id="submit">
        SUBMIT
      </button>
    </>
  );
}
export default Rating;
