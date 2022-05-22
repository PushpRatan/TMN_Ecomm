function addFirst(){
    document.getElementById('one').classList.add('personalCardActive');
    document.getElementById('on').classList.add('active');

}
//code for navbar
function navbarrr(){
    document.getElementById('navvvv').classList.add('navvSideNavActive');
}
function closeNavbarr(){
    document.getElementById('navvvv').classList.remove('navvSideNavActive');
}
//code for side nav
function displaySideNav(){
    document.getElementById('sdd').classList.add('sideNavActive');
    // document.body.style.backgroundColor='rgba(0,0,0,0.8)';
}
function closeeeSideNav(){
    document.getElementById('sdd').classList.remove('sideNavActive');
}
function displayy(idd){
    if(idd===1){
        document.getElementById('one').classList.add('personalCardActive');
        document.getElementById('on').classList.add('active');
        document.getElementById('tw').classList.remove('active');
        document.getElementById('th').classList.remove('active');
        document.getElementById('fu').classList.remove('active');
        document.getElementById('fi').classList.remove('active');
        document.getElementById('si').classList.remove('active');
        document.getElementById('two').classList.remove('wishlistCardActive');
        document.getElementById('three').classList.remove('ordersCardActive');
        document.getElementById('four').classList.remove('savedCardActive');
        document.getElementById('five').classList.remove('savedsCardActive');
        document.getElementById('six').classList.remove('creditCardActive');
        closeeeSideNav();
    }else if(idd===2) {
        document.getElementById('one').classList.remove('personalCardActive');
        document.getElementById('two').classList.add('wishlistCardActive');
        document.getElementById('on').classList.remove('active');
        document.getElementById('tw').classList.add('active');
        document.getElementById('th').classList.remove('active');
        document.getElementById('fu').classList.remove('active');
        document.getElementById('fi').classList.remove('active');
        document.getElementById('si').classList.remove('active');
        document.getElementById('three').classList.remove('ordersCardActive');
        document.getElementById('four').classList.remove('savedCardActive');
        document.getElementById('five').classList.remove('savedsCardActive');
        document.getElementById('six').classList.remove('creditCardActive');
        closeeeSideNav();
    }else if(idd===3){
        document.getElementById('one').classList.remove('personalCardActive');
        document.getElementById('two').classList.remove('wishlistCardActive');
        document.getElementById('three').classList.add('ordersCardActive');
        document.getElementById('on').classList.remove('active');
        document.getElementById('tw').classList.remove('active');
        document.getElementById('th').classList.add('active');
        document.getElementById('fu').classList.remove('active');
        document.getElementById('fi').classList.remove('active');
        document.getElementById('si').classList.remove('active');
        document.getElementById('four').classList.remove('savedCardActive');
        document.getElementById('five').classList.remove('savedsCardActive');
        document.getElementById('six').classList.remove('creditCardActive');
        closeeeSideNav();
    }else if(idd===4){
        document.getElementById('one').classList.remove('personalCardActive');
        document.getElementById('two').classList.remove('wishlistCardActive');
        document.getElementById('three').classList.remove('ordersCardActive');
        document.getElementById('four').classList.add('savedCardActive');
        document.getElementById('on').classList.remove('active');
        document.getElementById('tw').classList.remove('active');
        document.getElementById('th').classList.remove('active');
        document.getElementById('fu').classList.add('active');
        document.getElementById('fi').classList.remove('active');
        document.getElementById('si').classList.remove('active');
        document.getElementById('five').classList.remove('savedsCardActive');
        document.getElementById('six').classList.remove('creditCardActive');
        closeeeSideNav();
    }else if(idd===5){
        document.getElementById('one').classList.remove('personalCardActive');
        document.getElementById('two').classList.remove('wishlistCardActive');
        document.getElementById('three').classList.remove('ordersCardActive');
        document.getElementById('four').classList.remove('savedCardActive');
        document.getElementById('five').classList.add('savedsCardActive');
        document.getElementById('on').classList.remove('active');
        document.getElementById('tw').classList.remove('active');
        document.getElementById('th').classList.remove('active');
        document.getElementById('fu').classList.remove('active');
        document.getElementById('fi').classList.add('active');
        document.getElementById('si').classList.remove('active');

        document.getElementById('six').classList.remove('creditCardActive');
        closeeeSideNav();
    }else if(idd===6){
        document.getElementById('one').classList.remove('personalCardActive');
        document.getElementById('two').classList.remove('wishlistCardActive');
        document.getElementById('three').classList.remove('ordersCardActive');
        document.getElementById('four').classList.remove('savedCardActive');
        document.getElementById('five').classList.remove('savedsCardActive');
        document.getElementById('six').classList.add('creditCardActive');
        document.getElementById('on').classList.remove('active');
        document.getElementById('tw').classList.remove('active');
        document.getElementById('th').classList.remove('active');
        document.getElementById('fu').classList.remove('active');
        document.getElementById('fi').classList.remove('active');
        document.getElementById('si').classList.add('active');
        closeeeSideNav();
    }

}

