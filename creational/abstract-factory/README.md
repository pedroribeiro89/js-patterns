# Creational Patterns -Abstract Factory

Project for printing user data as a table on the console or browser.
Used simulated interfaces in javascript to implement an abstract
factory that create the right factory instance depending on the context.

User dynamic import for importing the factory for browser or console

## Simulated interface
Created NotImplementedExecption class extended from error
and every interface should throw it on its methods.

- Table component: interface for rendering a table
- View Factory: interface for defining a factory

## Plataforms

Implementations of the interfaces, one for console
other for browsers.

## UI
the html file used for the browser context.
index.mjs uses the presence of window object to
make a dynamic import on the right factory

