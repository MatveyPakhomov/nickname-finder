import logo from "./logo.svg";
import "./App.css";
import { arrayWords } from "./constants";

function App() {
  const shuffleNickname = (enNickname) => {
    const replaceLetters = (enLetter) => {
      const filteredArray = arrayWords
        .map((i) => {
          if (i[0] === enLetter) {
            return i[1];
          } else {
            return undefined;
          }
        })
        .filter((i) => i !== undefined);
      if (filteredArray.length > 0) {
        return filteredArray[0];
      } else {
        return enLetter;
      }
    };
    const newNickname = Array.from(enNickname)
      .map((i) => replaceLetters(i))
      .join("");

    return (
      <p className="nickname" id="nickname">
        {newNickname}
      </p>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {shuffleNickname("Leorge Gucas")}
      </header>
    </div>
  );
}

export default App;
