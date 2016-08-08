var newWin = window.open('http://localhost:63342/post-message/index.html', "sarhan");
var callback = "function(e){alert(e.data)})";
var script = "<script>window.addEventListener('message', " + callback + " </script>";


newWin.document.write(script);
newWin.postMessage('Sarhan', 'http://localhost:63342/post-message/index.html');