//Edit Profile Details Script
function openPersonalModal(){
    document.getElementById('addresModalCardd').classList.add('addressCardActive');
    getProfileDetails();
}
function closePersonalModal(){
    document.getElementById('addresModalCardd').classList.remove('addressCardActive');
    updateProfileDetails();
}

//Get Profile Details Script
function getProfileDetails(){
    document.getElementById('numm').value = document.getElementById('pName').innerText;
    document.getElementById('namm').value = document.getElementById('pPhone').innerText;
    document.getElementById('statee').value = document.getElementById('pEmail').innerText;
    document.getElementById('gende').value = document.getElementById('pGender').innerText;
    document.getElementById('dooob').value = document.getElementById('pDob').innerText;
    document.getElementById('locan').value = document.getElementById('pLocation').innerText;
    document.getElementById('hintn').value = document.getElementById('pHint').innerText;
}

//Update profile Details Script
function updateProfileDetails(){
    document.getElementById('pName').innerText = document.getElementById('numm').value;
    document.getElementById('pPhone').innerText = document.getElementById('namm').value;
    document.getElementById('pEmail').innerText = document.getElementById('statee').value;
    document.getElementById('pGender').innerText = document.getElementById('gende').value;
    document.getElementById('pDob').innerText = document.getElementById('dooob').value;
    document.getElementById('pLocation').innerText = document.getElementById('locan').value;
    document.getElementById('pHint').innerText = document.getElementById('hintn').value;
}

//Saved Card Modal Script1
function openCardModal(){
    document.getElementById('cardModalContainer').classList.add('cardActive');
    document.getElementById('bName').value = "";
    document.getElementById('bNum').value = "";
    document.getElementById("bCName").value = "";
    document.getElementById("bcHnam").value = "";
    document.getElementById("bmon").value = "";
}
function closeCardModal(){
    document.getElementById('cardModalContainer').classList.remove('cardActive');
    addNewCardModal();
    // updateCardDetails();
}
function closeCardModal1(){
    document.getElementById('cardModalContainer').classList.remove('cardActive');
}
function removeCardModal(){
    document.getElementById('game').innerHTML=" ";
    document.getElementById('game').style.border="none";
}


//Saved Card Modal Script2
function openCarddModal(){
    document.getElementById('cardModalContainerr').classList.add('cardActivve');
    getCardDetails();
}
function closeCarddModal(){
    document.getElementById('cardModalContainerr').classList.remove('cardActivve');
    updateCardDetails();
}
//Add New Saved Card Script
function addNewCardModal(){
    let bankName = document.getElementById('bName').value;
    let cardNumber = document.getElementById('bNum').value;
    let cardName = document.getElementById("bCName").value;
    let cardHolderName = document.getElementById("bcHnam").value;
    let expireMonth = document.getElementById("bmon").value;
    let newCar = `
        <div class="savedDetails" id="game" style="margin-top:.8rem">
            <div class="savedCardHeader">
                <h6 class="sCNae" id="bNme">${bankName}</h6>
                <p class="scType" id="bcNme">${cardName}</p>
            </div>
            <p class="scNumber" id="bNm">${cardNumber}</p>
            <div class="scUserDetails">
                <h6 class="scUserName" id="bcHnum">${cardHolderName}</h6>
                <div class="cardValidity">
                    <p class="val">Validity</p>
                    <p class="va" id="bmn">${expireMonth}</p>
                </div>
            </div>
            <div class="cardButtons">
                <button type="button" class="btn btn1" onclick="openCarddModal()">EDIT</button>
                <button type="button" class="btn btn2" onclick="removeCardModal()">REMOVE</button>
            </div>
        </div>
    `;
    const di = document.getElementById('game');
    di.insertAdjacentHTML('afterend',newCar);
}

