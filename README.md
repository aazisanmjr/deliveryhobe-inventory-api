<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description
## Get all products 
localhost:3000/api/products method get
## Products should be filterable by Area, or Warehouse 
localhost:3000/api/products method post
body for Area 
```{ id:int Id of an area, byArea: true }``` eg ```{ "id":1, "byArea": true } ``` 
with this body products will be filltered by Mirpur area.
body for Warehouse 
```{ id:int Id of an Warehouse { id: 3, byWareHouse: true }```
eg ```{ "id":1, "byArea": true } ``` 
with this body products will be filltered by Uttara warehouse

## Product search 
localhost:3000/api/products/search method post 
  body ```{"query":""}``` any string to search

## checkout
localhost:3000/api/checkout  method post 
body ```{ customerName!: string
  customerPhone!: string
  productIds!:[number]
  quantities!:[number]
}```
for single product ```{
    "customerName":"x",
    "customerPhone":"325436363",
    "productIds":[4] ,single array for one product
    "quantities":[1]
}```
for multiple products ```{
    "customerName":"x",
    "customerPhone":"325436363",
    "productIds":[4,3] //multiple products
    "quantities":[1,3] //for product id 4 quantity is 1 for product id 3 quantity is 3
}```

## Inventory restock and mark stock out
first sign in to this localhost:3000/api/inventory/signin endpoint using any below body
choose one 
	```{"email":"mirpur@warehouse.com" ,"password":"mirpur123"} //available product id  1,2 
	{"email":"dhanmondi@warehouse.com" ,"password":"dhanmondi123"} //available product id  3,4 
	{"email":"uttara@warehouse.com" ,"password":"uttara123"} //available product id  5,6```
then
#for re stocking  products
localhost:3000/api/inventory/restock method post 
body```{
    "productIds":[1,2], //where the ids for the available products under this warehouse
    "newInventories":[100,26] //product id 1 will have an inventory of 100 items and product id 2 will have an inventory of 26 items

}```
#for stocking out an products 
localhost:3000/api/inventory/stockout method post 
body
```{
    "productIds":[1,2], //where the ids for the available products under this warehouse
}```

````
[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
