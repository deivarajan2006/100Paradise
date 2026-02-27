fetch("products.json")
.then(res=>res.json())
.then(products=>{

let html="";

products.forEach(p=>{

html+=`
<div class="product">
<img src="${p.image}" width="150">
<h3>${p.name}</h3>
<p>₹${p.price}</p>

<a href="upi://pay?pa=7305844171@nyes&pn=100Paradise&am=${p.price}">
<button>Buy with UPI</button>
</a>

</div>
`;

});

document.getElementById("products").innerHTML=html;

});
