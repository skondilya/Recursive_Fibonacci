 $(document).ready(function(e) {   

  $("input").change(function(){
    var inputNum=$("#inputNum").val();
  })

  var s=[];

  var fibonacci_series =function (n){
    if (n===1) {
      return s=[0, 1];
    } else {
      s = fibonacci_series(n - 1);
      s.push(s[s.length - 1] + s[s.length - 2]);
      return s;
    }
  };

  $('#calculate').on('click', function() {
    if (!$("input").val()) {
      alert("ERROR! Fill in the boxes!");
      return false;
    }
    var inputNum=$("#inputNum").val();
    fibonacci_series(inputNum);
    printSequence();
  });

  var printSequence = function() {
    var html = '';
    // We loop through the sequence to add all terms in a table cell
    for (var i = 0; i < s.length; i++) {
      html += '<tr><td>' + s[i] + '</td></tr>';
    }
    // We print the table inside $('#result')
    $('#result').html('<hr><table class="table"><th class="active">Your Fibonacci Sequence</th>' + html + '</table>');
    $("input").val("");
  };

 });

