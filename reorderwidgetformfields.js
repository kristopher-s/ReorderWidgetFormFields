var targetNode = document.getElementsByClassName('forms-container')[0];
var config = { childList: true };
var callback = function(mutationsList){ arrangeFields() };
var observer = new MutationObserver(callback);

observer.observe(targetNode, config);

function arrangeFields(){
  var parentNode = document.getElementsByClassName("block-outer-scroll form-content")[0];
  var emailField = document.getElementsByClassName("email field-container")[0];
  var customField = document.getElementsByClassName("custom-fields field-container")[0];
  var captchaField = document.getElementsByClassName("captcha field-container")[0];
  var submitField = document.getElementsByClassName("submit-wrapper")[0];
  var descField = document.getElementsByClassName("description field-container")[0];
  var issueField = document.getElementsByClassName("issue field-container")[0];
  var attachField = document.getElementsByClassName("attachments-list")[0];
  var subjField = document.getElementsByClassName("subject field-container")[0];

  parentNode.append(emailField)
  parentNode.append(subjField)
  parentNode.append(issueField)
  parentNode.append(customField)
  parentNode.append(descField)
  parentNode.append(captchaField)
  parentNode.append(submitField)
  parentNode.append(attachField)

}
