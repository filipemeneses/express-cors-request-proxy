# express-cors-request-proxy

[Express](https://github.com/expressjs/express/) proxy using [request](https://github.com/request/request).

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
