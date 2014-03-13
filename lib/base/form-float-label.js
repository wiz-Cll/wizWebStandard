( function(){

    initFloatLabl();

    function initFloatLabl(){
        var fomtCtrls = $('.float-label .form-controll');
        var inputs = $('.float-label input');
        if( fomtCtrls.length === 0 ){
            console.log('未找到要初始化的float-label表单');
            console.log("$('.float-label .form-controll')");
        }
        else{
            initFloatLableDom( fomtCtrls );
            initFloatLableEvent( inputs );
        }
    }

    function initFloatLableDom( fomtCtrls ){
        fomtCtrls.each( function( e, el){
            var $el = $(el);
            var fLabel = document.createElement('span');
            fLabel.innerHTML = $el.attr('data-fl');
            fLabel.className = 'f-label';
            $el.append( fLabel );
        } );
    }

    function initFloatLableEvent( inputs ){
        inputs.each( function( i, el ){
            var $el = $(el);
            $el.bind('DOMAttrModified propertychange keyup input', inputHandler );
        } );
    }

    function inputHandler(){
        if( $(this).prop('value') === '' ){
            $(this).parents('.form-controll').removeClass('fl-active');
        }
        else{
            $(this).parents('.form-controll').addClass('fl-active');
        }
    }

} )();