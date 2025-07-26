from .types.index import TrainingType, IUnitType, IUnit
from .constants.index import trainingBenefits,trainingMap

class Training:

    @staticmethod
    def start(trainingType:TrainingType, unit:IUnit<IUnitType>)
      
        benefit = trainingBenefits[trainingType][unit.type]

        trainingMap[trainingType](unit,benefit)
