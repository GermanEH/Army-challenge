import { Army } from './entities/army'

const army1 = new Army('chinese')
const army2 = new Army('bizantine')

console.log('--------------------------')
console.log('Ejércitos creados')
console.log('Estadísticas iniciales de cada ejército creado:')
console.log('Fuerza del ejército chino:',army1.getArmyStrength())
console.log('Fuerza del ejército bizantino:', army2.getArmyStrength())
console.log('Oro del ejército chino:', army1.getGold())
console.log('Oro del ejército bizantino:', army2.getGold())
console.log('--------------------------')
console.log('--------------------------')
console.log('Primeras unidades del ejército chino:')
army1.getUnits().slice(0, 3).forEach((unit, i) => {
  console.log(
    `Unidad ${i}: tipo=${unit.getType()}, fuerza=${unit.getStrength()}, ID=${unit.getId()}`
  )
})
console.log('Entrenando todas las unidades del ejército chino')
army1.getUnits().forEach((unit) => unit.startStrengthTraining())

console.log('Transformando unidades transformables del ejército chino')
army1.getUnits().forEach((unit) => {
    unit.startTransformTraining()
})

console.log('Estado después de entrenamiento y transformación:')
army1.getUnits().slice(0, 3).forEach((unit, i) => {
  console.log(
    `Unidad ${i}: tipo=${unit.getType()}, fuerza=${unit.getStrength()}, ID=${unit.getId()}`
  )
})
console.log('--------------------------')
console.log('--------------------------')
console.log('Fuerza del ejército chino:',army1.getArmyStrength())
console.log('Fuerza del ejército bizantino:', army2.getArmyStrength())
console.log('Oro del ejército chino:', army1.getGold())
console.log('Oro del ejército bizantino:', army2.getGold())
console.log('--------------------------')
console.log('--------------------------')

console.log('Ataque: ejército chino a ejército bizantino')

army1.attack(army2)

console.log('Resultados de la contienda')
console.log('Fuerza del ejército chino:',army1.getArmyStrength())
console.log('Fuerza del ejército bizantino:', army2.getArmyStrength())
console.log('Oro del ejército chino:', army1.getGold())
console.log('Oro del ejército bizantino:', army2.getGold())
