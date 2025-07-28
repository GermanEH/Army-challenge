import { Army } from './entities/army'

const army1 = new Army('chinese')
const army2 = new Army('bizantine')

console.log('Ejércitos creados')
console.log(army1.getArmyStrength())
console.log(army2.getArmyStrength())
console.log(army1.getGold())
console.log(army2.getGold())

console.log('Fuerza de unidad 1 de arqueros:', army1.getUnits()[0].getStrength())
console.log('Tipo de unidad 1 de lanzeros:', army1.getUnits()[0].getType())
army1.getUnits()[0].startStrengthTraining()
army1.getUnits()[0].startTransformTraining()
console.log('Fuerza de unidad 1 de arqueros tras el entrenamiento:', army1.getUnits()[0].getStrength())
console.log('Tipo de unidad 1 de lanzeros:', army1.getUnits())

army1.attack(army2)

console.log('Ejército chino ataca al ejército bizantino')
console.log(army1.getArmyStrength())
console.log(army2.getArmyStrength())
console.log(army1.getGold())
console.log(army2.getGold())
