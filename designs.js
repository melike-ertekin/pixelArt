// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function( event ) {
	event.preventDefault();
	makeGrid();

});

function makeGrid() {

    // Select size input
	let cols = $('#inputWeight').val();
	let rows = $('#inputHeight').val();

	console.log(rows+cols);

	$('tr').remove();

	for(let r=0; r<rows; r++) {
		$('#pixelCanvas').append('<tr></tr>');
		for(let c=0; c<cols ; c++) {
			$('tr:last').append('<td></td>');
		}
	}

	$('td').click(function() {
		// Select color input
		let color = $('#colorPicker').val();

		$(this).attr('style', 'background-color:'+color);
	});
}