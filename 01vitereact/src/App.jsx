import Chai from "./chai";

function App() {
  const username = "variable's value";

  return (
    <>
      <Chai />
      <h3>Learnd internal working of element rendering in root</h3>
      <h4> trying variables syntax |evaluated expression|:- {username}</h4>
    </>
  );
}

export default App;
