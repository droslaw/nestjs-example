`npm run start`

`/map-result` endpoint uses https://github.com/droslaw/nestjs-example/blob/master/src/core/mapper/mapper.service.ts
There are specific mappers which registers themselves in in above "core mapper":
* https://github.com/droslaw/nestjs-example/blob/master/src/result/submodule/address/mapper/mapper.service.ts
* https://github.com/droslaw/nestjs-example/blob/master/src/result/submodule/id/mapper/mapper.service.ts

### Result is

`POST localhost:3000/map-result`

**body**:
```
{
	"type": "id",
	"data": "ABC000000"
}
```

**response**:
```
{
    "result": {
        "idNumber": "ABC000000"
    }
}
```

---

**body**:
```
{
	"type": "address",
	"data": "Mickiewicza"
}
```

**response**:
```
{
    "result": {
        "street": "Mickiewicza"
    }
}
```
