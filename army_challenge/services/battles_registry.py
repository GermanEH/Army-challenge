from ..types import Army, Battle 
from ..services import ArmiesRegistry
from typing import Dict, Optional, List
from random import random
#Registry pattern
# Con este registro podemos vincular cada instancia de batalla a los historiales de sus participantes y así poder recuperarla para su 
# consulta, sin generar acoplamiento de los detalles de cada batalla con la clase Army. Además, se centraliza la gestión de la 
# información relativa a las batallas, y se protege su acceso sólo a los Armys cuyos historiales incluyan el battleId en esta línea:
# if(battleId in army.history_battle)
class BattleRegistry:

    __battles: Dict[str,str] = {}

    @staticmethod
    def registry_battle(battle: Battle, contendersIds: List[str]):
        contenders : List[Army] = [ArmiesRegistry.get_army(contender_id) for contender_id in contendersIds]
        battle.id=str(random())
        for contender in contenders:
            contender.historyBattle.append(battle.id)
            self.battles[battle.id] = contender.getId()

    @staticmethod
    def get_battle(battle_id:str, army_id:str):
        army = ArmiesRegistry.getArmy(army_id)
        if(battle_id in army.historyBattle):
            return this.battles.get(battle_id)
