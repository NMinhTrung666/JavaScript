function listProducts() {
  
  if (localStorage.getItem('sessionm') == null || localStorage.getItem('sessionw') == null) {
    
    var restoredRaucu = this.data.raucu;
    var restoredTraicay = this.data.traicay;
  } else {
    var restoredRaucu = JSON.parse(localStorage.getItem('sessionm'));
    var restoredTraicay = JSON.parse(localStorage.getItem('sessionw'));
  }

  for (let i=0; i< restoredRaucu.length; i++) {
var demo= '<div class="col-4" id="remo" style="margin-top: 10px; margin-bottom: 40px;">';
  demo +=  '<div class="a border" style="border-radius:5px;" ondragover="allowDrop(event)">';
  demo +=  '<img class="img img-thumbnail" id="drag'+restoredRaucu[i].id+'" src="'+restoredRaucu[i].image+'" draggable="true" ondragstart="drag(event)">';
  demo +=  '<div class="text-gray-dark col-8" style="float:left;border-right:solid 1px black;width:100%;height:58px;"><h5 class="ProductName" id="drag'+restoredRaucu[i].id+'_productname">'+restoredRaucu[i].name+'</h5></div>';
  demo +=  '<div class="col-3" style="float:right;margin-top:15px;width:100%;height:58px;"><h5  id="drag'+restoredRaucu[i].id+'_price" class="Price">'+restoredRaucu[i].price+'</h5></div>';
  demo +=  '</div>';
  demo +=  '</div>';
    
    document.getElementById("raucu").innerHTML += demo;
  }
  for (let j=0; j< restoredTraicay.length; j++) {
var demo= '<div class="col-4" id="remo" style="margin-top: 10px; margin-bottom: 40px;">';
  demo +=  '<div class="a border" style="border-radius:5px;" ondragover="allowDrop(event)">';
  demo +=  '<img class="img img-thumbnail" id="drag'+restoredTraicay[j].id+'" src="'+restoredTraicay[j].image+'" draggable="true" ondragstart="drag(event)">';
  demo +=  '<div class="text-gray-dark col-8" style="float:left;border-right:solid 1px black;width:100%;height:58px;"><h5 class="ProductName" id="drag'+restoredTraicay[j].id+'_productname">'+restoredTraicay[j].name+'</h5></div>';
  demo +=  '<div class="col-3" style="float:right;margin-top:15px;width:100%;height:58px;"><h5  id="drag'+restoredTraicay[j].id+'_price" class="Price">'+restoredTraicay[j].price+'</h5></div>';
  demo +=  '</div>';
  demo +=  '</div>';
    
    document.getElementById("traicay").innerHTML += demo;
  }
}
function home(){
  document.getElementById('n').style.display='block';
  document.getElementById('nn').style.display='block';
}
function rau(){
  document.getElementById('n').style.display='block';
  document.getElementById('nn').style.display='none';
}
function trai(){
  document.getElementById('n').style.display='none';
  document.getElementById('nn').style.display='block';
}


var products = Array();    var prices = Array(); 
function Sum(){ 
  var sum = 0; 
  for(var p in prices)
    sum+=parseInt(prices[p]); 
  return sum; 
}
function allowDrop(ev) { 
  ev.preventDefault(); 
}
function drag(ev) { 
  ev.dataTransfer.setData("Text",ev.target.id); 
}
function drop(ev) { 
  ev.preventDefault(); 
  var data=ev.dataTransfer.getData("Text");
  var newNode = document.getElementById(data).cloneNode(true);
  newNode.onclick = function(){
      var data = this.id;
      var productname = data+"_productname";     
      var productnameNode = document.getElementById(productname);     
      var id = products.indexOf(productnameNode);     
      prices.splice(id,1);     
      products.splice(id,1);     
      document.getElementById("tong").innerHTML = "$= " + Sum();     
      this.parentNode.removeChild(this);   
  } 
  var productname = data+"_productname";   
  var productnameNode = document.getElementById(productname);   
  var price = data+"_price";   var priceNode = document.getElementById(price);   
  var x = priceNode.innerHTML.replace(",","");   x = x.replace("đ","");   
  var id = products.indexOf(productnameNode); 
  if(id==-1){    products.push(productnameNode);    
  prices.push(x);           
  ev.target.appendChild(newNode);   
  }   else {    
    var old = parseInt(prices[id]);    
    prices[id] = old + parseInt(x);   
  }   
  document.getElementById("tong").innerHTML = "$ : " + Sum(); 
  document.getElementById("tamtinh").innerHTML = "$ : " + Sum();   
}

function thanhtoan(){
    document.getElementById('sp').style.display='none';
    document.getElementById('dh').style.display='block';
    document.getElementById("tamtinh").value = Sum() + " vnd";
    document.getElementById("giamgia").value = "0" + " vnd";
    document.getElementById("sum").value = Sum + " vnd";
}
function tr(){
  document.getElementById('sp').style.display='block';
  document.getElementById('dh').style.display='none';
}

function gg() {
  var tg;
  //var gg = document.getElementById("select").value;
  var giam = document.getElementById("select").value;
  switch (giam) {
    case "1":
      document.getElementById("giamgia").value = "5"+"%";
      document.getElementById("demo").innerHTML = "Bạn được giảm giá 5%";
      tg = Sum() * 5 / 100;
      break;
    case "2":
      document.getElementById("giamgia").value = "10"+"%";
      document.getElementById("demo").innerHTML = "Bạn được giảm giá 10%";
      tg = Sum() * 10 / 100;
      break;
    case "3":
      document.getElementById("giamgia").value = "0"+"%";
      document.getElementById("demo").innerHTML = "Bạn không được giảm giá";
      tg = 0;
      break;
    default:
      document.getElementById("giamgia").value = "0"+"%";
      tg = 0;
  }
  tong = Sum() - tg;
  var tongtien = document.getElementById("sum").value = tong + " vnd";
}
function myfunction() {
  var select = document.getElementById("select");
  var gets = select.options[select.selectedIndex].value;
  var getc = parseInt(gets);
  switch (getc) {
    case 1: {
      document.getElementById("demo").innerHTML = "Thanh toán online bằng Internet Banking hoặc thẻ ATM nội địa để được giảm giá ngay 5%. hổ trợ tất cả ngân hàng, thanh toán an toàn qua cổng VTCPay";
      break;
    }
    case 2: {
      document.getElementById("demo").innerHTML = "Thanh toán online bằng Cổng Thanh Toán để được giảm giá ngay 10%. hổ trợ tất cả ngân hàng";
      break;
    }
    case 3: {
      document.getElementById("demo").innerHTML = "Thanh toán online bằng Cổng Thanh Toán để được giảm giá ngay 10%. hổ trợ tất cả ngân hàng";

      break;
    }
  }
  // document.getElementById('display').innerHTML="You You" + select;
}
 
function load() {

  
}
function check() {
  var name = document.getElementById("hoten").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var ghichu = document.getElementById("ghichu").value;
   document.getElementById("sum").value = tong + " vnd";
    if (name == ""|| phone == ""|| email == ""||address == "") {
      alert("Bạn chưa nhập đầy đủ thông tin")
    }
    else{
      alert("Khách hàng :"+name+"\n"+"Điện Thoại :"+phone+"\n"+"Email :"+email+"\n"+"Địa chỉ :"+address+"\n"+"Ghi chú :"+ghichu+"\n"+"Tổng đơn hàng : "+tong+" VND");
    }
}
