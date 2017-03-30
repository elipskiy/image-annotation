import EventEmitter from 'events';


export default class BaseShapeEditor extends EventEmitter {
    get shape() { return this._shape; }
    get canvas() { return this._canvas; }

    constructor(canvas, shape) {
        super();

        this._canvas = canvas;
        this._shape = shape;
        this._elements = [];
    }

    /**
     * @param {BaseSvgElementWrapper} element
     */
    append(element) {
        this._elements.push(element);
        this.canvas.appendChild(element.el);
    }

    clear() {
        this._elements.forEach((element) => {
            this.canvas.removeChild(element.el);
        });
        this._elements = [];
    }

    onCanvasClick(x, y) {}
    onCanvasMouseMove(x, y) {}
    onCanvasKeyPressed(key) {}

    render() {}
    destroy() {}
}