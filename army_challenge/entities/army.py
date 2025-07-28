from ..services import Castle 
from ..types import Civilization, Units, Battle as IBattle, Unit, Unit_type, Army as IArmy
from typing import List
from random import random
class Army:

    def __init__(self, civilizationType:Civilization):
        self.__id=str(random())
        self.__army_strength = 0
        self.__gold = 1000
        self.__units = List[Units]
        Castle.create_army(civilizationType, self)

    def get_id(self):
        return self.__id

    def get_units(self):
        return self.__units

    def set_units(Unit_type:Unit_type, units:List[Unit[Unit_type]], self):
        self._units[f'{Unit_type}s'] = units

    def attack(enemy:IArmy):
        from . import Battle
        return Battle(self,enemy)

    def pay_unit_training(amount:int) -> str:
        if(self.gold >= amount):
            self.gold-=amount
            return "Successfull payment"
        else:
            return f"Not enough money. It cost $ ${amount} and the army has $ ${self.gold}"
    
    def set_army_strength(self):
        self.__army_strength = (self.get_units_strength(self.__units_pikemans) + 
        self.get_units_strength(self.__units_archers) + 
        self.get_units_strength(self.__units_knights))

    def get_army_strength(self):
        return self.__army_strength

    def get_units_strength(unit:List[Unit[Unit_type]]) -> int:
        return sum(unit.get_strength() for unit in units)

    def loseUnits():
        all_units = self.__units['pikemans'] + self.__units['archers'] + self.__units['knights']

        sorted_units = sorted(all_units, key=lambda unit:unit.get_strength())
        units_lost = sorted_units[:2]

        units_losts_ids = [unit.get_id() for unit in units_lost]

        def filter_units_by_lost(units):
            return [unit for unit in units if unit.get_id() not in units_lost_ids]

        self.__units['pikemans'] = filter_units_by_lost(self.units['pikemans'])
        self.__units['archers'] = filter_units_by_lost(self.units['archers'])
        self.__units['knights'] = filter_units_by_lost(self.units['knights'])

        return units_lost
    
    def earn_gold(gold:int):
        self.__gold += gold 

    def get_gold(self):
        return self.__gold 
    
    def has_gold(self):
        return self.__gold > 0
    
    def add_battle(self, battle_id:str):
        self.__history_battle.append()
    
    def had_battle(self, battle_id:str) -> bool:
        return battle_id in self.__history_battle
