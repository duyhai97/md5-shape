import {Shape} from "./shape";

export class Rectangle extends Shape implements IArea{



    constructor(x: number, y: number, private _width: number,private _height: number) {
        super(x, y);

    }


    get width(): number {
        return this._width;
    }

    set width(value: number) {
        this._width = value;
    }

    get height(): number {
        return this._height;
    }

    set height(value: number) {
        this._height = value;
    }

    area(): number {
        return this._width*this._height;
    }


    toString(): string {
        return super.toString() + `(width: ${this.width}, height: ${this.height})`;
    }

    crx(): number {
        return (this.width + this._height);
    }


}