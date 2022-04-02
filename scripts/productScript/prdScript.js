let plusBtn = document.getElementById("plsBtn");
let toDsiplayProducts= document.getElementById("productBtn");
function displayProductDetails(){
    toDsiplayProducts.classList.toggle("active");
}

//Image slider using javascript
var previousImg = document.querySelector(".prev");
var nextImg = document.querySelector(".next");
var imageIndex = 0;
var imagesToSlide = [];
imagesToSlide[0] = './images/wrognActiveTwo.jpeg';
imagesToSlide[1] = './images/slideShowOne.jpeg';
imagesToSlide[2] = './images/slideShowThree.jpeg';
previousImg.addEventListener("click",function(){
    previousImageSlide();
});

nextImg.addEventListener("click", function(){
    nextImage();
})
function previousImageSlide(){
    if(imageIndex < 1){
        imageIndex = imagesToSlide.length - 1;
    }else{
        imageIndex--;
    }
    document.getElementById("cccc").src = imagesToSlide[imageIndex];

}
function nextImage(){
    if(imageIndex == imagesToSlide.length-1){
        imageIndex = 0;
    }else{
        imageIndex++;
    }
    console.log(imageIndex);
    document.getElementById("cccc").src = imagesToSlide[imageIndex];
}

const products = [
    {
        id:1,
        title:"ADIDAS",
        description:"Glarus M Running Sports Shoes For Men (Blue)",
        image:"./images/adidas.jpeg",
        Discountprice:"1,374",
        discount:"45% off",
        OriginalPrice:"2,499",
        rate:"4.0",
        ratings:"111",
        reviews:"⭐⭐⭐",
        color:"Blue",
        outerMaterial:"Mesh",
        modelName:"Glarus M",
        soleMaterial:"EVA",
        packOf:1
    },
    {
        id:2,
        title:"Ciffra",
        description:"STUMPER Rnning Sports Shoes For Men (Blue)",
        image:"./images/ciffraStumper.jpeg",
        Discountprice:"299",
        discount:"70% off",
        OriginalPrice:"999",
        rate:"4.6",
        ratings:"10",
        reviews:"⭐⭐⭐⭐",
        color:"Blue",
        outerMaterial:"EVA",
        modelName:"STUMPER",
        soleMaterial:"EVA",
        packOf:1
    },
    {
        id:3,
        title:"FILA",
        description:"KARTO Sports Running Shoes For Men (Red)",
        image:"./images/filaTwo.jpeg",
        Discountprice:"1,047",
        discount:"58% off",
        OriginalPrice:"2,499",
        rate:"⭐⭐",
        ratings:"89",
        reviews:"14",
        color:"Red",
        outerMaterial:"PU",
        modelName:"KARTO",
        soleMaterial:"IM EVA",
        packOf:1
    },
    {
        id:4,
        title:"PUMA",
        description:"Softride Enzo NXT Running Shoes For Men (Black)",
        image:"./images/puma.jpeg",
        Discountprice:"3,299",
        discount:"40% off",
        OriginalPrice:"5,499",
        rate:"4.1",
        ratings:"⭐⭐⭐",
        reviews:"1",
        color:"Black",
        outerMaterial:"Mesh",
        modelName:"Softride Enzo NXT",
        soleMaterial:"Rubber",
        packOf:1
    },
    {
        id:5,
        title:"WROGN ACTIVE",
        description:"Running Sports Shoes For Men (Maroon)",
        image:"./images/wrognactivetwo.jpeg",
        Discountprice:"1,047",
        discount:"58% off",
        OriginalPrice:"2,499",
        rate:"3.3",
        ratings:"6",
        reviews:"⭐⭐⭐⭐",
        color:"Maroon",
        outerMaterial:"Mesh, Synthetic",
        modelName:"STUMPER",
        occasion:"Sports",
        soleMaterial:"EVA",
        packOf:2
    },
    {
        id:6,
        title:"Sketchers",
        description:"Ultra Groove - Live Seesion Casuals For Men (Navy)",
        Discountprice:"4,799",
        image:"./images/sketchers.jpeg",
        discount:"0% off",
        OriginalPrice:"0",
        rate:"4.3",
        ratings:"21",
        reviews:"⭐⭐⭐⭐⭐",
        color:"Navy",
        outerMaterial:"Mesh",
        modelName:"Ultra Groove - Live Session",
        occasion:"Casual",
        soleMaterial:"EVA",
        packOf:1
    },
    {
        id:7,
        title:"PUMA",
        description:"Supertec Zero Running Shoes For Men (Green)",
        Discountprice:"3,599",
        image:"./images/pumaThree.jpeg",
        discount:"40% off",
        OriginalPrice:"5,999",
        rate:"4.1",
        ratings:"",
        reviews:"⭐⭐⭐",
        color:"Green",
        outerMaterial:"Mesh",
        modelName:"Supertec Zero",
        occasion:"Sports",
        soleMaterial:"EVA",
        packOf:1
    },
    {
        id:8,
        title:"PUMA",
        description:"Zod Runner NM Running Shoes For Men (Blue)",
        Discountprice:"2,399",
        image:"./images/pumaTwo.jpeg",
        discount:"40% off",
        OriginalPrice:"3,999",
        rate:"⭐⭐⭐⭐⭐",
        ratings:"895",
        reviews:"80",
        color:"Blue",
        outerMaterial:"Mesh",
        modelName:"Zod Runner NM",
        soleMaterial:"Rubber",
        packOf:1
    }
]



