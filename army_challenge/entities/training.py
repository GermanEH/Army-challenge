from typing import Protocol, TypeVar, Generic
from types import MappingProxyType
from ..types import Training_type, Unit_type, Unit, Training_benefit
from ..constants import training_benefits
T = TypeVar('T', bound=Unit_type)

# Strategy pattern.
# Permite ejecutar de forma intercambiable en tiempo de ejecución muchas clases similares que sólo se diferencian en la forma en la 
# que ejecutan cierto comportamiento. En este caso, muchas clases de entrenamiento que sólo cambian la propiedad que hacen alterar a
# la unidad. No crea instancias nuevas en tiempo de ejecución - ya están instanciadas las estrategias - sino que las ejecuta dinámica-
# mente.
# Fuente: apuntes propios y https://refactoring.guru/es/design-patterns/strategy
class training_strategy(Protocol):
    def strategy(self, unit: Unit[T], benefit: Training_benefit):
        ...

# Estrategias concretas
class strength_training:
    def strategy(unit: Unit[T], benefit: Training_benefit) -> None:
        unit.strengthen(benefit)

class transform_training:
    def strategy(unit: Unit[T], benefit: Training_benefit) -> None:
        nit.strengthen(benefit)

# Registry pattern (se explica en armiesRegistry)
TRAININGS = MappingProxyType({
    'strength': strength_training(),
    'type': transform_training(),
})

# Contexto de las estrategias
class Training:

    @staticmethod
    def start(trainingType:Training_type, unit:Unit[T]):
      
        benefit = training_benefits[trainingType][unit.get_type()]

        TRAININGS[trainingType].strategy(unit,benefit)
