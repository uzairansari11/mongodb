# Create

- insertOne(data,options)
- insertMany(data,options)

# Read

- find(filter,options)
- findOne(filter,options)

# Update

- updateOne(filter,data,options)
- updateMany(filter,data,options)
- replaceOne(filter,data,options)

# Delete

- deleteOne(data,options)
- deleteMany(data,options)

## Projection

```
{
    _id: ObjectId('6742de94be53c9914cc1c197'),
    flightId: 'LH732',
    departureAirport: 'Frankfurt Airport (FRA), Frankfurt, Germany',
    arrivalAirport: 'Singapore Changi Airport (SIN), Singapore',
    aircraft: 'Boeing 747',
    distance: '6600 miles',
    international: true,
    expensive: true
  }

db.collection.find({},{name:1}).pretty()

 db.flightData.find({},{distance:1})
```

## Embedded Document

```
db.flightData.updateMany({},{$set : { status : {  description :"on time", lastUpdated:"1 hour ago"}}})
db.flightData.updateMany({},{$set : { 'status.responsible' : 'uzair ansari'}})
```
