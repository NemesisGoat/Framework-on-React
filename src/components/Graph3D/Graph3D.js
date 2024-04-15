import React from "react";

class Graph3D extends React.Component {
    render() {
        return(<div><canvas id='canvasGraph3D' className='asg'></canvas>
        <div>
            <select id = 'selectFigure'>
            <option value = 'ellipticCylinder'>Эллиптический цилиндр</option>  
                <option value = 'ellipticParaboloid'>Эллиптический параболоид</option>    
                <option value = 'hyperbolicParaboloid'>Принглс??????</option>    
                <option value = 'twoSurfaceHyperboloid'>Двуполостный гиперболоид</option>    
                <option value = 'oneSurfaceHyperboloid'>Однополостный гиперболоид</option>    
                <option value = 'hyperbolicCylinder'>Гиперболический цилиндр</option>    
                <option value = 'kleinBottle'>Бутылка клейна</option>    
                <option value = 'sphere'>Сфера</option>    
                <option value = 'ellipse'>Эллипс</option>    
                <option value = 'thor'>Тор (бублик)</option>    
                <option value = 'cube'>Куб</option>
            </select>
        </div>
        <div>
            <label htmlFor="points">Рисовать точки</label>
            <input className='customSurface' data-custom='drawPoints' type='checkbox' id ='points' checked></input>    
            <label htmlFor="edges">Рисовать рёбра</label>
            <input className='customSurface' data-custom='drawEdges' type='checkbox' id ='edges' checked></input>
            <label htmlFor="polygons">Рисовать полигоны</label>
            <input className='customSurface' data-custom='drawPolygons' type='checkbox' id ='polygons' checked></input>  
        </div>
        <div id = 'paramsBlock'>
            <div id='cube params'></div>
        </div>
        </div>)
    }
}

export default Graph3D;