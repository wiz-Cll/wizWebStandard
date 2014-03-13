(function(){
    var ua = navigator.userAgent.toLowerCase();
    var LOWIE_REG = /msie\ [6-9]{1}/;

    // if( LOWIE_REG.test(ua) || true ){
    if( LOWIE_REG.test(ua) ){
        patchPlaceholder();
        bindPatcherClickHandler();
        inputHandler();
    }



    function patchPlaceholder(){
        var formCtrls = $('.form.patch-ph .form-controll');

        formCtrls.each( function( i, el ){
            // console.log( arguments );
            var input = $(el).find( 'input' ), textarea = $(el).find( 'textarea' );
            if( input.length > 0 ){
                addPatcher( el, input );
            }
        });
    }

    function addPatcher( formCtrl, inputEl ){
        var phSpan = document.createElement('span');
        phSpan.setAttribute('class', 'ph-patcher');
        phSpan.innerHTML = inputEl.attr('placeholder');
        if( inputEl.prop('value') !== '' ){
            phSpan.setAttribute('class', 'ph-patcher hide');
        }
        formCtrl.appendChild( phSpan );
    }

    function bindPatcherClickHandler(){
        $('.ph-patcher').bind('click', function( e ){
            var patcher = $(e.target);
            // patcher.addClass('hide');
            patcher.siblings('input').focus();
            patcher.siblings('textarea').focus();
        });


    }
    function inputHandler(){
        // IE9 的propertychanger 和 input不会在backspace时触发
        $('.form.patch-ph input[placeholder]').bind('DOMAttrModified propertychange keyup input',inputHandler);

        $('.form.patch-ph textarea[placeholder]').bind('DOMAttrModified propertychange keyup input',inputHandler);

        function inputHandler(e){
            // console.log( $(this).prop('value') );
            if( $(this).prop('value') === '' ){
                $(this).siblings('.ph-patcher').removeClass('hide');
            }
            else{
                $(this).siblings('.ph-patcher').addClass('hide');
            }
        }
    }
})();