class Stack{
	constructor(items = []){
		this.items = items;
	}

	push(item){
		this.items.push(item);
	}

	pop(){
		if(this.items.length == 0){
			return null;
		}
		
		return this.items.pop();
	}

	isEmpty(){
		if(!this.items.length){
			return true;
		}
		return false;
	}

	find(item){
		return this.items.indexOf(item);
	}
}