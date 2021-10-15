# React.js App Memes

## Commands

```
npx create-react-app my-app
cd my-app
npm start




OR:

npm install -g create-react-app

create-react-app my_app

Instalar los paquetes actualizados:

npm cache clean --force

```

## Commands

```
npm start
  Starts the development server.

npm run build
  Bundles the app into static files for production.

npm test
  Starts the test runner.

npm run eject
  Removes this tool and copies build dependencies, configuration files
  and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

cd app-memes
  npm start

```



## Angular vs. React

```
Anglar (Framework):

Conjunto (set) de librerias y herramientas de trabajo para abarcar el desarrollo de un sistema completo.


React.js (Libreria):

Es una libreria para el desarrollo de interfaces gráficas.
Usa componentes que se compone de una parte visual y una parte funcional.
Conjunto (árbol) de componentes.
React (Los compontes reaccionse).

```

## Snippets de Emmet para React

```
1. Pulsa ctrl + shift + P en visual studio code. Te aparecerá una barra de comandos.
2. En la barra de commandos busca la opción de Preferences: Open Settings (JSON). Se abrirá el archivo de configuración de visual studio code que se mostrará en formato JSON.
3. Coloca dentro del archivo JSON las siguientes lineas para poder activar emmet.

//Esta linea activa la opción de usar emmet en React

"emmet.includeLanguages": {
    "javascript": "javascriptreact",
    "jsx-sublime-babel-tags": "javascriptreact"
},

//Esta linea es muy útil, nos permite usar emmet con componentes que no sean HTML.
//Por ejemplo un componente de react que escribamos llamado Layout, al darle tab
//nos lo mostrará como <Layout></Layout>

"emmet.triggerExpansionOnTab": true,


```



