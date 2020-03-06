`npm run start`

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
