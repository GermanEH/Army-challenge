from types.index import Civilization, IArmy
from services.armiesRegistry import ArmiesRegistry
from services.armyStatistics import ArmyStatistics
from services.trainingCamp import TrainingCamp

class Castle:

    @staticmethod
    def create_army(civilizationType:Civilization, army: IArmy) -> str:
        ArmiesRegistry.registryArmy(army)
        TrainingCamp.createUnits(civilizationType,army)
        ArmyStatistics.setArmyStrength(army)
        return "Ejército creado exitosamente"