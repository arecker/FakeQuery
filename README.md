# FakeQuery.js

FakeQuery is a very tiny library that can be used to replace jQuery while testing javascript.

A ```FakeQuery``` object is constructed with test data.

```javascript
var testData = {
    // Selector: Value
    "#name": "Alex",
    "#address": "123 Sesame Street",
    "#phone": "555-555-5555"
}

var $ = new FakeQuery(testData).$;
```

The test data and library stub can be used to test jQuery code

```javascript
function GetName(){
    return $('#name').val();
}

test("Verify correct name found", function(){
    var expected = "Alex";
    var actual = GetName();
    equal(actual, expected, "Got correct name");
});
```

More functions to come!