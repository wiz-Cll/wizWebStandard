(function() {
  
  if( !String.prototype.trim ){
      String.prototype.trim = function(){
        return this.replace(/^ +/, '').replace(/ +$/, '');
      };
  }
  

  var _id = {
      loginForm: 'login-form-example',
      accountInput: 'login-example-account',
      passInput: 'login-example-password',
      loginBtn: 'login-example-loginbtn'
  };
  var accountInput, loginBtn, loginForm, passInput, accountFC, passFC;

  function init(){
      loginForm = $('#' + _id.loginForm);
      accountInput = $('#' + _id.accountInput);
      passInput = $('#' + _id.passInput);
      loginBtn = $('#' + _id.loginBtn);

      accountFC = accountInput.parents('.form-controll');
      passFC = passInput.parents('.form-controll');
  }

  

  function loginFormChecker(){
      accountInput.bind('input propertychange', function(){
        if( accountFC.hasClass('empty-err') ){
            if( accountInput.val().trim() !== '' ){
              accountFC.removeClass('empty-err');
            }
        }
        return false;
      });

      passInput.bind('input propertychange', function(){
        if( passFC.hasClass('empty-err') ){
            if( passInput.val().trim() !== '' ){
              passFC.removeClass('empty-err');
            }
        }
        return false;
      });

      loginBtn.bind('click', function(e){
          // 避免重复提交
          if( loginBtn.hasClass('btn-loading') ){
            return false;
          }

          loginForm.removeClass('submit-err submit-suc');
          if( accountInput.val().trim() === '' ){
              accountFC.addClass('empty-err');
              return false;
          }
          else{
              accountFC.removeClass('empty-err');
          }

          if( passInput.val().trim() === '' ){
              passFC.addClass('empty-err');
              return false;
          }
          else{
              passFC.removeClass('empty-err');
          }

          loginBtn.addClass('btn-loading');

          setTimeout( function(){
            if( postLoginData() === true ){
                loginForm.removeClass('submit-err').addClass('submit-suc');
            }
            else{
                loginForm.removeClass('submit-suc').addClass('submit-err');
            }
            loginBtn.removeClass('btn-loading');
          }, 500 );
          
          e.preventDefault();
      });

  }

   function postLoginData(){
      var param, rd;
      param = {
          account: accountInput.val(),
          password: passInput.val()
      };
      rd = Math.random();
      if (rd > 0.5) {
          return true;
      } else {
          return false;
      }
  }



  init();

  loginFormChecker();

})();
