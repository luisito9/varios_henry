

function Node(data){
	this.data = data;
	this.left = null;
	this.right = null;
}

Node.prototype.add = function(v,r){
	if(!r) var r = this;
	if( v < this.data){
		if(this.left === null){
			this.left = new Node(v);
		}else{
			this.left.add(v,r);
		}	
	}
	if( v >= this.data){
		if(this.right === null){
			this.right = new Node(v);
		}else{
			this.right.add(v,r);
		}	
	}
	return this;
}

Node.prototype.findMin = function(){
	if(this.left && this.right){
		var l = this.left.findMin();
		var r = this.right.findMin();
		if(l.data < r.data) return l;
		else return r
	}else{
		if(this.left){
			minL = this.left.findMin();
			return minL.data  <= this.data ?  minL: this;
		}
		if(this.right){
			minR = this.right.findMin();
			return minR.data  <= this.data ?  minR: this;
		}
	}
	if(!this.left && !this.right) return this;
}

Node.prototype.findMax = function(){
	if(this.left && this.right){
		var l = this.left.findMax();
		var r = this.right.findMax();
		if(l.data > r.data) return l;
		else return r
	}else{
		if(this.left){
			let maxL = this.left.findMax();
			return maxL.data  > this.data ?  maxL: this;
			
		}
		if(this.right){
			let maxR = this.right.findMax()
			return maxR.data > this.data ? maxR: this
		}
	}
	if(!this.left && !this.right) return this;
}


const arbolito = new Node(20);
arbolito.add(25);
arbolito.add(15);
arbolito.add(12);
arbolito.add(30);
console.log(arbolito.findMax());
console.log(arbolito.findMin());
