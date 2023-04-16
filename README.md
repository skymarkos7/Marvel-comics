# Quasar App (marvel-comics)

listagem de quadrinhos marvel

# Using framework to vue (quasar)

## Install the dependencies

```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
# or
npx quasar dev
```

### Lint the files

```bash
yarn lint
# or
npm run lint
```

### Format the files

```bash
yarn format
# or
npm run format
```

### Build the app for production

```bash
quasar build
# or
npx quasar build
```

# About

## characteristics:

- Screem of load
- api with axios
  - autentication api for get infos
    - apikey public
    - ts actualy
    - hash = apikey public + apikey private + ts
- google maps
  - select address for clicking, zipcode, country, city etc.
  - iframe used to enable greater interaction with google maps.
- versioning

  - Using github on branch **develop** for development

  ## pendencia

  - carregar paginação
  - permitir compartilhar
  - aplicar transparência
  - possibilidade de filtro
  - favoritar
  - atualizar o hash a cada chamada
