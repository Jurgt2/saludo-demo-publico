function saludar(nombre = 'mundo') {
  return `¡Hola, ${nombre}! Este paquete se instaló desde un repo público.`;
}

module.exports = { saludar };
