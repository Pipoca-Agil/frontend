const howMuchILoveYou = nbPetals => {
	let getPetals = nbPetals <= 6 ? nbPetals : nbPetals - 6;
	if (getPetals > 6) {
		while (getPetals > 6) {
			getPetals -= 6;
		}
	}

	switch (getPetals) {
		case 1:
			return 'I love you';
		case 2:
			return 'a little';
		case 3:
			return 'a lot';
		case 4:
			return 'passionately';
		case 5:
			return 'madly';
		case 6:
			return 'not at all';
		default:
			return 'sorry, not a valid number!';
	}
};

console.log(howMuchILoveYou(101));
