from typing import List
from ..types import Battle, BattleResult, Unit_type, Units, Unit, Army

class BattleField:

    __winner:Army
    __loser:Army

    @staticmethod
    def determine_winner(battle:Battle) -> None:
        attacker = battle.attacker
        defender = battle.defender
        battle_result = battle.battleResult 
        if(attacker and defender):
            attacker_strength = attacker.get_army_strength()
            defender_strength = defender.get_army_strength()
            if(attacker_strength > defender_strength):
                self.__winner = attacker
                self.__loser = defender
                battleResult.winner = attacker 
                battleResult.loser = defender
            else:
                self.__winner = defender
                self.__loser = attacker
                battleResult.winner = defender
                battleResult.loser = attacker

    @staticmethod
    def __add_gold(battle_result:BattleResult) -> None:

        if(battle_result.winner):
            self.__winner.earn_gold(100)
            battle_result.winner.earn_gold(100)
            battle_result.gold_awarded = 100

    @staticmethod
    def __remove_units(units:Units, unitsLost:List[Unit[Unit_type]] | None) -> None:

            battleResult.units_lost = self.loser.lose_units()
            battleResult.loser.lose_units()

    @staticmethod
    def process_result(battleResult:BattleResult) -> None:
        if(battleResult.winner and battleResult.loser):
            BattleField.addGold(battleResult)
            BattleField.removeUnits(BattleResult)
            battle_result_loser.set_army_strength()
