import { ICONS_NAMES, STATUS_KEYS } from "../enums";
import { format, freeze } from "./formatHelper";

const data = [
	[
		STATUS_KEYS.hungry,
		{
			initial: 0,
			maxValue: 10,
			description: "fome",
			icon: ICONS_NAMES.restaurant,
		},
	],
	[
		STATUS_KEYS.mental,
		{
			initial: 50,
			maxValue: 50,
			description: "saúde mental",
			icons: {
				happy: ICONS_NAMES.happy,
				sad: ICONS_NAMES.sad,
			},
		},
	],
	[
		STATUS_KEYS.physical,
		{
			initial: 0,
			description: "saúde física",
			icon: ICONS_NAMES.barbell,
		},
	],
	[
		STATUS_KEYS.unhealth,
		{
			initial: 0,
			maxValue: 5,
			description: "saúde",
			icon: ICONS_NAMES.bandage,
		},
	],
	[
		STATUS_KEYS.written,
		{
			initial: 0,
			description: "escrita",
			icon: ICONS_NAMES.create,
		},
	],
	[
		STATUS_KEYS.read,
		{
			initial: 0,
			description: "leitura",
			icon: ICONS_NAMES.book,
		},
	],
	[
		STATUS_KEYS.pet,
		{
			initial: 0,
			description: "pet",
			icon: ICONS_NAMES.paw,
		},
	],
];

const dataFreeze = freeze.array(data);

const map = format.map(data, "Status Entity Map");

const statusEntity = { data: dataFreeze, map };

export { statusEntity };
