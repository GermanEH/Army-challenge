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

class TrainingCamp:

    @staticmethod
    def createUnits(civilizationType:Civilization, army:IArmy)
        const unitGroupQuantities = unitsMap[civilizationType]
        const {units,id} = army
        Object.entries(units).forEach(([unitGroup, _]) =>
        const unitType = unitGroup.slice(0, -1) as IUnitType;
        const quantity = unitGroupQuantities[unitGroup as keyof typeof unitGroupQuantities];
        
        (army.units as any)[unitGroup] = TrainingCamp.createUnitGroup(
            unitType, 
            quantity, 
            id
        )
    )
    
    @staticmethod
    def __createUnitGroup<T extends IUnitType>(type:T, length:int, armyId:string):IUnit<T>[] -> List[IUnit]:
        return Array.from({length}, () => new Unit(type, armyId))

    @staticmethod
    def strengthenUnit<T extends IUnitType>(unit:IUnit<T>):
        TrainingService.executeTraining('strength', unit)
    
    @staticmethod
    def transformUnit<T extends IUnitType>(unit:IUnit<T>):

        return TrainingService.executeTraining('type', unit)

class TrainingService:
    
    @staticmethod 
    def executeTraining<T extends IUnitType>(trainingType:TrainingType,unit:IUnit<T>):
            const paymentResult = Quartermaster.processPayment(trainingType,unit)
            if(paymentResult==="Successfull payment") 
                Training.start(trainingType,unit)
                return f"${trainingType} completed successfully" 
            
            return paymentResult

class Quartermaster:

    @staticmethod
    def __getPrice(trainingType:TrainingType,trainingUnitType:IUnitType) -> int:
        return trainingCosts[trainingType][trainingUnitType]

    @staticmethod
    def processPayment<T extends IUnitType>(trainingType:TrainingType,unit:IUnit<T>) -> str:
        const price:int = Quartermaster.getPrice(trainingType,unit.type) as int
        const army = ArmiesRegistry.getArmy(unit.armyId)
        if(army)
            const paymentResult = army.payUnitTraining(price)
            return paymentResult
        
        return "Hubo un problema al procesar el pago"
