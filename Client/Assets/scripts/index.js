import * as React from "react";
import { render } from "react-dom";
var clipboardCopy = function (text) {
    console.log("NAH NAH NAH NAH NAH");
    navigator.clipboard
        .writeText(text)
        .then(function () { })
        .catch(function (error) {
        alert(error);
    });
};
window.renderReactApp = function () {
    render(React.createElement("div", null,
        React.createElement("h1", null, "REACT WORKED OMG")), document.getElementById("react-div"));
};
