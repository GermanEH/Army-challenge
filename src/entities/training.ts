import type {
  TrainingType,
  UnitType,
  Unit,
  TrainingBenefit,
} from '../types/index';
import { trainingBenefits } from '../constants/index'

//Strategy pattern.
// Permite ejecutar de forma intercambiable en tiempo de ejecución muchas clases similares que sólo se diferencian en la forma en la 
// que ejecutan cierto comportamiento. En este caso, muchas clases de entrenamiento que sólo cambian la propiedad que hacen alterar a
// la unidad. No crea instancias nuevas en tiempo de ejecución - ya están instanciadas las estrategias - sino que las ejecuta dinámica-
// mente.
// Fuente: apuntes propios y https://refactoring.guru/es/design-patterns/strategy
interface trainingStrategy {
  strategy:<T extends UnitType>(unit: Unit<T>, benefit: TrainingBenefit) => void
}

//Estrategias concretas
class StrengthTraining implements trainingStrategy {
  strategy =  <T extends UnitType>(unit: Unit<T>, benefit: TrainingBenefit) => unit.strengthen(benefit as number)
}
class TransformationTraining implements trainingStrategy {
  strategy =  <T extends UnitType>(unit: Unit<T>, benefit: TrainingBenefit) => unit.transform(benefit as UnitType)
}

//Registry pattern (se explica en armiesRegistry)
const Trainings = Object.freeze({
    strength: new StrengthTraining(),
    type: new TransformationTraining()
} as const);

//Contexto de las estrategias
export class Training {

    static start<T extends UnitType>(trainingType:TrainingType, unit:Unit<T>){
      
        const benefit = trainingBenefits[trainingType][unit.getType()]

        Trainings[trainingType].strategy(unit,benefit)

      }

}

// Para mayor simplicidad y reducción de código se puede almacenar las estrategias en el objeto "trainings", pero dejaría de ser patrón
// strategy y no se podrían utilizar las clases de estrategias en otros lugares de la aplicación, además de que se dificulta el testeo:
//     private static readonly trainings = Object.freeze({
//         strength: <T extends UnitType>(unit: Unit<T>, benefit: TrainingBenefit) => unit.strengthen(benefit as number),
//        type: <T extends UnitType>(unit: Unit<T>, benefit: TrainingBenefit) => unit.strengthen(benefit as number)
//     } as const);