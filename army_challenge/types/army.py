
from typing import TypedDict, Literal, List, Union, Optional, Protocol
from typing import Protocol, TypeVar, Generic

Civilization = Literal['chinese', 'bizantine', 'english']
Unit_type = Literal["pikeman", "archer", "knight"]
T = TypeVar("T", bound=Unit_type)

class Unit(Protocol, Generic[T]):
    def getId(self) -> str:
        ...

    def getStrength(self) -> int:
        ...

    def strengthen(self, benefit: int) -> None:
        ...

    def getArmyId(self) -> str:
        ...

    def getType(self) -> Unit_type:
        ...

    def transform(self, new_type: Unit_type) -> None:
        ...

    def startStrengthTraining(self) -> None:
        ...

    def startTransformTraining(self) -> None:
        ...

    def getLifeYears(self) -> int:
        ...


class UnitStrength(TypedDict):
    pikeman: int
    archer: int
    knight: int

class Units(TypedDict):
    pikemans: List[Unit]
    archers: List[Unit]
    knights: List[Unit]
class Army(Protocol):
    def getId(self) -> str:
        ...

    def getUnits(self) -> Units:
        ...

    def setUnits(self, Unit_type: Unit_type, units: List[Unit]) -> None:
        ...

    def payUnitTraining(self, price: int) -> str:
        ...

    def getArmyStrength(self) -> int:
        ...

    def setArmyStrength(self, strength: int) -> None:
        ...

    def getUnitsStrength(self, units: List[Unit]) -> int:
        ...

    def earnGold(self, gold: int) -> None:
        ...

    def hasGold(self) -> bool:
        ...

    def getGold(self) -> int:
        ...

    def loseUnits(self) -> List[Union[Unit]]:
        ...

    def addBattle(self, battleId: str) -> None:
        ...

    def hadBattle(self, battleId: str) -> bool:
        ...