//Update product details
function updateProductDetails(productId){
    var product = products.find(function(item,index){
        return item.id === productId
    });
    document.getElementById("productTitle").innerText = product.title;
    document.getElementById("pDescription").innerText = product.description;
    document.getElementById("pDicPrice").innerText = product.Discountprice;
    document.getElementById("pRating").innerText = product.ratings;
    document.getElementById("pReviews").innerText = product.reviews;
    document.getElementById("prColor").innerText = product.color;
    document.getElementById("prOM").innerText = product.outerMaterial;
    document.getElementById("prMN").innerText = product.modelName;
    document.getElementById("prSM").innerText = product.soleMaterial;
    document.getElementById("prPO").innerText = product.packOf;
    
    updateRecentlyViewed(product);
    updateCart(product);
}

function changeImage(obj){
    document.getElementById("leftImgMain").src = obj.src;
    document.getElementsByClassName("productLeftImageItems")[0].src = obj.src;
    document.getElementsByClassName("productColorImage")[0].src = obj.src;
    document.getElementById("cccc").src = obj.src;
}

 function mouserHover(obj){
     document.getElementById("leftImgMain").src = obj.src;
}

//Customer reviews drop down
function openReviewDropDown(){
    document.getElementById("reveiwMain").classList.toggle("crReviewActive");
    document.getElementById("ggggg").classList.toggle("reviewDropActive");
    document.getElementById("moreAncho").classList.toggle("dAnchorActive");
}

//open drop down menu for product sizes
function displaySize(){
    document.getElementById("prdSize").classList.toggle("activeSize");
}
function updateSize(ob){
    let sizeContentHolder = document.getElementById("sizeCont");
    let sizeCurrValue = document.getElementById("sizeValue");
    sizeContentHolder.innerText = "Selected Size : ";
    sizeCurrValue.innerText = ob.innerText;
    closeSizeDropDown();
}
function closeSizeDropDown(){
    document.getElementById("prdSize").classList.remove("activeSize");
}

//Change heart color
function changeHeartColor(){
    document.getElementById("chHeartColor").classList.toggle("heartActive");
}

//Open size chart modal
function openSizeChart(){
    document.getElementById("pSizeChart").classList.add("pSizeChartActive");
}
function closeSizeChart(){
    document.getElementById("pSizeChart").classList.remove("pSizeChartActive");
}
//validate pin code and deliver address
function validatePinCode(){
    let pinCode = document.getElementById("pinCodeVal").value;
    pinCode = pinCode.toString().length;
    console.log(pinCode)
    let correctPin = document.getElementById("toReplce");
    let wrongPin = document.getElementById("toReplceWrong");
    if(pinCode<6){
        wrongPin.innerText = "Wrong Pin should have exact six digits."
        correctPin.innerText = "";
    }else if(pinCode>6){
        wrongPin.innerText = "Wrong Pin should have exact six digits."
        correctPin.innerText = ""; 
    }else{
        correctPin.innerText = "Delivery by 10 Apr, Friday."
        wrongPin.innerText = "";
    }
}

// Recently viewed products

let recentCard = `
    <div class="it" >
        <div class="productImgContainer">
            <img class="productImage" id="CDD"   src="./images/fila.jpeg" alt="adidas""/>
        </div>
        <div class="productDetails">
            <h4 class="productTitle">FILA</h4>
            <p class="productDescription">IZUNA Running Sprts Shoes For Men (Grey)</p>
            <div class="productPrices">
                <h5 class="pPrice">₹1,295</h5>
                <p class="pDup" style="text-decoration: line-through;">₹2,699</p>
                <small class="pDiscount">52% off</small>
            </div>
        </div>
    </div>
`; 
let currentCard ;
let recentArray = [];
recentArray.push(1);
function updateRecentlyViewed(currViewed){
   
         currentCard = `
        <div class="it">
            <div class="productImgContainer">
                <img class="productImage" src="${currViewed.image}" alt="adidas""/>
            </div>
            <div class="productDetails">
                <h4 class="productTitle">${currViewed.title}</h4>
                <p class="productDescription">${currViewed.description}</p>
                <div class="productPrices">
                    <h5 class="pPrice">₹${currViewed.Discountprice}</h5>
                    <p class="pDup" style="text-decoration: line-through;">₹${currViewed.OriginalPrice}</p>
                    <small class="pDiscount">${currViewed.discount}% off</small>
                </div>
            </div>
        </div>    
        `;
        recentCard = currentCard + recentCard;
        document.getElementById("recentt").innerHTML = recentCard;

}

