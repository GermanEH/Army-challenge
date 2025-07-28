from .entities import Army

army1 = Army('chinese')
army2 = Army('bizantine')

print('Ejércitos creados')
print(army1.get_army_strength())
print(army2.get_army_strength())
print(army1.get_gold())
print(army2.get_gold())

print('Fuerza de unidad 1 de arqueros:', army1.get_units().archers[0].getStrength())
print('Tipo de unidad 1 de lanzeros:', army1.get_units().pikemans[0].getType())

army1.get_units().archers[0].startStrengthTraining()
army1.get_units().pikemans[0].startTransformTraining()

print('Fuerza de unidad 1 de arqueros tras el entrenamiento:', army1.get_units().archers[0].getStrength())
print('Tipo de unidad 1 de lanzeros:', army1.get_units().pikemans[0].getType())

army1.attack(army2)

print('Ejércitos creados')
print(army1.get_army_strength())
print(army2.get_army_strength())
print(army1.get_gold())
print(army2.get_gold())