//Get Saved Card Details Script
function getCardDetails(){
    document.getElementById('bNamee').value = document.getElementById('bNme').innerText;
    document.getElementById('bNume').value = document.getElementById('bNm').innerText;
    document.getElementById('bCNamee').value = document.getElementById('bcNme').innerText;
    document.getElementById('bcHname').value = document.getElementById('bcHnum').innerText;
    document.getElementById('bmone').value = document.getElementById('bmn').innerText;
}

//Update Saved Card Details Script
function updateCardDetails(){
    document.getElementById('bNme').innerText = document.getElementById('bNamee').value;
    document.getElementById('bcNme').innerText = document.getElementById('bCNamee').value;
    document.getElementById('bNm').innerText = document.getElementById('bNume').value;
    document.getElementById('bcHnum').innerText = document.getElementById('bcHname').value;
    document.getElementById('bmn').innerText = document.getElementById('bmone').value;
}

//Address Modal Script1
function openAddressModal(){
    document.getElementById('addresModalCard').classList.add('addressCardActive');
}
function closeAddressModal(){
    document.getElementById('addresModalCard').classList.remove('addressCardActive');
    addAddressModal();
}
function closeAddressModal3(){
    document.getElementById('addresModalCard').classList.remove('addressCardActive');
}

//Address Modal Script2
function openAddressModal1(){
    document.getElementById('addresModalCarddd').classList.add('addressCardActiveee');
    getAddressDetails();
}
function updateAddresModal1(){
    document.getElementById('addresModalCarddd').classList.remove('addressCardActiveee');
    updateAddressDetails();
}
function closeAddressModal2(){
    document.getElementById('addresModalCarddd').classList.remove('addressCardActiveee');
}
function removeAddressModal(){
    document.getElementById('adddd').innerText = " ";
    document.getElementById('adddd').style.border = "none";
}

//add address modal to html
function addAddressModal(){
    let userName = document.getElementById('num').value;
    let userMobile = document.getElementById('nam').value;
    let userAddress = document.getElementById('addr').value;
    let pinCodde = document.getElementById("pin").value;
    let stateee = document.getElementById("stte").value;
    let city = document.getElementById('cit').value;
    let addresCard = `
        <div class="savedDetails addresDe" id="adddd">
            <div style="display: flex;justify-content: space-between; align-items: center; padding: 0 .4rem 0 0;">
                <h6 class="addressTitle" id="adName">${userName}</h6>
                <p style="font-size: .79rem" id="adMob">${userMobile}</p>
            </div>
            <p class="addressCaption" id="adOffice">Office</p>
            <p class="addressDetails" id="adAddres">${userAddress}</p>
            <div style="display: flex;justify-content: space-between;align-items: center;">
                <p class="statePin" id="adState">${stateee}- <span id="adPin" class="pinCode">${pinCodde}</span></p>
                <p style="font-size: .88rem; padding-right: .5rem;" id="cc">${city}</p>
            </div>
            <div class="cardButtons">
                <button type="button" class="btn btn1" onclick="openAddressModal1()">EDIT</button>
                <button type="button" class="btn btn2" onclick="removeAddressModal()">REMOVE</button>
            </div>
        </div>
    `;
    const addi = document.getElementById('adddd');
    addi.insertAdjacentHTML('afterend',addresCard);
}

function getAddressDetails(){
    document.getElementById('numo').value = document.getElementById('adName').innerText;
    document.getElementById('namo').value = document.getElementById('adMob').innerText;
    document.getElementById('pino').value = document.getElementById('adPin').innerText;
    document.getElementById('stteo').value = document.getElementById('adState').innerText;
    document.getElementById('addro').value = document.getElementById('adAddres').innerText;
    document.getElementById('cityo').value = document.getElementById('cc').innerText;
}
function updateAddressDetails(){
    document.getElementById('adName').innerText = document.getElementById('numo').value;
    document.getElementById('adMob').innerText = document.getElementById('namo').value;
    document.getElementById('adPin').innerText = document.getElementById('pino').value;
    document.getElementById('adState').innerText = document.getElementById('stteo').value;
    document.getElementById('adAddres').innerText = document.getElementById('addro').value;
    document.getElementById('cc').innerText = document.getElementById('cityo').value;
}