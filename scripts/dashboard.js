function addFirst(){
    document.getElementById('one').classList.add('personalCardActive');
    document.getElementById('on').classList.add('active');

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
    }

}
//Address Modal Script
function openAddressModal(){
    document.getElementById('addresModalCard').classList.add('addressCardActive');
}
function closeAddressModal(){
    document.getElementById('addresModalCard').classList.remove('addressCardActive')
}

//C0ard Modal Script
function openCardModal(){
    document.getElementById('cardModalContainer').classList.add('cardActive');
}
function closeCardModal(){
    document.getElementById('cardModalContainer').classList.remove('cardActive');
}
