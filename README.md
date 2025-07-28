# Army-challenge

Solución a desafío técnico para el puesto de Developer Jr. en Amalgama.

## Cómo correr el proyecto

npm start

## Principios aplicados
El modelado se basó en los siguientes conceptos de diseño y arquitectura:

✅ Encapsulamiento

✅ Polimorfismo por delegación

✅ State Pattern

✅ Strategy Pattern

✅ Registry Pattern

## Funcionalidades principales:

1. #### Creación de ejércitos
Puedes crear ejércitos según tres tipos de civilización:

- Chinos

- Bizantinos

- Ingleses

Cada civilización tiene su propia configuración inicial de unidades (tipos y cantidades).

2. #### Entrenamiento de unidades
Las unidades pueden ser entrenadas para aumentar su fuerza en el TrainingCamp.

3. #### Transformación de unidades
Las unidades pueden evolucionar o cambiar de tipo, excepto los caballeros.

4. #### Sistema de batallas
Un ejército puede atacar a otro. Estas batallas se registran en el historial de cada uno y en un historial centralizado, y afectan a los ejércitos involucrados.

5. #### Historial de batallas
Se puede consultar el historial de batallas de cada ejército gracias a un registro centralizado.

## Tipos de unidades
Las unidades pueden ser:

a. Lanceros

b. Piqueros

c. Caballeros

Comparten los mismos atributos (aunque con distintos valores según cada tipo de unidad) y los mismos métodos excepto el caballero, que no puede transformarse.

## Servicios principales

* **Castle**: se encarga de crear ejércitos y sus unidades.

* **TrainingCamp**: permite entrenar a las unidades para aumentar su fuerza.

* **Quartermaster**: gestiona el pago por entrenamiento de unidades.

* **BattleField**: administra las batallas entre ejércitos.

* **BattleRegistry**: centraliza el historial de todas las batallas. Los coordina con los historiales de cada ejército.