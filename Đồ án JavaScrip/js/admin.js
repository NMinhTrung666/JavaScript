  //show bảng sản phẩm trong admin
function showData() {
  
  if (localStorage.getItem('sessionm') == null || localStorage.getItem('sessionw') == null) {
    
    var restoredRaucu = this.data.raucu;
    var restoredTraicay = this.data.traicay;
  } else {
    var restoredRaucu = JSON.parse(localStorage.getItem('sessionm'));
    var restoredTraicay = JSON.parse(localStorage.getItem('sessionw'));
  }

  for (let i=0; i< restoredRaucu.length; i++) {
  var demo= '<tr>';
  demo +=  '<td><p >'+restoredRaucu[i].name+'</p></td>';
  demo += '<td><img src="'+restoredRaucu[i].image+'" class="card-img-top" style="width:100px; height:90px;  margin: 0 auto; padding:10px 0;"></td>';
  demo += '<td><p>'+restoredRaucu[i].price+'</p></td>';
  demo +=  '<td><p>'+restoredRaucu[i].pr+'</p></td>';
  demo +=  '<td><button type="submit" class="btn btn-danger" id="remove" style="margin: 20px 0;" onclick="remove('+i+')">Xoá</button></td>';
  demo +=  '<td><button type="submit" class="btn btn-danger" id="edit" style="margin: 20px 0;" onclick="edit('+i+')">Sửa</button></td>';
   
    document.getElementById("raucu").innerHTML += demo;
  }
  for (let j=0; j<= restoredTraicay.length; j++) {
  var demo= '<tr>';
  demo +=  '<td><p >'+restoredTraicay[j].name+'</p></td>';
  demo += '<td><img src="'+restoredTraicay[j].image+'" class="card-img-top" style="width:100px; height:90px;  margin: 0 auto; padding:10px 0;"></td>';
  demo += '<td><p>'+restoredTraicay[j].price+'</p></td>';
  demo +=  '<td><p>'+restoredTraicay[j].pr+'</p></td>';
  demo +=  '<td><button type="submit" class="btn btn-danger" id="removew" style="margin: 20px 0;" onclick="removew('+j+')">Xoá</button></td>';
  demo +=  '<td><button type="submit" class="btn btn-danger" id="editw" style="margin: 20px 0;" onclick="editw('+j+')">Sửa</button></td>';
   
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
function exit(){
  document.getElementById('sua').style.display='none';
  document.getElementById('add').style.display='block';
  window.location.reload(false);
}

function add(){
  var danhcho=document.getElementById("danhcho").value;
  var rau=document.getElementById("rau").value;
  var trai=document.getElementById("trai").value;
  var name=  document.getElementById("name").value;
  var price=  document.getElementById("price").value;
  var pr=  document.getElementById("pr").value;
  var image=  document.getElementById("image").value;

  if (name == "" || price == "" || image == "") {
    alert("Bạn chưa nhập đầy đủ thông tin", "");
  }
  else {
    if (danhcho == rau) {
      data.raucu.push({id:id++,name,price,pr,image});
      localStorage.setItem('sessionm',JSON.stringify(data.raucu) );
      console.log(localStorage.getItem('sessionm'));
      window.location.reload(false); 
    }else{
      data.traicay.push({id:id++,name,price,pr,image});
      localStorage.setItem('sessionw',JSON.stringify(data.traicay) );    
      console.log(localStorage.getItem('sessionw'));
      window.location.reload(false); 
    }
  }
  window.location.reload(false); 
}
function remove(i){
  var restoredRaucu = JSON.parse(localStorage.getItem('sessionm'));
  var a = restoredRaucu[i];
  for (var j = 0; j < restoredRaucu.length +1; j++) {
    if (a == restoredRaucu[j]) {
      restoredRaucu.splice(j,1);
    } 
  } 

  data.raucu =restoredRaucu ;
  localStorage.setItem('sessionm',JSON.stringify(data.raucu) );
  window.location.reload(false);
}
function removew(j){
  var restoredTraicay = JSON.parse(localStorage.getItem('sessionw'));
  var b= restoredTraicay[j];
  for (var k = 0; k < restoredTraicay.length +1; k++) {
    if (b == restoredTraicay[k]) {
      restoredTraicay.splice(k,1);
    } 
  }
  data.traicay = restoredTraicay ;
  localStorage.setItem('sessionw',JSON.stringify(data.traicay) );
  window.location.reload(false);
}
function edit(i){
  document.getElementById('sua').style.display='block';
  document.getElementById('add').style.display='none';
  var restoredRaucu = JSON.parse(localStorage.getItem('sessionm'));
  var a = restoredRaucu[i];
  for (var x = 0; x < restoredRaucu.length +1; x++) {
    if (a == restoredRaucu[x]) {
      var demo= '<form>';
      demo += '<div class="form-group"><input type="text" class="form-control" value="'+restoredRaucu[x].name+'" id="name_edit"></div>';
      demo += '<div class="form-group"><input type="text" class="form-control" id="price_edit" value="'+restoredRaucu[x].price+'"></div>';
      demo += '<div class="form-group"><input type="text" class="form-control" id="pr_edit" value="'+restoredRaucu[x].pr+'"></div>';
      demo += '<div class="form-group"><input type="text" class="form-control" id="image_edit" value="'+restoredRaucu[x].image+'"></div>';
      demo += '<button type="button" class="btn btn-primary" onclick="sua('+x+')">Submit</button>'
      demo +='<button class="btn btn-primary" id="x" style="margin: 0 10px;" onclick="exit()">thoát</button>';
      demo +='</form>';
      document.getElementById("abc").innerHTML += demo;
    } 
  }
}
function editw(j){
  document.getElementById('sua').style.display='block';
  document.getElementById('add').style.display='none';
  var restoredTraicay = JSON.parse(localStorage.getItem('sessionw'));
  var b = restoredTraicay[j];
  for (var k = 0; k < restoredTraicay.length +1; k++) {
    if (b == restoredTraicay[k]) {
      var demo= '<form>';
      demo += '<div class="form-group"><input type="text" class="form-control" value="'+restoredTraicay[k].name+'" id="name_edit"></div>';
      demo += '<div class="form-group"><input type="text" class="form-control" id="price_edit" value="'+restoredTraicay[k].price+'"></div>';
      demo += '<div class="form-group"><input type="text" class="form-control" id="pr_edit" value="'+restoredTraicay[k].pr+'"></div>';
      demo += '<div class="form-group"><input type="text" class="form-control" id="image_edit" value="'+restoredTraicay[k].image+'"></div>';
      demo += '<button type="button" class="btn btn-primary" onclick="suak('+k+')">Submit</button>'
      demo +='<button class="btn btn-primary" id="x" style="margin: 0 10px;" onclick="exit()">thoát</button>';
      demo +='</form>';
      document.getElementById("abc").innerHTML += demo;
    } 
  }
}
function sua(x){
  var name_edit=  document.getElementById("name_edit").value;
  var price_edit=  document.getElementById("price_edit").value;
  var pr_edit=  document.getElementById("pr_edit").value;
  var image_edit=  document.getElementById("image_edit").value;

  var restoredRaucu = JSON.parse(localStorage.getItem('sessionm'));
  var a = restoredRaucu[x];

  for (var e = 0; e < restoredRaucu.length +1; e++) {
    if (a == restoredRaucu[e]) {
      restoredRaucu[e].name = name_edit;
      restoredRaucu[e].price =price_edit;
      restoredRaucu[e].pr =pr_edit;
      restoredRaucu[e].image =image_edit;
    } 
  }
  data.raucu =restoredRaucu ;
  localStorage.setItem('sessionm',JSON.stringify(data.raucu));
  window.location.reload(false);
}
function suak(k){
  var name_edit=  document.getElementById("name_edit").value;
  var price_edit=  document.getElementById("price_edit").value;
  var pr_edit=  document.getElementById("pr_edit").value;
  var image_edit=  document.getElementById("image_edit").value;

  var restoredTraicay = JSON.parse(localStorage.getItem('sessionw'));
  var b = restoredTraicay[k];
  for (var d = 0; d < restoredTraicay.length +1; d++) {
    if (b == restoredTraicay[d]) {
      restoredTraicay[d].name = name_edit;
      restoredTraicay[d].price = price_edit;
      restoredTraicay[d].pr = pr_edit;
      restoredTraicay[d].image = image_edit;
    } 
  }
  data.traicay =restoredTraicay ;
  localStorage.setItem('sessionw',JSON.stringify(data.traicay));
  window.location.reload(false);
}
