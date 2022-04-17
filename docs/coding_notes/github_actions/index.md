---
template: overrides/main.html
title: Github Actions
---
# Github Actions

¿Que es Github Actions?
Es una herraminta que nos permite realizar CI/CD de nuestros proyectos. 

Disponible en varios sistemas operativos como Linux, macOS, Windows
Logs en Vivo

Crear tus propios workflows o tambien usar los de las comunidad. 

Tiempo gratis 2000 minutos mensuales.

## Primeros Pasos
1. Crear un repo vacio.
2. Ir Actions
3. Crear workflow: `.github/workflows/acdc.yml`

4. https://github.com/features/actions
```yaml
# This is a basic workflow to help you get started with Actions

name: Shoot To Thrill

# Controls when the workflow will run
on:
  # Triggers the workflow on push or pull request events but only for the master branch
  push:
    branches: [ master ]
  pull_request:
    branches: [ master ]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:
  # This workflow contains a single job called "build"
  build:
    # The type of runner that the job will run on
    runs-on: ubuntu-latest

    # Steps represent a sequence of tasks that will be executed as part of the job
    steps:
      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
      - uses: actions/checkout@v3

      # Runs a single command using the runners shell
      - name: Run a one-line script
        run: echo Hello, world!

      # Runs a set of commands using the runners shell
      - name: Run a multi-line script
        run: |
          echo Add other actions to build,
          echo test, and deploy your project.
```

## Github Pages
Permite desplegar nuestras aplicaciones estáticas en la nube y hacerlas accesibles.
https://pages.github.com/

## Despliegue de React application 

1. Crear el Proyecto de muestra
   1. `npm init vite@latest`
2. Install Dependencies 
   1. `npm install`
   2. `npm run dev`

## Build and Deploy Github Actions y Github Pages
1. Iniciamos Git y agregamos los archivos creados
   1. `git init`
   2. `git add .`
   3. `git commit -m "Initial Commit"`
2. Renombramos la rama
   1. `git branch -m main`
3. Agregamos el repo creado y pusheamos
   1. `git remote add origin https://github.com/slarrauri/github-actions.git`
   2. `git push -u origin main`
4. Creamos el yaml file para hacer el deploy
5. Hacemos commit y push.


!!! important
    crear las carpetas `.github/worflows`

```yaml
name: Shoot to Thrill
on: [push]
jobs:
  build-and-deploy:
    concurrency: ci-${{ github.ref }} # Recommended if you intend to make multiple deployments in quick succession.
    runs-on: ubuntu-latest
    steps:
      - name: Checkout 🛎️
        uses: actions/checkout@v3 # clona el repo en la nube

      - name: Install and Build 🔧 # This example project is built using npm and outputs the result to the 'build' folder. Replace with the commands required to build your project, or remove this step entirely if your site is pre-built.
        run: |
          npm ci
          npm run build

      - name: Deploy 🚀
        uses: JamesIves/github-pages-deploy-action@v4.3.0
        with:
          branch: gh-pages # The branch the action should deploy to.
          folder: dist # The folder the action should deploy.
```


## Urls
Repo: https://github.com/slarrauri/github-actions 
https://github.com/features/actions
https://pages.github.com/