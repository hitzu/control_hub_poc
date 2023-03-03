# POC Control Hub

Prueba tecnica para CONTROL HUB usando nodejs

## Comenzando 🚀

Usando git en tu maquina local debes de clonar el proyecto y moverte a la rama dev.

```
git clone https://github.com/hitzu/control_hub_poc
```

### Pre-requisitos 📋

1. [NodeJs](https://nodejs.org/es/download/)

### Instalación 🔧

Usando el gestor de archivos [NPM](https://www.npmjs.com/) que viene incluido con nodejs y posicionando la consola en la raiz de proyecto vamos a installar todas las dependencias del proyecto usando el comando:

```
npm install
```

Esto nos generara la carpeta node_modules y el archivo package_lock.json

### Correr proyecto 🏃‍♂️

Usando los scripts que tenemos en el archivo packaje.json:


Y ahora levantaremos nuestro server usando nodemon para agilizar el desarrollo

```
npm run start
```

## Definicion de rutas 🍻

1. fibonacci: Permite obtener los datos de fibonacci

```
POST
/fibonacci/value
{
    "index" : 6
}
```

```
Response
{
    "value" : 8
}
```

## Documentacion 📖

Con el servidor levantado podras visitar la pagina localhost:400/api-docs/ para visualizar la documentación

## Ejecutando las pruebas ⚙️

```
npm run test
```

Se ejecutara el contenido dentro de la carpeta test.


## Construido con 🛠️

Las herramientas que utilizadas para este proyecto

- [NPM](https://www.npmjs.com/) Manejador de dependencias
- [Express](https://expressjs.com/) - framework que permite levantar un servidor rest
- [joi](https://www.npmjs.com/package/joi) - Validador de payload y response
- [supertest](https://www.npmjs.com/package/supertest) Se usa para lanzar peticiones y brinda herramientas para hacer test automaticos
  _[jest](https://www.npmjs.com/package/jest) Permite lanzar test mediante comandos npm

## Autores ✒️

- **Roberto Guillermo Torres Lopez** - _Trabajo Inicial_ - [github](https://github.com/hitzu)

## Licencia 📄

Este proyecto está bajo la Licencia (ISC)

## Expresiones de Gratitud 🎁

- Gracias por la oportunidad.
