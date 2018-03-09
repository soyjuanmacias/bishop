# Test Code

We need to create an API joining several providers in order to provide a single 
source for our frontend.

http://www.clashapi.xyz/api/cards/{id} // json

https://pokeapi.co/api/v2/pokemon/{id} // json

http://ergast.com/api/f1/drivers/{id} // xml

## First

Create an unique endpoint which receives an `id` and make a request for one of 
those endpoints. Map the data and return:

```json
{
    "name": "whatever",
    "id": "pokemon-{id}",
    "image": "://url/to/image"
}
```

## Second

In the same endpoint no `id` is received, it'll return every one of the possible
items. 

```json
[
  {
    // same structure as /item/{id}
  }
]
```

## Tips
- Use some cache system
- Use some reverse id system
