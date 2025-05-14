import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, Label, Font, FontUnit, Color} from "excalibur"
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
        // this.showDebug(true)
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        console.log("start de game!")

        const bg = new Bg()
        this.add(bg)

        for (let i = 0; i < 100; i++) {
            const fish = new Fish()
            this.add(fish)
        }

        // const shark = new Shark()
        // this.add(shark)
        
        const octopus = new Octopus()
        this.add(octopus)

        this.score = 0

        this.scoreLabel = new Label({
            text: 'Score: 0',
            pos: new Vector(50, 25),
            font: new Font({
                family: 'Arial',
                size: 48,
                unit: FontUnit.Px,
                color: Color.Black
            })
        })
        this.add(this.scoreLabel)
        this.scoreLabel.text = `Score: 0`
    }

    addScore() {
        // console.log("+1")
        this.score++

        this.scoreLabel.text = `Score: ${this.score}`
    }

}

new Game()