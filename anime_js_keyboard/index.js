window.onload = () => {
	console.log('use arrows up, down, left and right to move the objects');
	console.log('use _s_ to paint the waterfall in yellow, and _w_ to paint back in blue');
	console.log('use Ctrl+Enter to make the spin');
};
let score = document.querySelector('#score').textContent;
let  elements = document.querySelectorAll('.e1, .e2, .e3');
let position = 'top-left';
function right(pos) {
	anime({
		easing: 'easeInOutQuint',
		targets: elements,
		translateX: 800,
		rotate: '1turn',
		backgroundColor: '#fff',
		borderRadius: ['0%', '50%']
	});
	// position = 'top-right';
	position = pos;
	// console.log(position);
}
function down(pos) {
	anime({
		easing: 'easeInOutQuint',
		targets: elements,
		translateY: 400,
		rotate: '1turn',
		width: '70px',
		height: '70px'
	});
	// position = 'down-right';
	position = pos;
	// console.log(position);
}
function left(pos) {
	anime({
		easing: 'easeInOutQuint',
		targets: elements,
		translateX: 0,
		rotate: '1turn',
		backgroundColor: 'rgb(40, 255, 123)',
		borderRadius: ['50%', '0%']
	});
	// position = 'down-left';
	position = pos;
	// console.log(position);
}
function up(pos) {
	anime({
		easing: 'easeInOutQuint',
		targets: elements,
		translateY: 0,
		rotate: '1turn',
		width: '50px',
		height: '50px',
		complete: function() {
			if(pos == 'top-left') {
				score++;
				document.querySelector('#score').textContent = score;
			}
		}
	});
	position = pos;
}
addEventListener("keydown", e => {
    // console.log(e);
    if( (e.key == 'ArrowLeft'/* || e.key == 'a'*/) && (position == 'down-right' || position == 'top-right') ) {
		if(position == 'down-right') left("down-left"); else left('top-left');
    };
});
addEventListener("keydown", e => {
    // console.log(e);
    if( (e.key == 'ArrowRight'/* || e.key == 'd'*/) && (position == 'top-left' || position == 'down-left') ) {
		if(position == 'top-left') right('top-right'); else right('down-right');
    };
});
addEventListener("keydown", e => {
    // console.log(e);
    if( (e.key == 'ArrowUp'/* || e.key == 'w'*/) && (position == 'down-left' || position == 'down-right') ) {
		if(position == 'down-left') up('top-left'); else up('top-right');
    };
});
addEventListener("keydown", e => {
    // console.log(e);
    if( (e.key == 'ArrowDown'/* || e.key == 's'*/) && (position == 'top-right' || position == 'top-left') ) {
		if(position == 'top-right') down('down-right'); else down('down-left');
    };
});

anime({
	targets: '.waterfall',
	width: '65px', // -> from '35px' to '65px',
	height: '650px',
	easing: 'easeInOutQuad',
	loop: true,
	duration: 3000,
	direction: 'alternate',
})
addEventListener("keydown", function(e) {
	if(e.code == 'KeyS') {
		anime({
			targets: '.waterfall',
			backgroundColor: '#ffff00',
			duration: 1500,
			easing: 'easeInSine'
		});
	} else if(e.code == 'KeyW') {
		anime({
			targets: '.waterfall',
			backgroundColor: 'rgb(45, 154, 255)',
			duration: 1500,
			easing: 'easeInOutCubic'
		})
	};
});
addEventListener("keydown", e => {
	if (e.ctrlKey && e.keyCode == 13) {
		anime({
			targets: '.e1, .e2, .e3',
			keyframes: [
				{translateX: 800,},
				{translateY: 400},
				{translateX: 0},
				{translateY: 0}
			],
			duration: 2000,
			easing: 'easeOutCubic',
			loopComplete: function() {
				score++;
				document.querySelector('#score').textContent = score;
			}
		});
	}
});


var foot = anime({
	targets: '.foot',
	keyframes: [
		{translateX: 1000},
		{translateY: 50},
		{translateX: 0},
		{translateY: 0}
	],
	easing: 'easeOutCubic',
	duration: 3000,
	height: '25px',
	backgroundColor: '#ff954e',
	borderRadius: '25px',
	loopComplete: function() {
		score = Number(score) + 1;
		document.querySelector('#score').textContent = score;
	},
	loop: true,
	delay: 500
});
anime({
	targets: '.attention',
	translateX: '-50%',
	duration: 0
})
let attention = anime({
	targets: '.attention',
	translateY: -600,
	duration: 5000,
	easing: 'linear',
	complete: function() {
		let elem = document.querySelector('.attention');
		elem.parentNode.removeChild(elem);
	}
});
let movePlayer = anime({
		targets: '.player',
		easing: 'linear',
		// duration: 500,
		translateX: 705,
		autoplay: false,
		complete: function() {
			// document.querySelector('.player').left = '0px';
			movePlayer.play();
		}
	});
document.querySelector('.wrapper-2').onmouseover = () => movePlayer.play();
document.querySelector('.wrapper-2').onmouseout = () => movePlayer.pause();