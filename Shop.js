$(document).ready(function() {


    //MULTI-PAGE LOGO ANIMATION
    $('#logoMain').slideUp(1000).slideDown(2000);

    //CART BUTTONS TRIGGER CART DISPLAY
    $('.btn').click(function() {
        $('#hideCart').slideDown(1000);
    })

    //ARRAY DEC
    let watchPricesArray = [4999, 1599, 2899, 5299, 1999, 7499]
    let cartTotal = [];


    //ADD TO CART
    $("#buttonOne").click(function() {


        cartTotal.push(watchPricesArray[0]);
        $("#checkoutBtn").before("<h5><p>Fitbit Ionic - R4999</h5>" + "<br/>");
        $("#qtyBtn").text("Items" + "(" + cartTotal.length + ")")


    })

    //ADD TO CART

    $("#buttonTwo").click(function() {

        cartTotal.push(watchPricesArray[1]);
        $("#checkoutBtn").before("<h5>Fitbit Inspire - R1599</h5>" + "<br/>");
        $("#qtyBtn").text("Items" + "(" + cartTotal.length + ")")

    })


    //ADD TO CART
    $("#buttonThree").click(function() {

        $("#checkoutBtn").before("<h5>Fitbit Charge 3 - R2899</h5>" + "<br/>");
        cartTotal.push(watchPricesArray[2]);
        $("#qtyBtn").text("Items" + "(" + cartTotal.length + ")")


    })

    //ADD TO CART
    $("#buttonFour").click(function() {

        $("#checkoutBtn").before("<h5>Garmin Forerunner 935 - R5299</h5>" + "<br/>");
        cartTotal.push(watchPricesArray[3]);
        $("#qtyBtn").text("Items" + "(" + cartTotal.length + ")")


    })

    //ADD TO CART
    $("#buttonFive").click(function() {

        $("#checkoutBtn").before("<h5>Garmin Vivofit 4 - R1999</h5>" + "<br/>");
        cartTotal.push(watchPricesArray[4]);
        $("#qtyBtn").text("Items" + "(" + cartTotal.length + ")")


    })

    //ADD TO CART
    $("#buttonSix").click(function() {

        $("#checkoutBtn").before("<h5>Garmin Fenix 6 - R7499</h5>" + "<br/>");
        cartTotal.push(watchPricesArray[5]);
        $("#qtyBtn").text("Items" + "(" + cartTotal.length + ")")


    })

    //DELETE CART
    $('#checkoutDelete').click(function() {

        alert("You are about to remove " + cartTotal.length + " items from your cart")
        location.reload();
    })


    //CALCULATE SUM OF CART
    $("#checkoutBtn").click(function() {

        let sum = cartTotal.reduce(function(a, b) {
            return a + b;
        }, 0);
        console.log(sum)

        let space = "<br/>"

        $('#hideShipping').slideDown(1000);

        //DISPLAY SUM   
        $("#cartDisplay").append(space + "<h1>" + "R" + sum + "</h1>");

        $('#payItemTotal').text("Cart - R" + sum);

        //SHIPPING  
        $('#shippingBtn').click(function() {

            let fName = $("#customerName").val();
            let fNumber = $("#customerNumber").val();
            let fAddress = $("#customerAddress").val();
            let fShipping = $("input[name='shipping']:checked").val();

            //VALIDATES SHIPPING FORM ENTRY & SHIPPING COST
            if (fName && fNumber && fAddress != "") {

                if (fShipping) {
                    $('#shipItemTotal').text("Shipping - R250");
                    var shippingCost = 250;

                } else {

                    $('#shipItemTotal').text("Shipping - R0 (Customer to collect)");
                    var shippingCost = 0;
                }

                //CALCULATES CART TOTAL
                sum = cartTotal.reduce(function(a, b) {
                    return a + b;
                }, 0);
                console.log(sum)

                //DISPLAYS CART TOTAL 
                var totalPay = sum + shippingCost
                $('#totalTotal').text("R" + totalPay);

                $('#hidePay').slideDown(1000);

                //CONFIRMS WITH USER A DISCOUNT CODE OPTION
                alert(`Thank you ${fName}. 
Please use the discount code "hyperion" for a 10% discount`)
                console.log(fName + fNumber + fAddress + fShipping)

                //CONDITIONAL DEFAULT FOR NO SHIPPING INFO
            } else {

                alert("Unfortunately, we cant ship your product without all your details")
            }

            //APPLY DISCOUNT COUPON
            $('#discountBTN').click(function() {

                let discountCode = $('#discountCode').val();

                if (discountCode == "hyperion") {

                    let totalPay = (sum + shippingCost) * 0.9;
                    totalPay = Math.round(totalPay);
                    $('#totalTotal').text("R" + totalPay);
                    $('#discountBTN').text("approved").css({ "backgroundColor": "#5cb85c" });

                } else {

                    let totalPay = sum + shippingCost
                    $('#totalTotal').text("R" + totalPay);
                    $('#discountBTN').text("not - approved").css({ "backgroundColor": "#d9534f" });

                }

                //CONSOLE TEST LOG
                console.log(sum + shippingCost);

            })

        })

    })

    //PAY BUTTON GENERATES UNIQUE REFERENCE NUMBER FOR CUSTOMER
    $("#payBtn").click(function() {

        let refNumber = (Math.random() * 100000) + 1;
        refNumber = Math.round(refNumber);

        alert(`Thank you for your purchase. 
Your reference number is: JS${refNumber}#`);

        location.reload()
    })

    //CONTACT FORM
    $("#submitBTN").click(function() {

        let cName = $("#cName").val();
        let cSname = $("#cSname").val();
        let emailA = $("#emailA").val();
        let cellno = $("#cellno").val();
        let commOptMail = $("input[name='mail']:checked").val();
        let commOptPhone = $("input[name='phone']:checked").val();
        let commOptText = $("input[name='text']:checked").val();
        let formOutput;

        //CONDITION OF SUBMISSION
        if (cName && cSname && emailA && cellno != "") {


            if (commOptMail) {

                formOutput = (`Thank you for your enquiry. We will be in touch! 
Name: ${cName} 
Surname: ${cSname}  
Email: ${emailA}  
Contact No: ${cellno}  
Preferred Communication Channel (First Choice): ${commOptMail}`);
                alert(formOutput);
                location.reload();

            } else if (commOptPhone) {

                formOutput = (`Thank you for your enquiry. We will be in touch! 
Name: ${cName} 
Surname: ${cSname}  
Email: ${emailA}  
Contact No: ${cellno}  
Preferred Communication Channel (First Choice): ${commOptPhone}`);
                alert(formOutput);
                location.reload();

            } else if (commOptText) {

                formOutput = (`Thank you for your enquiry. We will be in touch! 
Name: ${cName} 
Surname: ${cSname}  
Email: ${emailA}  
Contact No: ${cellno}  
Preferred Communication Channel (First Choice): ${commOptText}`);
                alert(formOutput);
                location.reload();


            } else {

                formOutput = (`Thank you for your enquiry. We will be in touch! 
Name: ${cName} 
Surname: ${cSname}  
Email: ${emailA}  
Contact No: ${cellno}  
Preferred Communication Channel (First Choice): None`);
                alert(formOutput);
                location.reload();

            }

        } else {

            alert("Please make sure you fill in all fields. We are unable to reach you otherwise. The comments section is optional. Thank you")
        }

        //TEST CONSOLE LOG
        console.log(formOutput)
    })



    //TRACKING NUM - AFTER SHORT PERIOD OF SIMULATION, CONTENT FOR TRACKING NUMBER IS DISPLAYED

    $('#trackingBTN').click(function() {

        let trackingRef = $('#trackingNum').val();

        //CONDITION

        if (trackingRef == "") {

            alert("Please enter a tracking number")
        } else {

            $('#boxTitle').text("Checking....").fadeOut(1500).fadeIn(1500).fadeOut(1500).fadeIn(1500);

            var deliveryDate = new Date();

            //TEST CONSOLE LOG
            console.log(deliveryDate);

            //DELAYED FUNCTION TO SIMULATE LOADING EFFECT
            setTimeout(function() {

                $('#boxTitle').after(`<h5>Tracking Number: ${trackingRef} <br/><br/>
            Your delivery is scheduled for:  ${deliveryDate}</h5>`);

                $('#boxTitle').css({ "backgroundColor": "#d9534f", "color": "white", "width": "110px", "font-size": "100%", "padding": "5px", "borderRadius": "5px" }).text("Order Found")

                $("#boxParagraph").hide()

            }, 6000);

        }

    })
})



