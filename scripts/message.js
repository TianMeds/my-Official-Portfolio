(function() {
 
    function getFormData(form) {
      var elements = form.elements;
  
      var fields = Object.keys(elements).filter(function(k) {
            return (elements[k].name !== "honeypot");
      }).map(function(k) {
        if(elements[k].name !== undefined) {
          return elements[k].name;
        }else if(elements[k].length > 0){
          return elements[k].item(0).name;
        }
      }).filter(function(item, pos, self) {
        return self.indexOf(item) == pos && item;
      });
  
      var formData = {};
      fields.forEach(function(name){
        var element = elements[name];
        formData[name] = element.value;
        if (element.length) {
          var data = [];
          for (var i = 0; i < element.length; i++) {
            var item = element.item(i);
            if (item.checked || item.selected) {
              data.push(item.value);
            }
          }
          formData[name] = data.join(', ');
        }
      });
  
      // add form-specific values into the data
      formData.formDataNameOrder = JSON.stringify(fields);
      formData.formGoogleSheetName = form.dataset.sheet || "PortfolioSheet"; // default sheet name
      formData.formGoogleSendEmail = form.dataset.email || ""; // no email by default
  
      console.log(formData);
      return formData;
    }
  
    function handleFormSubmit(event) {  
      event.preventDefault();           
      var form = event.target;
      var data = getFormData(form);         
      if( data.email && !validEmail(data.email) ) {   
        var invalidEmail = form.querySelector(".email-invalid");
        if (invalidEmail) {
          invalidEmail.style.display = "block";
          return false;
        }
      } else {
        disableAllButtons(form);
        var url = form.action;
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function() {
            console.log(xhr.status, xhr.statusText);
            console.log(xhr.responseText);
            var formElements = form.querySelector(".form-elements")
            if (formElements) {
              formElements.style.display = "none"; // hide form
            }
            var thankYouMessage = form.querySelector(".thankyou_message");
            if (thankYouMessage) {
              thankYouMessage.style.display = "block";
            }
            return;
        };
        var encoded = Object.keys(data).map(function(k) {
            return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
        }).join('&');
        xhr.send(encoded);
      }
    }
    
    function loaded() {
      console.log("Contact form submission handler loaded successfully.");
      var forms = document.querySelectorAll("form.gform");
      for (var i = 0; i < forms.length; i++) {
        forms[i].addEventListener("submit", handleFormSubmit, false);
      }
    };
    document.addEventListener("DOMContentLoaded", loaded, false);
  
    function disableAllButtons(form) {
      var buttons = form.querySelectorAll("button");
      for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
      }
    }
  })();