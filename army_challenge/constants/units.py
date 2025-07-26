from .type import IUnitType
from typing import TypedDict, Literal, Dict, Callable, Union, List

strength_dict:UnitStrength: Dict[str, int] = {
    "pikeman":5,
    "archer":10,
    "knight":20,
}

unitGroup: IUnitType[] = ["pikeman", "archer", "knight"]

units_dict: Dict[str, Dict[str, int]] = {
    "chinese": {"pikemans": 2, "archers": 25, "knights": 2},
    "bizantine": {"pikemans": 10, "archers": 10, "knights": 10},
    "english": {"pikemans": 2, "archers": 10, "knights": 15},
}