import { generateRandomInt } from "./generateRandomInt";

function update_time({ status, value }) {
	const time = status.time + value;
	return { time };
}

function update_day({ status, value }) {
	const day = status.day + value;
	return { day };
}

function update_written({ status, value }) {
	const sortNumber = generateRandomInt();

	let written = status.written + value;
	let hungry = status.hungry;
	let mental = status.mental;

	if (written % 100 === 0 && sortNumber > 0) {
		hungry = status.hungry + 1;
	}

	if (status.written - status.physical >= 100) {
		if (status.mental > 20 && status.written % 3 === 0) {
			mental = status.mental - 1;
		}
	} else if (status.mental < 80 && status.written % 10 === 0) {
		mental = status.mental + 1;
	}

	return { written, hungry, mental };
}

function update_hungry({ status, value }) {
	if (status.hungry + value <= 0) {
		value = 0 - status.hungry;
	} else if (status.hungry <= 7) {
		value = -4;
	} else {
		value = -3;
	}

	let hungry = status.hungry + value;
	let mental = status.mental;

	if (value !== 0) {
		if (status.mental < 80) {
			mental = status.mental + 1;
		}
	}

	return { hungry, mental };
}

function update_physical({ status, value }) {
	const sortNumber = generateRandomInt();

	let physical = status.physical + value;
	let hungry = status.hungry;
	let mental = status.mental;

	if (physical % 50 === 0 && sortNumber > 0) {
		hungry = status.hungry + 1;
	}

	if (status.physical - status.written >= 100) {
		if (status.mental > 20 && status.physical % 3 === 0) {
			mental = status.mental - 1;
		}
	} else if (status.mental < 80 && status.physical % 10 === 0) {
		mental = status.mental + 1;
	}

	return { physical, hungry, mental };
}

function update_mental({ status, value }) {
	const mental = status.mental + value;
	return { mental };
}

function update_read({ status, value }) {
	const read = status.read + value;
	return { read };
}

function update_pet({ status, value }) {
	const pet = status.pet + value;
	return { pet };
}

const updateStatusFunctions = {
	update_time,
	update_day,
	update_written,
	update_hungry,
	update_physical,
	update_mental,
	update_read,
	update_pet,
};

export { updateStatusFunctions };
