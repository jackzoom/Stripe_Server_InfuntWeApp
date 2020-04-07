'use strict';


var stripe = Stripe('pk_test_l2eMaxrVW1SuJgcOZnwlndiA');

/**
 * [获取URL中的参数名及参数值的集合]
 * 示例URL:http://htmlJsTest/getrequest.html?uid=admin&rid=1&fid=2&name=小明
 * @param {[string]} urlStr [当该参数不为空的时候，则解析该url中的参数集合]
 * @return {[string]}       [参数集合]
 */
function getRequest(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); // 构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg); // 匹配目标参数
    if (r != null) return unescape(r[2]);
    return null; // 返回参数值
}

function registerElements(elements, exampleName) {

    //定义页面参数
    let priceText = getRequest('orderPrice') || 'Error';
    $('#submitFrom').text('Pay $'+priceText);
    var formClass = '.' + exampleName;
    var example = document.querySelector(formClass);

    var form = example.querySelector('form');
    var resetButton = example.querySelector('a.reset');
    var error = form.querySelector('.error');
    var errorMessage = error.querySelector('.message');


    function enableInputs() {
        Array.prototype.forEach.call(
            form.querySelectorAll(
                "input[type='text'], input[type='email'], input[type='tel']"
            ),
            function (input) {
                input.removeAttribute('disabled');
            }
        );
    }

    function disableInputs() {
        Array.prototype.forEach.call(
            form.querySelectorAll(
                "input[type='text'], input[type='email'], input[type='tel'],input[type='button']"
            ),
            function (input) {
                input.setAttribute('disabled', 'true');
            }
        );
    }

    function triggerBrowserValidation() {
        // The only way to trigger HTML5 form validation UI is to fake a user submit
        // event.
        var submit = document.createElement('input');
        submit.type = 'submit';
        submit.style.display = 'none';
        form.appendChild(submit);
        submit.click();
        submit.remove();
    }

    // Listen for errors from each Element, and show error messages in the UI.
    var savedErrors = {};
    elements.forEach(function (element, idx) {
        element.on('change', function (event) {
            if (event.error) {
                error.classList.add('visible');
                savedErrors[idx] = event.error.message;
                errorMessage.innerText = event.error.message;
            } else {
                savedErrors[idx] = null;

                // Loop over the saved errors and find the first one, if any.
                var nextError = Object.keys(savedErrors)
                    .sort()
                    .reduce(function (maybeFoundError, key) {
                        return maybeFoundError || savedErrors[key];
                    }, null);

                if (nextError) {
                    // Now that they've fixed the current error, show another one.
                    errorMessage.innerText = nextError;
                } else {
                    // The user fixed the last error; no more errors.
                    error.classList.remove('visible');
                }
            }
        });
    });

    // Listen on the form's 'submit' handler...
    form.addEventListener('submit', function (e) {
            e.preventDefault();

            // Trigger HTML5 validation UI on the form if any of the inputs fail
            // validation.
            var plainInputsValid = true;
            Array.prototype.forEach.call(form.querySelectorAll('input'), function (
                input
            ) {
                if (input.checkValidity && !input.checkValidity()) {
                    plainInputsValid = false;
                    return;
                }
            });
            if (!plainInputsValid) {
                triggerBrowserValidation();
                return;
            }

            // Disable all inputs.
            disableInputs();

            // Show a loading screen...
            example.classList.add('submitting');



            // Gather additional customer data we may have collected in our form.
            var name = form.querySelector('#' + exampleName + '-name');
            var address1 = form.querySelector('#' + exampleName + '-address');
            var city = form.querySelector('#' + exampleName + '-city');
            var state = form.querySelector('#' + exampleName + '-state');
            var zip = form.querySelector('#' + exampleName + '-zip');
            var additionalData = {
                name: name ? name.value : undefined,
                address_line1: address1 ? address1.value : undefined,
                address_city: city ? city.value : undefined,
                address_state: state ? state.value : undefined,
                address_zip: zip ? zip.value : undefined,
            };

            // Use Stripe.js to create a token. We only need to pass in one Element
            // from the Element group in order to create a token. We can also pass
            // in the additional customer data we collected in our form.
            stripe.createToken(elements[0], additionalData).then(function (result) {
                // Stop loading!
                example.classList.remove('submitting');

                if (result.token) {
                    // If we received a token, show the token ID.
                    example.querySelector('.token').innerText = result.token.id;
                    //example.classList.add('submitted');

                } else {
                    // Otherwise, un-disable inputs.
                    enableInputs();
                }
            });
        }


    );

    /* resetButton.addEventListener('click', function(e) {
       e.preventDefault();
       // Resetting the form (instead of setting the value to `''` for each input)
       // helps us clear webkit autofill styles.
       form.reset();

       // Clear each Element.
       elements.forEach(function(element) {
         element.clear();
       });

       // Reset error state as well.
       error.classList.remove('visible');

       // Resetting the form does not un-disable inputs, so we need to do it separately:
       enableInputs();
       example.classList.remove('submitted');
     });*/


    function saveCard() {

        // Trigger HTML5 validation UI on the form if any of the inputs fail
        // validation.
        var plainInputsValid = true;
        Array.prototype.forEach.call(form.querySelectorAll('input'), function (
            input
        ) {
            if (input.checkValidity && !input.checkValidity()) {
                plainInputsValid = false;
                return;
            }
        });
        if (!plainInputsValid) {
            triggerBrowserValidation();
            return;
        }

        // Disable all inputs.
        disableInputs();
        // Show a loading screen...
        example.classList.add('submitting');


        // Gather additional customer data we may have collected in our form.
        var name = form.querySelector('#' + exampleName + '-name');
        var address1 = form.querySelector('#' + exampleName + '-address');
        var city = form.querySelector('#' + exampleName + '-city');
        var state = form.querySelector('#' + exampleName + '-state');
        var zip = form.querySelector('#' + exampleName + '-zip');
        var additionalData = {
            name: name ? name.value : undefined,
            address_line1: address1 ? address1.value : undefined,
            address_city: city ? city.value : undefined,
            address_state: state ? state.value : undefined,
            address_zip: zip ? zip.value : undefined,
        };

        // Use Stripe.js to create a token. We only need to pass in one Element
        // from the Element group in order to create a token. We can also pass
        // in the additional customer data we collected in our form.
        var isSaveCard = $("#saveCard").prop("checked");
        if (isSaveCard && isSaveCard == true) {
            //create 2 token
            stripe.createToken(elements[0]).then(function (result) {
                // Stop loading!

                if (result.token) {
                    // If we received a token, show the token ID.
                    //example.querySelector('.token').innerText = result.token.id;
                    //example.classList.add('submitted');

                    $("#stripeToken1").val(result.token.id);
                    //example.classList.add('submitted');

                    stripe.createToken(elements[0]).then(function (result) {
                        // Stop loading!

                        if (result.token) {
                            // If we received a token, show the token ID.
                            //example.querySelector('.token').innerText = result.token.id;
                            //example.classList.add('submitted');

                            $("#stripeToken2").val(result.token.id);
                            //example.classList.add('submitted');

                            ajaxSubmit(result.token.card);

                        } else {
                            // Otherwise, un-disable inputs.
                            enableInputs();
                            example.classList.remove('submitting');
                        }
                    });



                } else {
                    // Otherwise, un-disable inputs.
                    enableInputs();
                    example.classList.remove('submitting');
                }
            });



        } else {

            stripe.createToken(elements[0]).then(function (result) {
                // Stop loading!

                if (result.token) {
                    errorMessage.innerText = '';
                    error.classList.remove('visible');
                    // If we received a token, show the token ID.
                    //example.querySelector('.token').innerText = result.token.id;
                    //example.classList.add('submitted');

                    $("#stripeToken1").val(result.token.id);
                    //example.classList.add('submitted');


                    ajaxSubmit(result.token.card, example);



                } else {
                    // Otherwise, un-disable inputs.
                    if (result.error && result.error.message) {
                        errorMessage.innerText = result.error.message;
                        error.classList.add('visible');
                    } else {
                        errorMessage.innerText = '';
                        error.classList.remove('visible');
                    }
                    enableInputs();
                    example.classList.remove('submitting');
                }
            });


        }
    }

    function backToMP() {
        var orderTransactionId = $("#orderTransactionId").val();

        wx.miniProgram.navigateBack();

        /*if("N" == groupOrder) {
		 // wx.miniProgram.redirectTo({url: '/pages/order/order-detail/index?orderTransactionId=' + orderTransactionId});
		  //wx.miniProgram.switchTab({url: '/pages/order/index'});
		  
		  wx.miniProgram.navigateBack();
		  
	  }else if("Y" == groupOrder) {
		  wx.miniProgram.redirectTo({url: '/pages/order/order-detail/dev-details?orderTransactionId=' + orderTransactionId});
	  }*/



    }


    function ajaxSubmit(card) {
        //do backed validate and get token
        var data = {};
        // data.stripeToken1 = $("#stripeToken1").val();
        // data.stripeToken2 = $("#stripeToken2").val();
        // data.userId = $("#userId").val();
        // data.brand = card.brand;
        // data.funding = card.funding;
        // data.last4 = card.last4;
        // data.payAmount = $("#payAmount").val();
        // data.orderTransactionId = $("#orderTransactionId").val();
        // //data.saveCard = $("#saveCard").prop("checked");
        // data.saveCard = false;
        // data.successCallBackUrl = $("#successCallBackUrl").val();
        // data.description = $("#description").val();

        // Show a loading screen...
        // example.classList.add('submitting');

        data.body = getRequest('body');
        data.orderNO = getRequest('orderNO');
        data.payType = 1;
        data.token = $("#stripeToken1").val();
        $.ajax({
            // url: "/decorder/stripePay/pay",
            url: 'https://zhuanyoyo.95cfun.cn/front/pay/stripe',
            contentType: "application/json",
            type: "POST",
            data: JSON.stringify(data),
            success: function (result) {
                if (result && result.errorCode == "0000") {
                    // if (result.data.status && result.data.status == 'succeeded') {
                    // result.data = 1||2(支付成功,支付失败)
                    if (result.data == 1) {
                        example.classList.remove('submitting');
                        example.classList.add('submitted');

                        setTimeout(backToMP, 1500);


                    } else {
                        example.classList.remove('submitting');                        
                        $('#errorMessage').addClass("visible");
                        $('#message').text('Fail request');
                        
                    }

                } else {
                    example.classList.remove('submitting');
                    $('#errorMessage').addClass("visible");
                    $('#message').text("Error while pay");
                }
            },
            error: function (message) {
                example.classList.remove('submitting');
                $('#errorMessage').addClass("visible");
                $('#message').text("Error while pay");
            }
        });
    }



    $("#submitFrom").bind("click", function () {

        saveCard();

        //$("#cardFarme").contents().find("#cardnumber").val("111");
        //$("#cardFarme").contents().find("#submitV").click();

    });

    $("#saveCardLabel").bind("click", function () {

        if ($("#saveCard").prop("checked")) {
            $("#saveCard").attr("checked", ''); //or
        } else {
            $("#saveCard").attr("checked", 'checked');
        }

    });

}