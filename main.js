const shaokhan = {
	name: 'Shao Khan'.toUpperCase(),
	hp: 80,
	img: 'https://www.fightersgeneration.com/np3/char/char/gifus/shaokahn-mk3-stance.gif',
	weapon: ['Frozen Spike', 'Laser Annihilator', 'Molecular desintegrator'],
	attack: function(name) {
		console.log(name + ' Fight...');
	}
}


const scorp = {
	name: 'Scorpion'.toUpperCase(),
	hp: 50,
	img: 'https://i.gifer.com/Ymo8.gif',
	weapon: ['Plasma Blaster', 'Wooden stick', 'Sword of Destructious power'],
	attack: function(name) {
		console.log(name + ' Fight...');
	}
};

const subzero = {
	name: 'Sub-zero'.toUpperCase(),
	hp: 80,
	img: 'https://www.fightersgeneration.com/characters3/subzero-stance.gif',
	weapon: ['Frozen Spike', 'Laser Annihilator', 'Molecular desintegrator'],
	attack: function(name) {
		console.log(name + ' Fight...');
	}
}

const createPlayer = (playerClass, playerObj) => {
	/* Creating all needed DOM parts */
	const $arenas = document.querySelector('.arenas');
	const $playerDiv = document.createElement('div');
	const $progressBar = document.createElement('div');
	const $characterDiv = document.createElement('div');
	const $lifeDiv = document.createElement('div');
	const $nameDiv = document.createElement('div');
	const $charImg = document.createElement('img');

	/* Give all the DOM parts classes */
	$playerDiv.classList.add(playerClass);
	$progressBar.classList.add('progressbar');
	$characterDiv.classList.add('character');
	$lifeDiv.classList.add('life');
	$nameDiv.classList.add('name');

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

	$arenas.appendChild($playerDiv);

}

createPlayer('player1', scorp);
createPlayer('player2', subzero);