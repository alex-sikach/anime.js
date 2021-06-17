let  elements = document.querySelectorAll('.e1, .e2, .e3');
let position = 'top-left';
function right(pos) {
	anime({
		targets: elements,
		translateX: 800,
		rotate: '1turn'
	});
	// position = 'top-right';
	position = pos;
	console.log(position)
}
function down(pos) {
	anime({
		targets: elements,
		translateY: 400,
		rotate: '1turn'
	});
	// position = 'down-right';
	position = pos;
	console.log(position)
}
function left(pos) {
	anime({
		targets: elements,
		translateX: 50,
		rotate: '1turn'
	});
	// position = 'down-left';
	position = pos;
	console.log(position)
}
function up(pos) {
	anime({
		targets: elements,
		translateY: 50,
		rotate: '1turn'
	});
	// position = 'top-left';
	position = pos;
	console.log(position)
}
addEventListener("keydown", e => {
    // console.log(e);
    if( (e.key == 'ArrowLeft' || e.key == 'a') && (position == 'down-right' || position == 'top-right') ) {
		if(position == 'down-right') left("down-left"); else left('top-left');
    };
});
addEventListener("keydown", e => {
    // console.log(e);
    if( (e.key == 'ArrowRight' || e.key == 'd') && (position == 'top-left' || position == 'down-left') ) {
		if(position == 'top-left') right('top-right'); else right('down-right');
    };
});
addEventListener("keydown", e => {
    // console.log(e);
    if( (e.key == 'ArrowUp' || e.key == 'w') && (position == 'down-left' || position == 'down-right') ) {
		if(position == 'down-left') up('top-left'); else up('top-right');
    };
});
addEventListener("keydown", e => {
    // console.log(e);
    if( (e.key == 'ArrowDown' || e.key == 's') && (position == 'top-right' || position == 'top-left') ) {
		if(position == 'top-right') down('down-right'); else down('down-left');
    };
});