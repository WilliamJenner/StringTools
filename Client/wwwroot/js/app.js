import*as React from"react";import{render}from"react-dom";var clipboardCopy=function(e){console.log("NAH NAH NAH NAH NAH"),navigator.clipboard.writeText(e).then((function(){})).catch((function(e){alert(e)}))};window.renderReactApp=function(){render(React.createElement("div",null,React.createElement("h1",null,"REACT WORKED OMG")),document.getElementById("react-div"))};