import React from "react";

class Graph2D extends React.Component {
    render() {
        return (<div>
            <div id="funcInput">
                <input type="checkbox" id="setInterpolation"></input>
                <label for="setInterpolation">Интеполяция</label>
                <div id="listOfFunctions"></div>
                <button id="addFunction">+</button>
            </div>
            <canvas id="canvas"></canvas>
        </div>)
    }
}

export default Graph2D;