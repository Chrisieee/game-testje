import { Actor, Vector, Timer, Keys } from "excalibur"
import { Resources } from './resources.js'
import { Bubble } from './bubble.js'
import { Shark } from './shark.js'

export class Octopus extends Actor {
    
    constructor() {
        super({width: Resources.Octopus.width * 0.5, height: Resources.Octopus.height * 0.5}) //Just do it! 

        this.score = 0
        this.graphics.use(Resources.Octopus.toSprite())
        this.pos = new Vector(1920, 1030)
        this.vel = new Vector(-200, 0)
        this.scale = new Vector(0.5, 0.5)

        this.events.on("exitviewport", (e) => this.octopusLeft(e))
        // this.events.on("collisionstart", (e) => this.hitSomething(e))
    }

    // onInitialize(engine) {
    //     const bubbleSpawner = new Timer({
    //         fcn: (e) => this.createBubbles(e),
    //         interval: 750,
    //         repeats: true
    //     })
        
    //     this.scene.addTimer(bubbleSpawner)
    //     bubbleSpawner.start()
    //     //this.on("preupdate", (e) => this.createBubbles(e))
    // }

    onPostUpdate(engine) {
        let xspeed = 0
        
        if (engine.input.keyboard.isHeld(Keys.Left)) {
            xspeed = -300
        }
        
        if (engine.input.keyboard.isHeld(Keys.Right)) {
            xspeed = 300
        }

        if (engine.input.keyboard.wasPressed(Keys.Space)) {
            this.createBubbles()
        }
        
        this.vel = new Vector(xspeed, 0)
    }

    // hitSomething(e) {
    //     if (e.other.owner instanceof Shark) {
    //         e.self.owner.kill()
    //     }
    // }

    // onPostKill() {
    //     const octopus = new Octopus()
    //     this.add(octopus)
    // }

    octopusLeft(e) {
        if (e.target.pos._x > 1920) {
            e.target.pos = new Vector(0, 1030)
        }
        if (e.target.pos._x < 0) {
            e.target.pos = new Vector(1920, 1030)
        }
    }

    createBubbles(e) {
        const bubble = new Bubble()
        bubble.pos = this.pos.clone()
        this.scene.add(bubble)
    }
}