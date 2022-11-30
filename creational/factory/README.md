# Creational Patterns - Factory

Project that finds a user in a database for practicing
N-tier architecture(repository, service), 
dependency injection(passing instances on the constructor, no 'require' needed) 
and factory(deals with instance creation)

- Fake Database: simulates a database
- Repository: deals with user data on the database, dependency injection of the database connection
- Service: deals with business logic, dependency injection of the repository
- Factory: create a service instance, and deals with all dependencies instances

used rewiremock lib to make the factory pattern more testable
making easy to stub the database dependency
