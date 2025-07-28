from ..constants import training_costs
from .armies_registry import ArmiesRegistry
from ..types import Army, Unit_type, Training_type, Civilization, Unit as IUnit
from typing import List

class TrainingCamp:

    @staticmethod
    def createUnits(civilizationType:Civilization, army:Army):
        unit_group_quantities = units_by_civilization[civilization_type]
        armyId = army.getId()
        units = army.getUnits()
        for unit_group, _ in units.items():
            unit_type = unit_group[:-1]  # elimina el último caracter (como slice(0, -1))
            quantity = unit_group_quantities[unit_group]

            new_unit_group = TrainingCamp.create_unit_group(
                unit_type,
                quantity,
                army_id
            )

        army.set_units(unit_type, new_unit_group)
    
    @staticmethod
    def __create_unit_group(unit_type: str, length: int, army_id: str) -> List[IUnit]:
        from ..entities import Unit
        return [Unit(unit_type, army_id) for _ in range(length)]

    @staticmethod
    def strengthen_unit(unit:IUnit[Unit_type]) -> None:
        TrainingService.execute_training('strength', unit)
    
    @staticmethod
    def transform_unit(unit:IUnit[Unit_type]) -> str:
        return TrainingService.execute_training('type', unit)

class TrainingService:
    
    @staticmethod 
    def executeTraining(trainingType:Training_type,unit:IUnit[Unit_type]):
            payment_result = Quartermaster.processPayment(training_type,unit)
            if(payment_result=="Successfull payment"):
                from ..entities import Training
                Training.start(training_type,unit)
                return f"${training_type} completed successfully" 
            
            return payment_result

class Quartermaster:

    @staticmethod
    def __getPrice(trainingType:Training_type,trainingUnit_type:Unit_type) -> int:
        return trainingCosts[trainingType][training_unit_type]

    @staticmethod
    def processPayment(trainingType:Training_type,unit:IUnit[Unit_type]) -> str:
        price:int = Quartermaster.getPrice(trainingType,unit.get_type())
        army = ArmiesRegistry.get_army(unit.get_army_id())
        if(army):
            payment_result = army.pay_unit_training(price)
            return payment_result
        
        return "Hubo un problema al procesar el pago"
