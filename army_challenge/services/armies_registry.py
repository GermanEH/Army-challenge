from .types import IArmy
# Registry pattern
# Con este registro podemos registrar por id a cada ejército y así poder recuperarlo para que le pague los entrenamientos a sus unidades,
# sin generar acoplamiento con la unidad que se va a entrenar
class ArmiesRegistry:

    @staticmethod
    def __armies = Dict[str, IArmy] = {}

    @staticmethod
    def registryArmy(army:IArmy)
        army.id=str(random())
        ArmiesRegistry.__armies[army.id] = army

    @staticmethod
    def getArmy(armyId:string)
        return ArmiesRegistry.__armies.get(army.id)

