import { Game } from "./game";
import * as PIXI from 'pixi.js'

export class Dot {
    private readonly radius: number = 3


    private game: Game;
    private sprite: PIXI.Sprite
    private _x: number
    private _y: number
    private color: number

    public get x(): number { return this._x }
    public get y(): number { return this._y }

    constructor(game: Game, x: number, y: number, color: number = 0xFF3300) {
        this.game = game
        this._x = x
        this._y = y
        this.color = color

        this.drawDot()
    }

    private drawDot(): void {
        let graphic = new PIXI.Graphics()

        graphic.beginFill(this.color)
        // graphic.lineStyle(4, 0xffd900, 1)

        graphic.drawCircle(0, 0, this.radius)

        graphic.endFill()

        let texture = this.game.pixi.renderer.generateTexture(graphic)

        this.sprite = new PIXI.Sprite(texture)
        this.game.pixi.stage.addChild(this.sprite)

        this.sprite.anchor.set(0.5, 0.5)
        this.sprite.x = this._x
        this.sprite.y = this._y
    }
}