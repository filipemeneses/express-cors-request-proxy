# express-cors-request-proxy

[Express](https://github.com/expressjs/express/) proxy using [request](https://github.com/request/request).

## Hosted at

- **Now:** [https://express-cors-request-proxy.now.sh](https://express-cors-request-proxy.now.sh)
- **Heroku:** [https://express-cors-request-proxy.herokuapp.com/](https://express-cors-request-proxy.herokuapp.com/)

## Package usage

### Install
```
npm i express-cors-request-proxy
```

### Start up server

```
require('express-cors-request-proxy').listen(process.env.PORT || 3000);
```

## API usage

This API uses the library [request](https://github.com/request/request) options, so just send the options in the JSON body.

> Default method is GET

### Success response

```
{
 "url": "https://github.com/filipemeneses"
}
```

The response will be:

```
{
  "ok": true,
  "html": "\n\n<!DOCTYPE html>\n<html lang=\"en\">\n  <head>..."
}
```

> You can use [Cheerio](https://github.com/cheeriojs/cheerio) to parse HTML to use as "jQuery-like"

### Error response

If it fails it will print (consider invalid options):

```
{
  "method": "GET"
}
```

The response will return the stack:

```
{
  "ok": false,
  "error": "Error: options.uri is a required argument..."
}
```
