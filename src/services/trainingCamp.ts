import { createUnitMap, trainingCosts, unitsByCivilization } from '../constants/index';
import { ArmiesRegistry } from './armiesRegistry';
import { Training } from '../entities/training'
import type {
  Army,
  UnitType,
  TrainingType,
  Civilization,
  Unit as IUnit
} from '../types/index';

export class TrainingCamp {

    static createUnits(civilizationType:Civilization, army:Army){
        const unitGroupQuantities = unitsByCivilization[civilizationType]
        const armyId = army.getId()
        const units = army.getUnits()
        Object.entries(units).forEach(([unitGroup, _]) => {
        const unitType = unitGroup.slice(0, -1) as UnitType;
        const quantity = unitGroupQuantities[unitGroup as keyof typeof unitGroupQuantities];
        
        const newUnitGroup = TrainingCamp.createUnitGroup(
            unitType, 
            quantity, 
            armyId
        );

        army.setUnits(unitType,newUnitGroup)
    });
    }

    private static createUnitGroup<T extends UnitType>(type:T, length:number, armyId:string):IUnit<T>[]{
        return Array.from({length}, () => createUnitMap[type](armyId));
    }

    static strengthenUnit<T extends UnitType>(unit:IUnit<T>){
        return TrainingService.executeTraining('strength', unit)
    }

    // State pattern. 
    // Se crea un estado interno "type" modificable, de forma tal que se pueda transformar la unidad del ejército sin
    // romper su integridad referencial. La unidad sigue existiendo, pero cambia su comportamiento en reacción al cambio de
    // su estado interno. En su definición:
    // "State is a behavioral design pattern that lets an object alter its behavior when its internal state changes. It appears as if the object changed its class."
    // Fuente: https://refactoring.guru/design-patterns/state
    // Otra opción sería crear una nueva instancia de la clase Unit, con el tipo de unidad a transformar, y delegar en Army el reemplazo
    // de la antigüa unidad por la nueva. Pero eso rompería el encapsulamiento.
    static transformUnit<T extends UnitType>(unit:IUnit<T>){

        return TrainingService.executeTraining('type', unit)

    }

}

export class TrainingService {
    
    static executeTraining<T extends UnitType>(trainingType:TrainingType,unit:IUnit<T>){
            const paymentResult = Quartermaster.processPayment(trainingType,unit)
            if(paymentResult==="Successfull payment") {
                Training.start(trainingType,unit)
                return `Unit ${unit.getId()} of type ${unit.getType()} successfully trained.` 
            }
            return paymentResult
    }

}

export class Quartermaster {

    private static getPrice(trainingType:TrainingType,trainingUnitType:UnitType){
        return trainingCosts[trainingType][trainingUnitType]
    }

    static processPayment<T extends UnitType>(trainingType:TrainingType,unit:IUnit<T>){
        const price:number = Quartermaster.getPrice(trainingType,unit.getType()) as number
        const army = ArmiesRegistry.getArmy(unit.getArmyId())
        if(army && army.hasGold()){
            const paymentResult = army.payUnitTraining(price)
            return paymentResult;
        }
        return "There was a problem processing the payment"
    }
    
}