//PREVIOUS LOGIC AND WORKINGS. DONT WANT TO DELETE YET. PLEASE IGNORE

// let carts = document.getElementsByClassName('btn'); 

// let products = [
//     {
//         name: "FitBit Ionic",
//         price: 2799, 
//         inCart: 0, 
//     },
//     {
//         name: "FitBit Inspire",
//         price: 2799, 
//         inCart: 0, 
//     },
//     {
//         name: "FitBit Charge",
//         price: 2799, 
//         inCart: 0, 
//     },
//     {
//         name: "Garmin 935",
//         price: 2799, 
//         inCart: 0, 
//     },
//     {
//         name: "Garmin Vivofit",
//         price: 2799, 
//         inCart: 0, 
//     },
//     {
//         name: "Garmin Fenix",
//         price: 2799, 
//         inCart: 0, 
//     }
// ];

// for (let i = 0; i < carts.length; i++) {

//     carts[i].addEventListener('click', () => {
//         cartNumbers(products[i]);

//     })

// }

// function onLoadCartNumbers () {
//     let productNumbers = localStorage.getItem('cartNumbers');

//     if(productNumbers) {

//         document.getElementById('cartValue').textContent = productNumbers; 


//     }


// }

// function cartNumbers(product) {



//     let productNumbers = localStorage.getItem('cartNumbers');

//     productNumbers = parseInt(productNumbers);

//     if (productNumbers) {

//         localStorage.setItem('cartNumbers', productNumbers + 1);
//         document.getElementById('cartValue').textContent = productNumbers + 1; 

//     } else {
//         localStorage.setItem('cartNumbers', 1);
//         document.getElementById('cartValue').textContent = 1; 


//         setItems(product);
//     }

//     function setItems(product) {
//         let cartItems = localStorage.getItem('productsInCart'); 
//         cartItems = JSON.parse(cartItems)
//         console.log(cartItems)

//         if(cartItems != null) {

//             if(cartItems[product.name] == undefined) {
//                 cartItems = {
//                     ...cartItems, [product.name]:product

//                 }
//             }
//             cartItems[product.name].inCart += 1; 
//         } else {

//             product.inCart = 1;
//             cartItems = {
//                 [product.name]: product
//             }
//         }

//         product.inCart = 1; 

//          cartItems =  {[product.name]: product}

//         localStorage.setItem("prodcutsInCart", JSON.stringify(cartItems));

//     }


// }
// onLoadCartNumbers();