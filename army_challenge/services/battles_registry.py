from .types import IArmy, IBattle 
from .services.armiesRegistry import ArmiesRegistry
from typing import Dict, Optional
from random import random
# Registry pattern
# Con este registro podemos vincular cada instancia de batalla a los historiales de sus participantes y así poder recuperarla para su 
#  consulta, sin generar acoplamiento de los detalles de cada batalla con la clase Army.
class BattleRegistry:

    __battles: Dict[string,string] = {}

    @staticmethod
    def registry_battle(battle: IBattle, contendersIds: List[str])
        contenders : List[Army] = contendersIds.map((contenderId:string) => ArmiesRegistry.getArmy(contenderId)) 
        battle.id=str(random())
        contenders.map((contender:IArmy)=> 
            contender?.historyBattle.push(battle.id)
            this.battles.set(battle.id, contender.id)
        )
        
    @staticmethod
    def get_battle(battleId:string, armyId:string)
        army = ArmiesRegistry.getArmy(armyId)
        if(army?.historyBattle.includes(battleId))
            return this.battles.get(battleId)
