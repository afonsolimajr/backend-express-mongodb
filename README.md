# backend-express-mongodb
### Backend node express mongoDB


### inicializacao do servidor
npm init -y

### instalação do typescript
yarn add -D typescript

### configuração do TS
yarn tsc --init

### configuracoes do tsconfig.json

{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,  
    "strict": true,
    "skipLibCheck": true
  }
}

### instalação do express e types

yarn add express
yarn add -D @types/express @types/node
yarn add -D ts-node ts-node-dev
yarn add -D nodemon

### estrutura do projeto

criar pasta src
criar arquivo src/server.ts

### adiciona script de execucao no package.json

"scripts": {
  "start": "node dist/server.js",
  "build": "tsc",
  "dev": "nodemon src/server.ts"
},

