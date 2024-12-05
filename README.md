<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Ejucutar en desarrollo 

1. Ejecutar
``` 
yarn install
```

2. Install nest CLI
```
npm i @nestjs/cli
```

3. Levantar la base de datos 
```
docker compose up -d
```
4. Clonar el archivo ```.env.template``` y renombrar la copia a ```.env```

5. Llenar la variables de entorno definidas en ```.env```

6. Levantar el servicio de nest en desarrollo
```
npm run start:dev
```

7. Recontruir la base de datos para desarrollo
```
http://localhost:3000/api/seed
```


## Stack usado
* MongoDB
* Nest

## Production Build
1. Crear el archivo ```.env.prod```
2. Llenar las variables de entorno de producción
3. Crear la nueva imagen 
```
docker compose -f docker-compose.prod.yaml --env-file .env.prod up --build -d
```
4. Ejecutar la imagen 
```
docker compose -f docker-compose.prod.yaml --env-file .env.prod up -d
```
5. Por defecto, docker-compose usa el archivo .env, por lo que si tienen el archivo .env y lo configuran con sus variables de entorno de producción, bastaría con
```
docker-compose -f docker-compose.prod.yaml up --build
```


## Utiles desarrollo 

Configurar variables de entorno
```
npm i @nestjs/config
```
Copiar en el app module