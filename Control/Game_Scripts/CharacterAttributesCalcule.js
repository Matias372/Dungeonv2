// Función para calcular los atributos del personaje
function calcularAtributosPersonaje(personaje) {
    // Calcular los atributos basados en las estadísticas básicas y bonificaciones
    const fuerzaTotal = calcularFuerzaTotal(personaje);
    const resistenciaTotal = calcularResistenciaTotal(personaje);
    const destrezaTotal = calcularDestrezaTotal(personaje);
    const magiaTotal = calcularMagiaTotal(personaje);

    // Calcular otros atributos derivados
    const HPMaximo = calcularHPMaximo(personaje, fuerzaTotal, resistenciaTotal);
    const MPMaximo = calcularMPMaximo(personaje, magiaTotal);
    const ataqueFisico = calcularAtaqueFisico(personaje, fuerzaTotal, destrezaTotal);
    const ataqueMagico = calcularAtaqueMagico(personaje, magiaTotal, destrezaTotal);
    const defensaFisica = calcularDefensaFisica(personaje, fuerzaTotal, resistenciaTotal);
    const defensaMagica = calcularDefensaMagica(personaje, magiaTotal, resistenciaTotal);
    const hitRate = calcularHitRate(personaje, destrezaTotal);
    const velocidadAtaque = calcularVelocidadAtaque(personaje, destrezaTotal);
    const critChance = calcularCritChance(personaje, destrezaTotal);

    // Devolver los atributos calculados
    return {
        fuerzaTotal,
        resistenciaTotal,
        destrezaTotal,
        magiaTotal,
        HPMaximo,
        MPMaximo,
        ataqueFisico,
        ataqueMagico,
        defensaFisica,
        defensaMagica,
        hitRate,
        velocidadAtaque,
        critChance
    };
}

// Función para calcular la fuerza total del personaje
function calcularFuerzaTotal(personaje) {
    return personaje.fuerzaBasic + personaje.fuerzaBonif + personaje.fuerzaEquip;
}

// Función para calcular la resistencia total del personaje
function calcularResistenciaTotal(personaje) {
    return personaje.resistenciaBasic + personaje.resistenciaBonif + personaje.resistenciaEquip;
}

// Función para calcular la destreza total del personaje
function calcularDestrezaTotal(personaje) {
    return personaje.destrezaBasic + personaje.destrezaBonif + personaje.destrezaEquip;
}

// Función para calcular la magia total del personaje
function calcularMagiaTotal(personaje) {
    return personaje.magiaBasic + personaje.magiaBonif + personaje.magiaEquip;
}

// Más funciones de cálculo de atributos aquí...

// Ejemplo de uso:
const personaje = {
    fuerzaBasic: 12,
    resistenciaBasic: 15,
    destrezaBasic: 10,
    magiaBasic: 5,
    fuerzaBonif: 3,
    resistenciaBonif: 2,
    destrezaBonif: 1,
    magiaBonif: 0,
    fuerzaEquip: 5,
    resistenciaEquip: 3,
    destrezaEquip: 2,
    magiaEquip: 0
};

const atributosCalculados = calcularAtributosPersonaje(personaje);
console.log(atributosCalculados);
