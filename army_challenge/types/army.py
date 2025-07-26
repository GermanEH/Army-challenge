
from typing import TypedDict, Literal, List, Union, Optional, Protocol

Civilization = Literal['chinese', 'bizantine', 'english']
UnitType = Literal["pikeman", "archer", "knight"]

class Army(Protocol):
    id: str 
    units: Units 
    historyBattle: List[str]
    armyStrength: int 
    gold: int 
    def pay_unit_training(price:int) -> str
        ...

class Unit(Protocol):
    id:str
    type:IUnitType
    strength:int
    army_id:str
    life_years:int
    def strengthen()->None:
        ...
    def transform()->None:
        ...
    def getLifeYears()->None:
        ...

class UnitStrength(TypedDict):
    pikeman: int
    archer: int
    knight: int

class Units(TypedDict):
    pikemans: List[Unit]
    archers: List[Unit]
    knights: List[Unit]
