# Companies API

This is a fullstack application that allows to create, read and update a list of companies that contain information about the ID, name, address, city, country, e-mail, phone number and a list of it's beneficial owners.

[![Main page](https://image.prntscr.com/image/ugNRiHUtSRWvCthI4fw1yw.png)]()

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on seeing a live version of the system.

### Clone

Clone this repo to your local machine using `https://github.com/bandreit/companiesaa.git`

### Stetup

Navigate to the repository

```shell
$ cd CompaniesAA/
```

Install and update packages first and then start the server

```shell
$ yarn install
$ yarn start
```

Server should start on port 5000

Navigate to the client repository to install packages and start the client

```
$ cd client/
$ yarn install
$ yarn start
```

Client should start on port 3000

## Documentation

- Example of a GET request for recieving all the companies

```
curl -X GET http://localhost:5000/api/companies
```

- Response:

```
[
    {
        "id": 1,
        "name": "Bucuria",
        "address": "48 Ismail Street",
        "city": "Chisinau",
        "country": "Moldova",
        "email": "bucuria@mail.md",
        "phone_number": "+37364687947",
        "beneficial_owners": [
            "fe"
        ]
    },
    {
        "id": 2,
        "name": "Zara",
        "address": "10/2 Gefognad Street",
        "city": "Vienna",
        "country": "Austria",
        "email": "vienna@zara.com",
        "phone_number": "+3234524624",
        "beneficial_owners": []
    },
    {
        "id": 3,
        "name": "Zubr",
        "address": "3 Mihailovski Street",
        "city": "Reni",
        "country": "Ukraine",
        "email": "reni@zubr.ua",
        "phone_number": "+6538394633",
        "beneficial_owners": []
    }
]
```

- Example of a POST request for adding one or multiple companies

```
curl -X POST http://localhost:5000/api/companies/ \
     -H "Content-Type: application/json" \
     -d '{
        "name": "H&M",
        "address": "Str. Huipaimi 4",
        "city": "Los Angeles",
        "country": "USA",
        "email": "hm@la.com",
        "phone_number": "+1241362625"
         }'
```

- Example of a PUT request for adding one or multiple companies

```
curl -X PUT http://localhost:5000/api/companies/1 \
     -H "Content-Type: application/json" \
     -d '{
	    "address": "Str. Ismail 4420"
        }'
```

- Response

```
{
    "msg": "Company was updated",
    "company": {
        "id": 1,
        "name": "Bucuria",
        "address": "Str. Ismail 4420",
        "city": "Chisinau",
        "country": "Moldova",
        "email": "bucuria@mail.md",
        "phone_number": "+37364687947",
        "beneficial_owners": []
    }
}
```

- Example of a GET request for a specific company

```
curl -X GET http://localhost:5000/api/companies/1
```

- Response

```
[
    {
        "id": 1,
        "name": "Bucuria",
        "address": "48 Ismail Street",
        "city": "Chisinau",
        "country": "Moldova",
        "email": "bucuria@mail.md",
        "phone_number": "+37364687947",
        "beneficial_owners": []
    }
]
```

## Deployment

The system is deploid on a Heroku live server at `https://guarded-tundra-65894.herokuapp.com/`

## Built With

- [NodeJS](http://www.dropwizard.io/1.0.2/docs/) - JavaScript runtime for backend
- [Express](https://maven.apache.org/) - Node.js web application framework
- [React](https://rometools.github.io/rome/) - JavaScript library used for the client
- [MaterialUI](https://material-ui.com/) - React UI Framework

## Considerations

- [Auth0](https://auth0.com/) is authentification method/protocol that I would use in order to add authentification to the service as it is a scalable technology that provides APIs, SDKs, live analytics and easy integration with social networks or passwordless services
- The service can become redundant at editing the data, as the editing needs to be done to the whole company and it's beneficial owners. That can be seen in the client-side too as I have different components displaying data for a single company and more of them. Although single responsability should be mentained, when designing an API the redundancy factor should alwas be kept in mind.

## Versioning

Heroku automatic versioning was used when deployed.

## Authors

- **Andrei Bostan** - _Initial work_ - [bandrei](https://github.com/bandreit)

## Acknowledgments

- [Traversy Media](https://www.youtube.com/user/TechGuyWeb)
- [fvcproductions](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)
- [nbuggers](https://dev.to/nburgess/creating-a-react-app-with-react-router-and-an-express-backend-33l3)

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2015 © <a href="http://fvcproductions.com" target="_blank">FVCproductions</a>.
