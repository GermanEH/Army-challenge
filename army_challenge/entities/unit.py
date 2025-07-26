from types.index import IUnitType, UnitStrength
from services.trainingCamp import TrainingCamp
from constants.index import strength_map
from random import random

class Unit <T extends IUnitType>:

        id:str='0'
        type!:T
        strength: UnitStrength[T]
        armyId:str='0'
        lifeYears:int=0

        def __init__(type:T, armyId:str)
            self.id=str(random())
            self.type=type
            self.strength=strengthMap[type]
            self.armyId=armyId
        

        def strengthen()
            console.log(TrainingCamp)
            TrainingCamp.strengthenUnit(self)
        

        def transform()
            if(self.type !== 'knight')
                TrainingCamp.transformUnit(self)
            
        
        def getLifeYears()
            return self.lifeYears