//Update Cart
function updateCart(curProduct){
    let currentProduct = `
    <div class="psCartContainerInner" id="cartId" >
        <div class="psCartImgConter">
            <img class="psCartImg" src="${curProduct.image}" alt="fila"/>
        </div>
        <div class="psCartContent">
            <p class="psCartTittle">${curProduct.title}</p>
            <p class="psCartTitleDescription">${curProduct.description}</p>
            <p class="psCartSize">Size : <span class="psSize">8</span></p>
            <div class="productDetails">
                <h5 class="pPrice">${curProduct.Discountprice}</h5>
                <p class="pDup" style="text-decoration: line-through;">${curProduct.OriginalPrice}</p>
                <small class="pDiscount">${curProduct.discount}</small>
            </div>
            <div class="psCartBottom">
                <p class="psLinkeOne">SAVE FOR LATER</p>
                <p class="psLinkeOne" oncllick="closeCart()">REMOVE</p>
            </div>
        </div>
    </div>
    `;
    document.getElementById("cartId").innerHTML = currentProduct;
}

//Give rating and review for products
let reviewModal = document.getElementById("cRModl");
function displayReviewModal(){
    reviewModal.classList.toggle("activeModal");
}

 function addNewRate(){

    // Creating tags for evey element
    let cot = document.getElementById("gg");
    let reviewContainer = document.createElement("div");
    let topPart = document.createElement("div"); 
    let start = document.createElement("p");
    let reviewComment = document.createElement("p");
    let userDtialCotner = document.createElement("div");
    let userName = document.createElement("p");
    let likesConter = document.createElement("div");
    let likecontr = document.createElement("div");
    let like = document.createElement("i");
    let likeNum = document.createElement("span");
    let dislikeContr = document.createElement("div");
    let dislike = document.createElement("i");
    let dislikeNum = document.createElement("span");
    const d = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
     // Adding class names
     reviewContainer.className ="crReviewContainer";
     topPart.className = "crReviewTitle";
     start.className = "crRatngStar";
     reviewComment.className = "crRatngReviw";
     userDtialCotner.className = "crlikesDisklikes";
     userName.className = "crlikeDislkeTitle";
     likesConter.className = "crlkdkContainer";
     likecontr.className = "crlkdkLeft";
     like.className = "fa fa-thumbs-up iconnnnLike clickLike";
     likeNum.className = "ttt";
     dislikeContr.className = "crlkdkLeft";
     dislike.className = "fa fa-thumbs-down iconnnnDislike clickDisLike";
     dislikeNum.className = "ttt";

    //Setting value
    // start.innerText = ob.innerText+"*";
     let date = d.getDate() +" " + months[d.getMonth()]+ " " + d.getFullYear();
     console.log(date);
     reviewComment.innerText = document.getElementById("review").value;
     userName.innerText = document.getElementById("usn").value+ " " + " | " + date;
     likeNum.innerText = 0;
     dislikeNum.innerText = 0;

    cot.insertAdjacentElement("afterbegin", reviewContainer);
    reviewContainer.append(topPart,userDtialCotner);
    topPart.append(start, reviewComment);
    userDtialCotner.append(userName, likesConter);
    likesConter.append(likecontr,dislikeContr);
    likecontr.append(like, likeNum);
    like.appendChild(likeNum);
    dislikeContr.append(dislike, dislikeNum);
    dislike.appendChild(dislikeNum);
    displayReviewModal();
 };
function removeColor(obj){
//    addNewRate(obj);
    obj.classList.toggle("act");
}

//likes and disLIKES
let val = 0;
function incrementLike(){
    val = this.children[0].innerText;
    console.log(val);
    val++;
    console.log(val);
    this.children[0].innerText = val;
}
window.onload = function(){
    document.querySelectorAll(".clickLike").forEach(el =>{
        el.addEventListener('click',incrementLike)
    });
    document.querySelectorAll(".clickDisLike").forEach(el=>{
        el.addEventListener("click",incrementLike)
    });
}


//product cart
let productCartModal = document.getElementById("ggg");
function openCart(){
    productCartModal.classList.add("cdal");
}
function closeCart(){
    productCartModal.classList.remove("cdal");
}
function displayColor(obj){
    obj.classList.toggle("sizeActive");
}