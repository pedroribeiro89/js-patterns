# Creational Patterns

Project with N-tier architecture, dependency injection
and factory

- Repository: deals with user data on the database, used dependency injection, so no 'require' is needed
- Service: deals with business logic, dependency injection of the repository
- Factory: create a service instance, and deals with all dependencies instances

used rewiremock lib to make the factory pattern more testable
making easy to stub the database dependency
