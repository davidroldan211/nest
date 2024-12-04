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


## Utiles desarrollo 

Configurar variables de entorno
```
npm i @nestjs/config
```
Copiar en el app module