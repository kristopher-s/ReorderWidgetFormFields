// DOM element we want to observe
var targetNode = document.getElementsByClassName('forms-container')[0];
// options for the observer
var config = { childList: true };
// callback will execute when mutations are observed
var callback = function(mutationsList){ arrangeFields() };
// create a new observer, passing in the callback function
var observer = new MutationObserver(callback);
// start observing the targetNode with the given configuration
observer.observe(targetNode, config);

// arranges fields
function arrangeFields(){
  // stores parent node
  var parentNode = document.getElementsByClassName("block-outer-scroll form-content")[0];

  // stores child nodes
  var emailField = document.getElementsByClassName("email field-container")[0];
  var customField = document.getElementsByClassName("custom-fields field-container")[0];
  var captchaField = document.getElementsByClassName("captcha field-container")[0];
  var submitField = document.getElementsByClassName("submit-wrapper")[0];
  var descField = document.getElementsByClassName("description field-container")[0];
  var issueField = document.getElementsByClassName("issue field-container")[0];
  var attachField = document.getElementsByClassName("attachments-list")[0];
  var subjField = document.getElementsByClassName("subject field-container")[0];

  //appends child nodes to parent node in desired order

  parentNode.append(emailField)
  parentNode.append(subjField)
  parentNode.append(issueField)
  parentNode.append(customField)
  parentNode.append(descField)
  parentNode.append(captchaField)
  parentNode.append(submitField)
  parentNode.append(attachField)

}
