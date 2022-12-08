# Webpack react template

This is a template to start up a react application using webpack to have full control of your application from dev process to build sizes.

 It comes with few things out of the box 🎉

 - Support to typescript
 - Scss preprocessor
 - Handle image json and font files
 - Code split
 - Minimal Eslint setup
 - Husk pre-commit to check on Eslint
 - Support Unit Test with Jest and React Testing Library

 # Run the template

### Build
 ```
 npm run build
 ```
Your build is automatically set with production mode for best optimization.
A file called `dist` will be create with the bundle.

### Start development server
```
npm run dev
```
Start a server at http://localhost:9000/

### Run eslint manually
```
npm run eslint
```

### Run unit test
```
npm run test
```

### Run unit test with hot reload
```
npm run test:watch
```


## Husky
```
pre-commit: runs > npm run eslint
```
