from .types import IArmy, IUnitType, IUnit

class ArmyStatistics:

    @staticmethod
    def set_army_strength(army:IArmy)
        army.armyStrength= self.getUnitsStrength(army.units.pikemans) +
            self.getUnitsStrength(army.units.archers) +
            self.getUnitsStrength(army.units.knights)

    @staticmethod
    def getUnitsStrength<T extends IUnitType> (unit:IUnit<T>[]): int
        return unit.reduce((acc:int, unit:IUnit<T>)=>
            return acc += unit.strength as int
        ,0)
