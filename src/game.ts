import * as PIXI from 'pixi.js'
import { Dot } from './dot'

export class Game {

    // fields
    private _pixi
    private currentDot: Dot
    private pointsABC: Dot[] = []

    public get pixi(): PIXI.Application { return this._pixi }

    constructor() {
        // this._pixi = new PIXI.Application({ width: 1440, height: 900 })
        this._pixi = new PIXI.Application({ width: 600, height: 600, backgroundColor: 0x1099bb })
        document.body.appendChild(this._pixi.view)

        this.pointsABC.push(new Dot(this, 300, 50, 0x00FF00))
        this.pointsABC.push(new Dot(this, 50, 500, 0x00FF00))
        this.pointsABC.push(new Dot(this, 550, 500, 0x00FF00))

        // start Dot
        this.currentDot = new Dot(this, 300, 400)

        // for (let i = 0; i < 100; i++) {
        //     this.currentDot = this.nextDot()
        // }

        // start update loop
        // this.pixi.ticker.add((delta) => this.update())

        setInterval(() => {
            console.log("loop")
            this.currentDot = this.nextDot()
        }, 1)
    }

    private update() {

    }

    private nextDot(): Dot {
        let abcDot = this.pointsABC[Math.floor(Math.random() * 3)]
        let [x, y] = this.getMidpoint(abcDot)
        return new Dot(this, x, y)
    }

    private getMidpoint(abcDot: Dot): [number, number] {
        //(x1+x2,y1+y2)
        // -----,-----
        //   2     2

        let x = (abcDot.x + this.currentDot.x) / 2
        let y = (abcDot.y + this.currentDot.y) / 2

        return [x, y]
    }
}