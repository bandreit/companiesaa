
# Recipe Network Installation guide

This is a client-server application that allows to create, read and update a list of recipe containing information like preparation steps, estimated time, category and ingredients that later can be shared with a network of people that have access to the same application.

[![Main page](http://prntscr.com/sso1pg)]()

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See the user manual for notes on seeing a live version of the system.

### Clone & Install

Clone this repo to your local machine using `https://sep-via@dev.azure.com/sep-via/SEP2/_git/SEP2`

Download an appropriate JDK for your operating system. The latest JDK can be downloaded from the official [OpenJDK](http://jdk.java.net/12/) website.


### Setup

Set JAVA_HOME to the JDK directory. Refer to [Install](http://jdk.java.net/12/) Java section for more information.

Check if the correct java version is installed. The following shows the output for OpenJDK 12:

```shell
java -version
openjdk version "12.0.2" 2019-07-16
OpenJDK Runtime Environment (build 12.0.2+10)
OpenJDK 64-Bit Server VM (build 12.0.2+10, mixed mode, sharing)
```

Download latest version of [pgAdmin](https://www.pgadmin.org/) and install it

Download [MyObserver-1.2.jar](https://via.itslearning.com/ContentArea/ContentArea.aspx?LocationID=12035&LocationType=1)
Download [JavaFX-12.jar](https://via.itslearning.com/ContentArea/ContentArea.aspx?LocationID=12035&LocationType=1)
Download [JDBC](https://jdbc.postgresql.org/)

Open with [IntelliJ](https://www.jetbrains.com/idea/) or any other IDE

Open Project Structure [![Project Structrue](http://prntscr.com/sso9c8)]() and add the dependencies both to the Client and Server module

Open Query Tool in pgAdmin and run the script available [here](https://docs.google.com/document/d/1o8gfe3rOWR4Fj-JoiczlrKynRl95EL0jTAuU6WMarnA/edit?usp=sharing) in order to have the database neede for the project


## Built With

- [Java](https://www.java.com/en/download/) - System for developing application software and deploying it in a cross-platform computing environment
- [JavaFX](https://openjfx.io/) - Client application platform
- [NodeJS](http://www.dropwizard.io/1.0.2/docs/) - JavaScript runtime for backend

## Versioning

Versioning was determined following the guidelines and GIT statistics.

## Authors

- **Lelde Norenberga**
- **Edvinas Andrijauskas**
- **Grigore Budac**
- **Andrei Bostan**


## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
