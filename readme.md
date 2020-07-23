![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# ESN Web Components

This is a project for building a standalone Web Component using Stencil that is used within [OpenPaaS](https://github.com/OpenPaaS-Suite), [LinShare](https://github.com/linagora/linshare-ui-user), and [Twake](https://github.com/TwakeApp/Twake).

## Using a component

Using a component in another app is quite straightforward, you just have to register them somewhere in your app (preferrably where you initialize your app):

```javascript
import { applyPolyfills, defineCustomElements } from 'esn-web-components/loader';

applyPolyfills().then(() => defineCustomElements());
```

Note that StencilJS will utilize ES Modules by default and lazy-load the components. The lazy-loading of a component will happen at its `connectedCallback` phase. If you want to disable lazy-loading, you can opt out of ES Modules and use CommonJS instead (do note that this way it will load the entire list of components, even the unused ones):

```javascript
import { applyPolyfills, defineCustomElements } from 'esn-web-components/loader/index.cjs';

applyPolyfills().then(() => defineCustomElements());
```

## Development workflow

Run the command below and Stencil will build and watch for any changes to rebuild:

```bash
npm run build:watch
```

Then if you have `npm link`-ed properly, every rebuild in this module should trigger a rebuild in the module(s) using it.

## Creating and naming a new component

The recommended way of creating a new component is to use `npm run generate esn-component-name`. Use the `esn` prefix for all the components, e.g. when you want to create a backdrop component, run:

```bash
npm run generate esn-backdrop
```

## List of avaiable components

- [`esn-app-grid`](https://github.com/huy-ta/esn-web-components/tree/main/src/components/esn-app-grid)
- [`esn-popover`](https://github.com/huy-ta/esn-web-components/tree/main/src/components/esn-popover)
