            const nameInput = document.querySelector("#name");
            const emailInput = document.querySelector("#email");
            const messageInput = document.querySelector("#message");
            const success = document.querySelector("#success")
            const error = document.querySelectorAll(".error")
            
            /* The function will validate the form if there is a name and email and messages have a input and 
            Follow the requirement if its valid
            */
            
            function validateForm(){
            
              clearMessage()
              let errorMessage = false;
            
              if(nameInput.value.length < 1){
                error[0].innerText = "\u0021 Name cannot be blank";
                nameInput.classList.add("error")
                errorMessage = true;
              }
            
              if(!validEmail(emailInput.value)){
                error[1].innerText = "\u0021 Invalid Email Address";
                emailInput.classList.add("error")
                errorMessage = true;
              }
            
              if(messageInput.value.length < 1){
                error[2].innerText = "\u0021 Please Enter a Message";
                messageInput.classList.add("error")
                errorMessage = true;
              } 
            
              if (!errorMessage){
                success.innerText = "Message Sent"
                history.back();
              }
            }
            
            // call the function for validateForm and wil clear the input if its reload
            function clearMessage(){
              for(let i = 0; i < error.length; i++){
                error[i].innerText = "";
              }
              success.innerText = "";
              nameInput.classList.remove("error")
              emailInput.classList.remove("error")
              messageInput.classList.remove("error")
            }
            
            //this will check the email if its an valid email
            function validEmail(emailInput){
              let symbol = /\S+@\S+\.\S+/;
              return symbol.test(emailInput);
            }