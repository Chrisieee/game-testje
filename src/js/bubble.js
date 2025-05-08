import { Actor, Vector } from "excalibur"
import { Resources } from './resources.js'

export class Bubble extends Actor {
    constructor() {
        super() //Just do it! 

        this.graphics.use(Resources.Bubble.toSprite())
        this.pos = new Vector(Math.random() * 1920, 1080)
        this.vel = new Vector(0, Math.random() * -100 + -2)         
        let sc = Math.random() * 0.1 + 0.2
        this.scale = new Vector(sc, sc)
        this.events.on("exitviewport", (e) => this.bubbleTop(e))

    }
    
    bubbleTop(e) {
        e.target.pos = new Vector(Math.random() * 1920, 1080)
    }
}