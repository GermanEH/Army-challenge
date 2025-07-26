import { trainingCosts, unitsMap } from '../constants/index';
import { Unit } from '../entities/unit';
import { ArmiesRegistry } from './armiesRegistry';
import { Training } from '../entities/training'
import type {
  IArmy,
  IUnitType,
  TrainingType,
  Civilization,
  IUnit
} from '../types/index';

export class TrainingCamp {

    static createUnits(civilizationType:Civilization, army:IArmy){
        const unitGroupQuantities = unitsMap[civilizationType]
        const {units,id} = army
        Object.entries(units).forEach(([unitGroup, _]) => {
        const unitType = unitGroup.slice(0, -1) as IUnitType;
        const quantity = unitGroupQuantities[unitGroup as keyof typeof unitGroupQuantities];
        
        (army.units as any)[unitGroup] = TrainingCamp.createUnitGroup(
            unitType, 
            quantity, 
            id
        );
    });
    }

    private static createUnitGroup<T extends IUnitType>(type:T, length:number, armyId:string):IUnit<T>[]{
        return Array.from({length}, () => new Unit(type, armyId));
    }

    static strengthenUnit<T extends IUnitType>(unit:IUnit<T>){
        TrainingService.executeTraining('strength', unit)
    }

    static transformUnit<T extends IUnitType>(unit:IUnit<T>){

        return TrainingService.executeTraining('type', unit)

    }

}

export class TrainingService {
    
    static executeTraining<T extends IUnitType>(trainingType:TrainingType,unit:IUnit<T>){
            const paymentResult = Quartermaster.processPayment(trainingType,unit)
            if(paymentResult==="Successfull payment") {
                Training.start(trainingType,unit)
                return `${trainingType} completed successfully` 
            }
            return paymentResult
    }

}

export class Quartermaster {

    private static getPrice(trainingType:TrainingType,trainingUnitType:IUnitType){
        return trainingCosts[trainingType][trainingUnitType]
    }

    static processPayment<T extends IUnitType>(trainingType:TrainingType,unit:IUnit<T>){
        const price:number = Quartermaster.getPrice(trainingType,unit.type) as number
        const army = ArmiesRegistry.getArmy(unit.armyId)
        if(army){
            const paymentResult = army.payUnitTraining(price)
            return paymentResult;
        }
        return "Hubo un problema al procesar el pago"
    }
    
}