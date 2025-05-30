import { Actor, Vector } from "excalibur"
import { Resources } from './resources.js'

export class Fish extends Actor {
    constructor() {
        super({width: Resources.Fish.width, height: Resources.Fish.height}) //Just do it! 

        this.graphics.use(Resources.Fish.toSprite())
        this.pos = new Vector(Math.random() * 1920, Math.random() * 1080)
        this.vel = new Vector(Math.random() * -100 + -2, 0)
        let sc = Math.random() + 0.5
        this.scale = new Vector(sc, sc)
        this.events.on("exitviewport", (e) => this.fishLeft(e))

    }

    onPostKill(e) {
        const fish = new Fish()
        this.scene.add(fish)
    }

    fishLeft(e) {
        e.target.pos = new Vector(1920, Math.random() * 1080)
    }
}