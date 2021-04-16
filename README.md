# ng-packagr-yarn-monorepo

Minimal reproduction of a build issue in yarn monorepo with ng-packagr used as a build tool.

The project presents a simple yarn monorepo consisting of three subpackages:

- `client` - contains a simple hello world service
- `components` - contains a greetings service that uses `client`'s `HelloWorldService` as a dependency
- `app` - an empty project that can act as the base for an Angular application, in this reproduction it is used to bring in the necessary `peerDependencies` declared by `client` and `components` to the monorepo

## Setup and run

Install dependencies:

```
$ yarn
```

Build all subpackages by running

```
$ yarn build
```

Generated bundles can be found in the `dist` folders of the `client` and `components` subpackages.
