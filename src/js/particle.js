import { ParticleEmitter, Color, EmitterType, Vector } from "excalibur"

export class Pop extends ParticleEmitter {
    constructor() {
        super({
        emitterType: 'circle',
        radius: 25,
        minVel: 100,
        maxVel: 300,
        minSize: 1,
        maxSize: 3,
        beginColor: Color.LightBlue,
        endColor: Color.Transparent,
        particleLife: 50,
        emitRate: 10,
        maxParticles: 30,
        fadeFlag: true
        })
    }
}