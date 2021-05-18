$('#evaluatedText').keyup(function() {
  var text_length = $('#evaluatedText').val().length;
  
  
  $('#letterCount').html(text_length);
});