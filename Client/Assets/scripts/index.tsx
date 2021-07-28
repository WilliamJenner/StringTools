import * as React from "react";
import { render } from "react-dom";

declare global {
  interface Window {
    renderReactApp: () => void;
    clipboardCopy: (text: string) => void;
  }
}

const clipboardCopy = (text: string) => {
    console.log("NAH NAH NAH NAH NAH")

    navigator.clipboard
        .writeText(text)
        .then(() => {})
        .catch(error => {
            alert(error);
        });
};

window.renderReactApp = () => {
    render(
        <div>
            <h1>REACT WORKED OMG</h1>
        </div>,
        document.getElementById("react-div")
    );
};
