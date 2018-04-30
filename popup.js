$(document).ready(function () {
    $('#query').on('keyup', function (e) {
        let query = e.target.value;
        console.log(query);
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var response = JSON.parse(xhttp.responseText);
                var result = response.results;
                console.log(result);
                var output = '';
                for (var i = 0; i < 5; i++) {
                    output += `
                    
                    <div class="form-group">
    <input type="text" class="form-control" id="copy" value="${result[i].latest}"><button onclick="myFunction()" type="button" class="btn btn-primary btn-block btn-xs">Copy Link</button>
  </div>
                `;
                }
                document.getElementById('cdn').innerHTML = output;
            }
        };
        xhttp.open("GET", "https://api.cdnjs.com/libraries?search="+query, true);
        xhttp.send();
    });
});

function myFunction() {
  var copyText = document.getElementById("copy");
  copyText.select();
  document.execCommand("Copy");
  alert("Copied the text: " + copyText.value);
}