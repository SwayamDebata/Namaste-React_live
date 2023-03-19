import React from "react";
import ReactDOM from "react-dom/client";


const Title = () => (
<h1 id="title" key="h2">
Namaste React</h1>
);

//functional component--(name starts with a capital letter)
//component composition
const HeaderComponent = () => {
return (
  <div>
    <Title/>
    <h2>Namaste Functional Component</h2>
    <h2>this is a h2 tag</h2>
  </div>
);
};


// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<HeaderComponent/>);