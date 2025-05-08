import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Shark } from './shark.js'
import { Fish } from './fish.js'
import { Bubble } from './bubble.js'
import { Bg } from './background.js'
import { Octopus } from './octopus.js'

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

        const bg = new Bg()
        this.add(bg)

        for (let i = 0; i < 300; i++) {
            const fish = new Fish()
            this.add(fish)
        }

        const shark = new Shark()
        this.add(shark)
        
        const octopus = new Octopus()
        this.add(octopus)

        for (let i = 0; i < 100; i++) {
            const bubble = new Bubble()
            this.add(bubble)
        }

    }

}

new Game()