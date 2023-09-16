import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

//element : made a function, exicuting it in root to render its jsx
function MyApp() {
  return (
    <div>
      <h1>Custom App ! </h1>
    </div>
  );
}

///////////////testing with own syntax (can't work)
// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit google",
// };
/////////////////

// mimic the react (prop)internal ele data its tree,  to render it directly in root
const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit google
  </a>
);

//////testing with variables injectrion ( which is done after tree rendering)
const anotherUser = "Chai aur variable";

//////

// this time creating ele in react predifined syntax , to render it directly in root (bable transpiler work)
const reactElement3 = React.createElement(
  "a", //paragraph
  { href: "https://google.com", target: "_blank" }, //attributes
  "Click me to visit Google", //paragraph
  anotherUser // variable injected
);

ReactDOM.createRoot(document.getElementById("root")).render(
  // MyApp() / <MyApp /> anotherElement <App />

  reactElement3
);
