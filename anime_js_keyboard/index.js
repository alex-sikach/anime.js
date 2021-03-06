window.onload = () => {
	console.log('use arrows up, down, left and right to move the objects');
	console.log('use _s_ to paint the waterfall in yellow, and _w_ to paint back in blue');
	console.log('use Ctrl+Enter to make the spin');
	document.querySelector('#player').style.backgroundColor = 'rgb(0, 0, 0)';
};
var level = prompt("Выберите уровень: СЛОЖНЫЙ, НОРМАЛЬНЫЙ или ЛЁГКИЙ").toLowerCase();
var wr2 = document.querySelector('.wrapper-2');
document.querySelector('.wrapper-2').style.width = '699px';

let speed;
if(level == 'сложный') {
	speed = 1500;
	console.log('hard');
} else if(level == 'нормальный') {
	speed = 2500;
	console.log('NORMAL');
} else if(level == 'легкий' || level == 'лёгкий' || level == 'qwe' || level == 'wqe') {
	speed = 3000;
	console.log('easy');
} else {
	alert('Вы ввели слово некоректно. Мы удаляем основную игру)');
	let wr = document.querySelector('.wrapper-2');
	wr.parentNode.removeChild(wr);
}
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
	translateY: '-50%',
	duration: 0
})
let attention = anime({
	targets: '.attention',
	translateY: -700,
	duration: 9500,
	easing: 'linear',
	complete: function() {
		let elem = document.querySelector('.attention');
		elem.parentNode.removeChild(elem);
	}
});
let movePlayer = anime({
		targets: '.player',
		easing: 'linear',
		duration: speed,
		translateX: wr2.style.width.replace('px', '') - 45,
		autoplay: false,
		complete: function() {
			// document.querySelector('.player').left = '0px';
			movePlayer.play();
		}
	});
document.querySelector('.wrapper-2').onmouseover = () => movePlayer.play();
document.querySelector('.wrapper-2').onmouseout = () => movePlayer.pause();
addEventListener('keydown', e => {
	if(e.ctrlKey) {movePlayer.pause()}
}); //a little cheat for testing
document.querySelector('#player').onclick = () => {
	switch (document.querySelector('#player').style.backgroundColor) {
		case 'rgb(0, 0, 0)':
			score = Number(score) + 1;
			document.querySelector('#score').textContent = score;
			break;
		case 'rgb(255, 0, 0)':
			score = Number(score) - 2;
			document.querySelector('#score').textContent = score;
			break;
	}
};
function makeRed() {
//make the player red color
	document.querySelector('#player').style.backgroundColor = '#ff0000';
//it's red during random time
	let rpPromise = new Promise((resolve, reject) => {
		setTimeout(() => resolve(),  Math.floor(Math.random() * 7000));
	}).then(() => {
	document.querySelector('#player').style.backgroundColor = '#000000';
	}).catch(() => {
		console.error("some error");
	})
};
let rpInterval = setInterval(makeRed,  Math.floor(Math.random() * 15000));