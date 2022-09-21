const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');
const player1 = {
	player: 1,
	name: 'Shao Khan'.toUpperCase(),
	hp: 100,
	img: 'https://www.fightersgeneration.com/np3/char/char/gifus/shaokahn-mk3-stance.gif',
	weapon: ['Frozen Spike', 'Laser Annihilator', 'Molecular desintegrator'],
	attack: function(name) {
		console.log(name + ' Fight...');
	}
}

const player2 = {
	player: 2,
	name: 'Scorpion'.toUpperCase(),
	hp: 90,
	img: 'https://i.gifer.com/Ymo8.gif',
	weapon: ['Plasma Blaster', 'Wooden stick', 'Sword of Destructious power'],
	attack: function(name) {
		console.log(name + ' Fight...');
	}
};

function createElement(tag, className) {
	const $tag = document.createElement(tag);
	if(className) {
		$tag.classList.add(className);
	}

	return $tag;
}

const createPlayer = (playerObj) => {
	/* Creating all needed DOM parts */
	const $playerDiv = createElement('div', 'player' + playerObj.player);
	const $progressBar = createElement('div','progressbar');
	const $characterDiv = createElement('div','character');
	const $lifeDiv = createElement('div','life');
	const $nameDiv = createElement('div','name');
	const $charImg = createElement('img');
	

	/* Append parts to the divs */
	$playerDiv.appendChild($progressBar);
	$playerDiv.appendChild($characterDiv);
	$progressBar.appendChild($lifeDiv);
	$progressBar.appendChild($nameDiv);
	$characterDiv.appendChild($charImg);

	/* Apply styles and content to the game */
	$lifeDiv.style.width = playerObj.hp + '%';
	$nameDiv.textContent = playerObj.name;
	$charImg.src = playerObj.img;

	return $playerDiv;
}

function changeHP(player) {
	const $playerLife = document.querySelector('.player' + player.player + ' .life');
	player.hp -= 20;
	$playerLife.style.width = player.hp + '%';

	if(player.hp < 0) {
		$arenas.appendChild(playerLose(player.name))
	}
}

function playerLose(name) {
	const $loseTitle = createElement('div', 'loseTitle');
	$loseTitle.innerText = name + ' lose';

	return $loseTitle;
}

$randomButton.addEventListener('click', function() {
	changeHP(player1);
	changeHP(player2);
});

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));