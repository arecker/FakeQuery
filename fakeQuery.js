var FakeQuery = function(data) {
	var FakeQuery = this;
	FakeQuery.data = data;

	FakeQuery.Selector = function(input){
		var Selector = this;
		Selector.input = input;

		Selector.val = function() {
			var input = Selector.input;
			return FakeQuery.data[input];
		}
	}

	FakeQuery.$ = function(selector) {
		return new FakeQuery.Selector(selector);
	}
}