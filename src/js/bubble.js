import { Actor, Vector } from "excalibur"
import { Resources } from './resources.js'
import { Fish } from './fish.js'
import { Shark } from './shark.js'
import { Pop } from './particle.js'

export class Bubble extends Actor {
    constructor() {
        let sc = Math.random() * 0.1 + 0.2
        super({width: Resources.Bubble.width * sc, height: Resources.Bubble.height * sc}) //Just do it! 

        this.graphics.use(Resources.Bubble.toSprite())
        this.pos = new Vector(Math.random() * 1920, 1080)
        this.vel = new Vector(-50, Math.random() * -100 + -2)         
        this.scale = new Vector(sc, sc)
        this.enableCapturePointer = true
        
        this.events.on("exitviewport", (e) => this.bubbleDeath(e))
        this.events.on("pointerdown", (e) => {this.kill()})
        this.events.on("collisionstart", (e) => this.hitSomething(e))
    }
    
    bubbleDeath(e) {
        e.target.kill()
    }

    hitSomething(e) {
        if (e.other.owner instanceof Fish) {
            e.other.owner.kill()
            e.self.owner.kill()

            this.scene.engine.addScore()

            // const particle = new Pop()
            // particle.pos = e.self._transform._pos.clone()
            // this.scene.add(particle)
        }

        // if (e.other.owner instanceof Shark) {
        //     e.self.owner.kill()

        //     this.scene.engine.gameOver()

        //     // const particle = new Pop()
        //     // particle.pos = e.self._transform._pos.clone()
        //     // this.scene.add(particle)
        // }
    }
}