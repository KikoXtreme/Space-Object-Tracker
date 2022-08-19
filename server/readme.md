# SoftUni Practice Server

## Usage

This is **REST service**, created for educational purposes. To execute it, open a command prompt and run `node server.js`.

```
> cd server
> node server.js
```

Note that changes to the data **will not be persisted**! All operations happen in memory and will be wiped when the service is restarted.

## Base URL

The Base URL for the API is: `http://localhost:3030/jsonstore`

The documentation below assumes you are pre-pending the Base URL to the endpoints in order to make requests.

# Endpoints: Objects

- `/objects` -- get object list/ create object;
- `/objects/{objectId}` -- get object/update object/ delete object by provided id;;

## Get object list

Send a `GET` request to `/objects`. The service will respond with an array of object objects.

### Success Response:

Code: 200 OK

Content:

```
[
  {
    "_id": string,
    "text": string,
    "isCompleted": boolean,
  }, ...
]
```

## Create a new object

Create a new object by sending a `POST` request to `/objects` with properties `text` and `isCompleted`. The service will respond with an object, containing newly created object.

### Body

```
{
  "text": string,
  "isCompleted": boolean
}
```

### Success Response:

Code: 200 OK

Content:

```
{
  "_id": string,
  "text": string,
  "isCompleted": boolean,
}
```

## Update object by provided objectId

Update an existing object by sending a `PUT` request to `/objects/{objectId}` with property `isCompleted`. The service will respond with an object, containing newly updated object.

### Body

```
{
  isCompleted: boolean,
}
```

### Success Response:

Code: 200 OK

Content:

```
{
  "_id": string,
  "text": string,
  "isCompleted": boolean,
}
```

