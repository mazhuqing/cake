class Banner{
	constructor(newbox,newli) {
	    this.index = 0;
		this.oBox = newbox;
		this.oLi = newli;
		this.oBox.style.backgroundImage="url(img/"+this.index+".jpg)";
		this.oLi[this.index].style.backgroundColor = "pink";
	}
	//设置背景图
	setImg(){
		this.oBox.style.backgroundImage="url(img/"+this.index+".jpg)";
	}
	//设置li颜色
	setLi(){
		for(let i=0;i<this.oLi.length;i++){
			if(i==this.index){
				this.oLi[i].style.backgroundColor = "pink";
			}else{
				this.oLi[i].style.backgroundColor = "";
			}
		}
	}
	//右按钮
	setRight(){
		this.index++;
		if(this.index == this.oLi.length){
			this.index = 0;
		}
		this.setImg();
		this.setLi();
	}
	//左按钮
	setLeft(){
		this.index--;
		if(this.index == -1){
			this.index = this.oLi.length;
		}
		this.setImg();
		this.setLi();
	}
	
	//绑定按钮事件
	evenBtn(){
		let oRight = document.getElementById("btn-next")
		let oLeft = document.getElementById("btn-previous");
		let that = this;
		oRight.onclick = function(){
			that.setRight();
		}
		oLeft.onclick = function(){
			that.setLeft();
		}
	}
	//绑定li
	evenLi(){
		let that = this;
		for(let i=0;i<this.oLi.length;i++){
			this.oLi[i].onclick=function(){
				that.index = i;
				that.setImg();
				that.setLi();
			}
		}
	}
	
}

    let oBox = document.getElementById("big_box");
	let oLis = document.getElementsByTagName("li");
	
	let b = new Banner(oBox,oLis);
	// b.evenBtn();
	b.evenLi();
	let time = null;
	window.onload=function(){
		clearInterval(time);
		time = setInterval(function(){
			b.setRight();
		},1000)
	}
	
	class Txte{
		constructor(newB,newbox) {
		    this.oB = newB;
			this.oBox1= newbox;
		}
		getBtn(){
			let that = this;
			this.oB.onclick=function(evt){
				let e = evt || event;
				e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
				that.oBox1.style.display="block";
			}
			document.onclick = function(){
				that.oBox1.style.display="none";
			}
		}
	}
	let oTxt = document.getElementById("txt");
	let oBox1 = document.getElementById("box1");
	let t = new Txte(oTxt,oBox1);
	t.getBtn();
	