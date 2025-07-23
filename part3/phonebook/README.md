# Phonebook API

En este ejercicio, implementamos una aplicación de agenda telefónica fullstack con un backend escrito en Node.js y un frontend en React.js. Los datos se guardan en una base de datos MongoDB y la aplicación se implementa en Heroku en la siguiente URL.

<!-- * https://...herokuapp.com/ -->

## Iniciar la aplicación localmente

Para iniciar una aplicación:

```bash
# Instalar dependencias
$ npm install

# Cree un archivo .env y coloque allí el MONGODB_URI para conectarse a su base de datos mongodb
$ echo "MONGODB_URI=<YOUR-MONGODB-URI>" > .env

# Iniciar la aplicación
$ npm run dev
```

Luego puedes acceder a la aplicación en : http://localhost:3001/