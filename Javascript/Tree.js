class TreeNode{
	constructor(head, left, right,value){
		this.head = head;
		this.left = left;
		this.right = right;
		this.value = value;
	}

	getLeftChild(){
		return this.left;
	}

	getRightChild(){
		return this.right;
	}

	visit(){
		return this;
	}

	addLeftChild(node){
		this.left = node;
	}

	addRightChild(node){
		this.right = node;
	}

	printNode(){
		return "Node Value : " + this.value;
	}

	dfs(val){
		
		let foundObj = null;
		matches(this);
		return foundObj;

		function matches(node){
			
			if(node){
				if(node.value == val){
					foundObj = node.visit();
					return foundObj;
				}
				if( matches(node.getLeftChild()) ){
					return node.visit();
				}
				if( matches(node.getRightChild()) ){
					return node.visit();
				}
			}
			
			return false
		}
	}


	bfs(val){
		let foundObj = null;
		let queue = [];

		queue.push(this);

		while(queue.length > 0){
			var node = queue.shift();
			if (node.value == val){
				foundObj = node.visit();
				return foundObj;
			}

			queue.push(node.getLeftChild());
			queue.push(node.getRightChild());
		}
		return foundObj;
	}
}

