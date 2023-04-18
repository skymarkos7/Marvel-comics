# Quasar App (marvel-comics)
## [overview](http://comics.lourenco.club/#/)

List of comics

# warning
### `Please Run on your computer locally for best results. Thanks`



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
- Infinite scrool
- api with axios | fetch
  - autentication api for get infos
    - apikey public
    - ts actualy
    - hash = apikey public + apikey private + ts
- google maps
  - select address for clicking, zipcode, country, city.
  - iframe used to enable greater interaction with google maps.
- versioning

  - Using github on branch **develop** for development end dist for review
