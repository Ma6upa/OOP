class Airplane {
    constructor (values) {
        this.name = values.name
        this.maxSpeed = values.maxSpeed
        this.condition = 'ground'
    }

    takeoff() {
        this.state = 'midair'
    }

    landing() {
        this.state='ground'
    }

    conditionStatus() {
        console.log(this.condition)
    }   
}

class MIG extends Airplane {
    attack() {
        this.condition = 'attacking'
    }
}

const tu154 = new Airplane({
    name: 'ТУ-154',
    maxSpeed: 900
})

const mig = new MIG({
    name: 'МИГ',
    maxSpeed: 2500
})