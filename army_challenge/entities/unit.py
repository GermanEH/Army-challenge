from abc import ABC, abstractmethod
from ..types import Unit_type
from ..services import training_camp
from ..constants import strength_dict
from random import random

class Unit(ABC):

    def __init__(type:Unit_type, armyId:str):
        self.__id=str(random())
        self.__type=type
        self.__strength=strength_dict[type]
        self.__armyId=armyId
        self.__life_years=0

    def get_id():
        return self.__id

    def get_army_id():
        return self.__army_id
        
    def get_type():
        return self.__type

    def get_strength():
        return self.__strength

    def strengthen(strength:int):
        self.strength += strength

    def transform(type:Unit_type):
        self.__type=type

    def startStrengthTraining():
        return TrainingCamp.strengthenUnit(this)

    @abstractmethod
    def startTransformTraining() -> str:
        ...

    def getLifeYears() -> int:
        return self.lifeYears

# Herencia y polimorfismo.
class Pikeman:
    def __init__(self, army_id:str):
        super().__init__('pikeman', army_id)
    def startTransformTraining(self) -> str:
        return TrainingCamp.transform_unit(self)

class Archer:
    def __init__(self, army_id:str):
        super().__init__('archer', army_id)
    def startTransformTraining(self) -> str: 
        return TrainingCamp.transform_unit(self)

class Knight:
    def __init__(self, army_id:str):
        super().__init__('knight', army_id)
    
    def startTransformTraining(self) -> str:
        return "Knights cannot be transformed"
