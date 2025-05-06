import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Game extends Engine {

    constructor() {
        super({ 
            width: 1920,
            height: 1080,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen
         })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        console.log("start de game!")

        for (let i = 0; i < 200; i++) {
            const fish = new Actor()
            fish.graphics.use(Resources.Fish.toSprite())
            fish.pos = new Vector(Math.random() * 1920, Math.random() * 1080)
            fish.vel = new Vector(Math.random() * -100 + -2, 0)
            let sc = Math.random() + 0.5
            fish.scale = new Vector(sc, sc)
            fish.events.on("exitviewport", (e) => this.fishLeft(e))
            this.add(fish)
        }

        const shark = new Actor()
        shark.graphics.use(Resources.Shark.toSprite())
        shark.pos = new Vector(0, Math.random() * 1080)
        shark.vel = new Vector(50, 0)
        shark.events.on("exitviewport", (e) => this.sharkRight(e))
        this.add(shark)

        for (let i = 0; i < 100; i++) {
            const bubble = new Actor()
            bubble.graphics.use(Resources.Bubble.toSprite())
            bubble.pos = new Vector(Math.random() * 1920, 1080)
            bubble.vel = new Vector(0, Math.random() * -100 + -2)         
            let sc = Math.random() * 0.1 + 0.2
            bubble.scale = new Vector(sc, sc)
            bubble.events.on("exitviewport", (e) => this.bubbleTop(e))
            this.add(bubble)
        }

    }

    fishLeft(e) {
        e.target.pos = new Vector(Math.random() * 1920, Math.random() * 1080)
    }

    sharkRight(e) {
        e.target.pos = new Vector(0, Math.random() * 1080)
    }

    bubbleTop(e) {
        e.target.pos = new Vector(Math.random() * 1920, 1080)
    }
}

new Game()
