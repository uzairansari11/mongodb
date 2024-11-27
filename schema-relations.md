# data type

- string (max size : 16megabytes)
- boolean (true | false)
- number (Integer (int32) | NumberLong (int64) | NumberDecimal (12.89) | ObjectId('dfghj))
- Date
- Timestamp
- Embedded Document
- Arrays

## RELATIONS

- Nested /Embedded Document

```
{
 userName :"max",
 age:29,
 address :{
   street :"second street,
   city:"new york"
 }
}

```

- References

```
{
  users :"max,
  favBooks :[{},{}],

}
  <!-- lots of duplication customers may have same fav books also if we change book data we will have to change it into all users. -->


<!-- Customer -->

{
  user :"max,
  favBooks:['id1','id2'],

}

<!-- Books -->
{
  _id:'id1',
  name:"Lord of the rings 1"

}



{
  _id:'id2',
  name:"Lord of the rings 2"

}
```
