var FakeQuery = function(){
	var self = this;
    self.pairs = [];
	self.$ = function(id){
		var inner = this;
        inner.id = id;
        inner.val = function(){
        	return "Cat";
        }
	}
    
    self.$$ = function(id){
        var d = new self.$(id);
        return d;
    }
    
    self.add = function(id, value){
        self.pairs.push({
        	id: value
        });
    }
}

var fq = new FakeQuery();
var $ = fq.$$;

// Code -->

var response = $('#returnMe').val();
alert(response);