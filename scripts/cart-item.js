var num_of_products = 2;
        var sub_total = 1000;
        
        function openSideNav(){
            
            document.getElementById("toggleBar").classList.add("activee");
            document.getElementById("open").classList.add("notActive");
            document.getElementById("close").classList.add("activeee");
          }
          
          function closeSideNav(){
        
            document.getElementById("toggleBar").classList.remove("activee");
            document.getElementById("close").classList.remove("activeee");
            document.getElementById("open").classList.remove("notActive");
          }
          
          function MDrop(){
            document.getElementById("MDrop").classList.add("drp");
          }
          function CMDrop(){
            document.getElementById("MDrop").classList.remove("drp");
          }
          function WDrop(){
            document.getElementById("WDrop").classList.add("drp");
          }
          function CWDrop(){
            document.getElementById("WDrop").classList.remove("drp");
          }
          function TDrop(){
            document.getElementById("TDrop").classList.add("drp");
          }
          function CTDrop(){
            document.getElementById("TDrop").classList.remove("drp");
          }
          function KDrop(){
            document.getElementById("KDrop").classList.add("drp");
          }
          function CKDrop(){
            document.getElementById("KDrop").classList.remove("drp");
          }

        $(document).ready(function() {
            $(".heart").click(function(){
                if($(this).hasClass("liked")){
                $(this).html('<i class="fa fa-heart-o" aria-hidden="true"></i>');
                $(this).removeClass("liked");
                }else{
                $(this).html('<i class="fa fa-heart" aria-hidden="true"></i>');
                $(this).addClass("liked");
                }
            });

        $('.Flex-Down input').change(function() {
            updateQuantity(this);
        });

        $('.Remove-Button').click(function() {
            removeItem(this);
        });


        function recalculateCart() {
        var subtotal = 0;
        var discount = 0;
        $('.Item-Info').children(".Row").children(".Total-Price").children(".Total-Item-Price").each(function() {
            subtotal += parseFloat($(this).text());
            console.log(subtotal)
        });
        
        $('.Summary-Answer-Para').fadeOut(function() {
            $('.Summary-Answer-Para').text(subtotal.toFixed(2));
            $('.Summary-Answer-Para').fadeIn();
        });

        $('.Summary-Answer-Total').fadeOut(function(){
            discount += parseFloat($(".Discount-Price").text());
            $(this).text((subtotal-discount).toFixed(2));
            $('.Summary-Answer-Total').fadeIn();
        })
    
        }

        function updateQuantity(quantityInput) {
        var productRow = $(quantityInput).parent().parent();
        var price = parseFloat(productRow.children(".Item-Price").children(".Item-Price-Para").text());
        console.log("Price - " + price)
        var quantity = $(quantityInput).val();
        var linePrice = price * quantity;

        productRow.children(".Row").children(".Total-Price").children(".Total-Item-Price").each(function() {
            $(this).fadeOut(function() {
            $(this).text(linePrice.toFixed(2));
            recalculateCart();
            $(this).fadeIn();
            });
        });
        }

        function removeItem(removeButton) {
        var productRow = $(removeButton).parent();
        productRow.slideUp(0.5 , function() {
            productRow.remove();
            recalculateCart();
            num_of_products-=1
            $(".Title p").text(num_of_products)
        });
        }

        });