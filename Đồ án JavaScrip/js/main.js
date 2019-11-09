var id=0;
id++;
var data= {
   raucu : [
  {
    id:id++,
    name: "Cải bó xôi hữu cơ (Rau chân vịt) 350g",
    price: "30.000" ,
    pr: "" ,
    image:"https://product.hstatic.net/1000333483/product/upload_ab2003c7b7e445f6a551b92f559c4881_master.jpg"
  },
  {
    id:id++,
    name: "Rau muống (500gram)",
    price: "18.000" ,
    pr: "" ,
    image:"https://tieudungxanh.vn/wp-content/uploads/2019/04/Rau-mu%E1%BB%91ng-Tieudungxanh.vn_.gif"
  },
  { 
    id:id++,
    name: "Cải Xoong Nhật 500gr",
    price: "30.000" ,
    pr: "35.000" ,
    image:"https://www.antamgia.com/wp-content/uploads/2017/07/xa-lach-nhat.jpg"
  },
  { 
    id:id++,
    name: "Rau cải thảo",
    price: "40.000" ,
    pr: "" ,
    image:"http://vuahatgiong.com/wp-content/uploads/2015/04/cai-thao.jpg"
  },
],
  traicay :[
  {
    id:id++,
    name: "Bơ Mỹ",
    price: "50.000" ,
    pr: "" ,
    image:"http://tiki.vn/tu-van/wp-content/uploads/2017/01/anh1.jpg"
  },
  {
    id:id++,
    name: "Táo Mỹ",
    price: "60.000" ,
    pr: "" ,
    image:"https://smartfruits.vn/wp-content/uploads/2019/03/5-cong-thuc-tuyet-voi-de-che-bien-tao-my.jpg"
  },
  { 
    id:id++,
    name: "Nho Đen không hạt Mỹ",
    price: "100.000" ,
    pr: "" ,
    image:"https://vinfruits.com/wp-content/uploads/2016/12/Nho-den-khong-hat-My-vinfruits.com-3.jpg"
  },
  { 
    id:id++,
    name: "Nho mẫu đơn Shine Muscat Nhật",
    price: "150.000" ,
    pr: "" ,
    image:"https://vinfruits.com/wp-content/uploads/2016/12/Nho-mau-don-Shine-Muscat-Nhat-Ban-vinfruits.com-3.jpg"
  }
]
}
  
if (localStorage.getItem('sessionw') == null) {
  localStorage.setItem('sessionw',JSON.stringify(data.traicay) );
} else {
  data.traicay = (localStorage.getItem('sessionw'));
}

if (localStorage.getItem('sessionm') == null ) {
  localStorage.setItem('sessionm',JSON.stringify(data.raucu));
} else {
  data.raucu = JSON.parse(localStorage.getItem('sessionm'));
}





function listProducts() {
  
  if (localStorage.getItem('sessionm') == null || localStorage.getItem('sessionw') == null) {
    
    var restoredRaucu = this.data.raucu;
    var restoredTraicay = this.data.traicay;
  } else {
    var restoredRaucu = JSON.parse(localStorage.getItem('sessionm'));
    var restoredTraicay = JSON.parse(localStorage.getItem('sessionw'));
  }

}


