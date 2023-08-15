import React from "react"
import ReactDOM from "react-dom"

const ArrowFunction = () => {
    return (
        <div>

            {React.createElement("h1", {}, "this is createElement")}
            {
                React.createElement("h2", {}, "data")//arguments are element,{props},children
            }
            {
                React.createElement("div", {}, React.createElement("h1", {}, "data1"))//we are not gonna use this type of coding
            }

        </div>
    );
}
function Demo() {
    return (
        <> {/*can be used instead of the whole wrapped <div> tag*/}
            <h1>Demo</h1>
            <h2>Demo1</h2>

            <ArrowFunction></ArrowFunction>
        </>);
}//must always return something

//ReactDOM.render(<Demo></Demo>, document.getElementById("root"));//rendering the <Demo/> into the root 
