//////////// trying to render an element with func having description passed from reactElement obj
function customRender(reactElement, container) {
  /*//////////// version 1
  // here learnt how i tried to create an ele & render on index using func ( to mimic react idea)
  const domElement = document.createElement(reactElement.type); //a
  domElement.innerHTML = reactElement.children;
  domElement.setAttribute("href", reactElement.props.href);
  domElement.setAttribute("target", reactElement.props.target);
  container.appendChild(domElement);
  */ ////////////

  ///////////// version 2 can be used to make & render elements using a looping func
  const domElement = document.createElement(reactElement.type);

  domElement.innerHTML = reactElement.children;

  for (const prop in reactElement.props) {
    //for safty, checking if there is any children in data of ele obj, to IGNORE it.
    if (prop == "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]); //*here prop: href | reactElement.props[prop]: value of prop
  }
  container.appendChild(domElement);
  /////////////
}
////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////data obj: for render an element, uniq for any ele
const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

const mainContainer = document.getElementById("root");

customRender(reactElement, mainContainer); //passing for what to render & where to render
///////////// important to track (nested props obj (are attributes in most case)), while making ele creation func
