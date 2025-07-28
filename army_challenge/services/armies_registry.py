from typing import Dict
from ..types import Army
# Registry pattern
# Con este registro podemos registrar por id a cada ejército y así poder recuperarlo para que le pague los entrenamientos a sus unidades,
# sin generar acoplamiento con la unidad que se va a entrenar
class ArmiesRegistry:

    __armies = Dict[str, Army]

    @staticmethod
    def registryArmy(army:Army) -> None:
        ArmiesRegistry.__armies[army.get_id()] = army

    @staticmethod
    def getArmy(army_id:str) -> Army:
        ArmiesRegistry.__armies.get(army_id)
        if army is None:
            raise f"Army with ID '{army_id}' not found"
        
        return army

