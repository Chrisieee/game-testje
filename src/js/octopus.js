import { Actor, Vector } from "excalibur"
import { Resources } from './resources.js'
import { Bubble } from './bubble.js'

export class Octopus extends Actor {
    
    constructor() {
        super() //Just do it! 

        this.graphics.use(Resources.Octopus.toSprite())
        this.pos = new Vector(1920, 1030)
        this.vel = new Vector(-200, 0)
        this.scale = new Vector(0.5, 0.5)
        this.events.on("exitviewport", (e) => this.octopusLeft(e))
        // this.events.on("pre-update tick", (e) => this.createBubbles(e))
    }

    octopusLeft(e) {
        e.target.pos = new Vector(1920, 1030)
    }

    // createBubbles(e) {
    //     const scene = this.scene
    //     const pos = this.pos.clone()

    //     const bubble = new Bubble()
    //     bubble.pos = new Vector(pos)
    //     scene.add(bubble)
    // }
}