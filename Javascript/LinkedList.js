class ListNode{
	constructor(next, prev, value){
		this.next = next;
		this.prev = prev;
		this.value = value;
	}

	add(node){
		node.next = this.next;
		node.prev = this;
		this.next.prev = node;
		this.next = node;
	}

	addNext(node){
		this.next = node;
	}

	addPrev(node){
		this.prev = node;
	}

	remove(node){
		node.next.prev = this;
		this.next = node.next;

		node.next = null;
		node.prev = null;
	}

	printNode(){
		return "Prev Val : " + this.prev.value + " - Val : " + this.value + " - Next : " + this.next.value;
	}

}