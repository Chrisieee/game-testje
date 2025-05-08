import { Actor, Vector } from "excalibur"
import { Resources } from './resources.js'

export class Bg extends Actor {
    constructor() {
        super() //Just do it! 

        this.graphics.use(Resources.Background.toSprite())
        this.scale = new Vector(3.6, 3.6)
        this.pos = new Vector(960, 540)
    }
}