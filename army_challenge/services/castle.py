from ..types import Civilization, Army
from ..services import ArmiesRegistry, training_camp

class Castle:

    @staticmethod
    def create_army(civilizationType:Civilization, army: Army) -> str:
        try:
            ArmiesRegistry.registryArmy(army)
            TrainingCamp.createUnits(civilizationType,army)
            army.set_army_strength(army)
            return "Ejército creado exitosamente"
        except Exception as error:
            return f"Error creating army: {error}"
