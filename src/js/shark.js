import { Actor, Vector, Keys} from "excalibur"
import { Resources } from './resources.js'

export class Shark extends Actor {
    constructor() {
        super({width: Resources.Shark.width - 50, height: Resources.Shark.height - 300}) //Just do it! 

        this.graphics.use(Resources.Shark.toSprite())
        this.pos = new Vector(0, Math.random() * 1080)
        this.vel = new Vector(50, 0)
        this.events.on("exitviewport", (e) => this.sharkRight(e))
    }

    sharkRight(e) {
        e.target.pos = new Vector(0, Math.random() * 1080)
    }
}