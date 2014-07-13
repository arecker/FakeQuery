// Test Data
var testData = {
	"#name": "Alex Recker",
	"#address": "123 Sesame Street",
	"#address2": "Apartment 5A"
}

// Construct FakeQuery object
var $ = new FakeQuery(testData).$;

test("Correct Name", function(){
	var expected = "Alex Recker";
	var actual = $('#name').val();
	equal(expected, actual, "Got correct name.");
});
test("Correct Address", function(){
	var expected = "123 Sesame Street";
	var actual = $('#address').val();
	equal(expected, actual, "Got correct address.");
});
test("Correct Address 2", function(){
	var expected = "Apartment 5A";
	var actual = $('#address2').val();
	equal(expected, actual, "Got correct address 2.");
});