# Backend node express com mongoDB

## como inicializar e configurar um servidor

### inicializacao do servidor

```console yarn init -y```

### instalação do typescript

```console yarn add -D typescript```

### configuração do TS

```console yarn tsc --init```

### configuracoes do tsconfig.json

```json
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
```

### instalação do express e types

```console
yarn add express

yarn add -D @types/express @types/node
yarn add -D ts-node ts-node-dev
yarn add -D nodemon
```

### estrutura do projeto

- criar pasta src

- criar arquivo src/server.ts

### adicionar script de execucao no package.json

```javascript
"scripts": {
  "start": "node dist/server.js",
  "build": "tsc",
  "dev": "nodemon src/server.ts"
},
```
