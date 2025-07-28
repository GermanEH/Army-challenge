from typing import TypedDict, Protocol, Optional, List
from .army import Army, Unit

class BattleResult(TypedDict):
    winner: Optional[Army]
    loser: Optional[Army]
    goldAwarded: Optional[int]
    unitsLost: Optional[List[Unit]]

class Battle(Protocol):
    id: str
    attacker: Optional[Army]
    defender: Optional[Army]
    battleResult: BattleResult