var pageCounter =1;
var wallerContainer = document.getElementById("wallet");
var btn = document.getElementById("btn");

btn.addEventListener("click",function(){
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'data/rankings-' +pageCounter+'.json')
    ourRequest.onload = function(){
        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
    };
    ourRequest.send();
    pageCounter++
    if(pageCounter >1){
    btn.classList.add("hide-me");
    }

});

function renderHTML(data){
    var htmlString = "";
    if(data[1].user_id == localStorage.getItem('nomer')){
        htmlString += '<h2>History<span class="fa fa-history"></h2><div class="cards-list"><div class="card 1"><div class="card_image"><img src="css/avatarfix.jpg" /> </div><div class="card_title title-white"><p>Saldo Akhir</p><p>Rp.' + data[1].saldo_akhir + '</p></div></div></div>'
        for(ii = 0; ii < data[1].history_wallet.length; ii++){
            htmlString += '<div class="cards-list"><div class="card-op"><div class="card-header-op">' + data[1].history_wallet[ii].tanggal +'</div><div class="card-main-op"><i class="material-icons">account_balance_wallet</i><div class="main-description-op">' + data[1].history_wallet[ii].tipe +'<p>Rp.'+ data[1].history_wallet[ii].nominal +'</p>' + data[1].history_wallet[ii].keterangan +'</div></div></div></div>';
        

        }
      

            }else{
                htmlString += '<h2>History<span class="fa fa-history"></h2><div class="cards-list"><div class="card 1"><div class="card_image"><img src="css/avatarfix.jpg" /> </div><div class="card_title title-white"><p>Saldo Akhir</p><p>Rp.' + data[0].saldo_akhir + '</p></div></div></div>'
                for(ii = 0; ii < data[0].history_wallet.length; ii++){
                    htmlString += '<div class="cards-list"><div class="card-op"><div class="card-header-op">' + data[0].history_wallet[ii].tanggal +'</div><div class="card-main-op"><i class="material-icons">account_balance_wallet</i><div class="main-description-op">' + data[0].history_wallet[ii].tipe +'<p>Rp.'+ data[0].history_wallet[ii].nominal +'</p>' + data[0].history_wallet[ii].keterangan +'</div></div></div></div>';
                            

            }
            
        }
    
    
    wallerContainer.insertAdjacentHTML('beforeend', htmlString)

}