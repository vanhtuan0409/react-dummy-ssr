# React Dummy SSR

Simple React+Express SSR for dummy

### Usage

```sh
# Develop app as a normal React app
# Build static file when ready for production
yarn run build

# Bootstrap Express server for serving static file
yarn run server
```

### Under the hood

Express is simply a Static File server with a custom logic for templating [index.html](./public/index.html)
