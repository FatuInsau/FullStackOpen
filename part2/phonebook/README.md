# Directorio telefónico

En este ejercicio, creamos una agenda telefónica sencilla.

En esta agenda telefónica, los usuarios tienen la posibilidad de agregar, actualizar y eliminar una persona, así como su número de teléfono. Los nombres de las personas son únicos, lo que significa que los usuarios no pueden agregar nombres que ya existen en la agenda telefónica. También hay un campo de búsqueda disponible en la aplicación para filtrar a las personas por su nombre.

Este estado inicial de la aplicación se almacena en un archivo `db.json`, que corresponde a una lista de usuarios junto con sus números. Este archivo es utilizado por la herramienta `JSON Server` que actúa como servidor backend donde se almacenan los datos.

## Iniciar la aplicaciónn

Para iniciar una aplicación, haga lo siguiente:

```bash
# Instalar dependencias
$ npm install
# Iniciar la aplicación
$ npm run dev
# Iniciar el servidor
$ npm run server
```

Luego puedes acceder a la aplicación en: [http://localhost:5173/](http://localhost:5173/)