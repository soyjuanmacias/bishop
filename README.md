# Test Code

Our objetive is create an api that join different sources of data.

`Clash`: http://www.clashapi.xyz/api/cards/{id} // json
- images: /images/cards/{id|idName}.png

`Pokemon`: https://pokeapi.co/api/v2/pokemon/{id} // json

`Drivers`: http://ergast.com/api/f1/drivers/{id} // xml
- url: Driver:url

## Exercise

Create an endpoint called `items`. This endpoint group all the information from
previously mentioned. We want to flatten the information displayed and to 
complete that we are going to reduce the information to:

- `id` unique id which is going to be used for more information
- `name` display name

Then our endpoint `/items/` is going to return a JSON with the next structure: 

```
[
    {
        "id": "some-id",
        "image": "://url/to/image",
        "name": "whatever",
        "url": "://url/to/more/information"
    },
    ...
]
```

### Next steps

Aditionally, our clients want to retrieve a little more information from this 
items. To achieve that goal, we are going to create and endpoint for that 
purpose.

`/items/:id`

In this case, we want to response with the next structure:
```
{
    "id": "some-id",
    "image": "://url/to/image",
    "name": "whatever",
    "url": "://url/to/more/information"
}

```

As our `drivers` API doesn't have any images we can return, we are going to 
display an `url` for their wikipedia site.

## Tips
- You can check API response structure in the root url provided or:
    - http://www.clashapi.xyz/api/cards/5a583d95dbcce5001447ab33
    - https://pokeapi.co/api/v2/pokemon/12
    - http://ergast.com/api/f1/drivers/alonso
- If you need more information:
    - https://github.com/martincarrera/clash-royale-api
    - https://pokeapi.co/
    - http://ergast.com/mrd/
- You can use any of the images provided as sprites in the pokemon API.

## Optional
- Use some cache system
- Use some reverse id system
