from .types import IArmy,IBattleResult
from .services.battleField import BattleField
from services.battlesRegistry import BattleRegistry

# Es necesario persistir estado interno de la batalla para ser consultados en el historial de batalla de cada ejército.
# Por eso lo creamos como una clase a ser instanciada en vez de una clase con métodos static.
class Battle:

    def __init__(attacker:IArmy, defender:IArmy)
        
        self.id: str = ''
        self.attacker = attacker
        self.defender = defender
        self.battle_result: dict[str, Optional[str]] = {
            "winner": None,
            "loser": None,
            "goldAwarded": None,
            "unitsLost": None,
        }
        
        BattleField.determineWinner(self)
        BattleField.processResult(self.battleResult)
        BattleRegistry.registryBattle(self,[attacker.id,defender.id])
