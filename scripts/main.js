var myImage = document.querySelector('img'); //imgタグを選び
myImage.onclick = function(){ //imgタグをクリックしたとき
  var mySrc = myImage.getAttribute('src'); //imgタグのsrcを抜き出し
  if(mySrc === 'img/347547d9ae93cd734e2da4fe9353c022d1f9c713.jpeg'){
    myImage.setAttribute('src','img/6c6cfeaf70532881f13bacd62c2b68c7d9e6f3fc.jpeg')
  }else if(mySrc === 'img/6c6cfeaf70532881f13bacd62c2b68c7d9e6f3fc.jpeg'){
    myImage.setAttribute('src','img/c6b19099269d129b5d0c0ac9fc9c650cbe58f003.jpeg')
  }else if (mySrc === 'img/c6b19099269d129b5d0c0ac9fc9c650cbe58f003.jpeg') {
    myImage.setAttribute('src','img/dfc2565cd4dae9593071b715beeb965137291697.jpeg')
  }else{
    myImage.setAttribute('src','img/347547d9ae93cd734e2da4fe9353c022d1f9c713.jpeg')
  }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h2');
// myHeading.textContent = 'MEE MEE';
//alert('hello'); 画面が出てくる

function setUserName(){
  var myName = prompt('お名前は？:');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Hello,'+myName;
}

if(!localStorage.getItem('name')){
  setUserName();
}else{
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Hello,'+storedName;
}

myButton.onclick = function(){
  setUserName();
}
