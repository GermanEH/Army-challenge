from .type import IBattle,IBattleResult,IUnitType,Units,IUnit
from .armyStatistics import armyStatistics

class BattleField:

    @staticmethod
    def determine_winner(battle:IBattle)
        {attacker, defender, battleResult} = battle
        if(attacker && defender) 
            if(attacker.armyStrength > defender.armyStrength) 
                battleResult.winner = attacker 
                battleResult.loser = defender
            else 
                battleResult.winner = defender
                battleResult.loser = attacker

    @staticmethod
    def __add_gold(battleResult:IBattleResult)

        if(battleResult.winner)

            battleResult.winner.gold += 100
            battleResult.goldAwarded = 100

    @staticmethod
    def __remove_units(units:Units, unitsLost:IUnit<IUnitType>[] | null)

             sortedUnits = [...units.pikemans, ...units.archers, ...units.knights].sort((a,b) => a.strength as int - b.strength!)
            unitsLost = sortedUnits.slice(0,2)

             unitsLostIds = unitsLost.map(unit=>unit.id)

            function filterUnitsByLost<T extends IUnit<IUnitType>>(arr: T[]): T[] 
                return arr.filter(unit => !unitsLostIds.includes(unit.id))
            

            units.pikemans = filterUnitsByLost(units.pikemans)
            units.archers = filterUnitsByLost(units.archers)
            units.knights = filterUnitsByLost(units.knights)

            return unitsLost

    @staticmethod
    def process_result(battleResult:IBattleResult)
        if(battleResult.winner && battleResult.loser)
            BattleField.addGold(battleResult)
            BattleField.removeUnits(battleResult.loser.units,battleResult.unitsLost)
            ArmyStatistics.setArmyStrength(battleResult.loser)
