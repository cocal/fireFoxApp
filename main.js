var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
//var panels = require("sdk/panel");
//var self = require("sdk/self");
var button = buttons.ActionButton({
  id: "mozilla-link",
  label: "Visit Mozilla",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onClick: handleClick
});

function handleClick(state) {
tabs.open({
  url: "http://www.baidu.com/",
  onReady: runScript
});
}
function runScript(tab) {
  tab.attach({
    //contentScript: "document.body.style.border = '5px solid red';"
	contentScript : "document.getElementById('kw').value = '呵呵';"
  });
}
function handleHide() {
  button.state('window', {checked: false});
}
function listTabs() {
  var tabs = require("sdk/tabs");
  for (let tab of tabs)
    console.log(tab.url);
}
