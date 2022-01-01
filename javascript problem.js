const vaxTrail = (people) => {
	let firstCategory = [];
	let secondCategory = [];
	let thirdCategory = [];
	let fourthCategory = [];
	people.forEach((person) => {
		if (person.age >= 20 && person.age <= 30 && person.temperature < 100) {
			firstCategory.push(person);
		} else if (
			person.age >= 31 &&
			person.age <= 40 &&
			person.temperature < 100
		) {
			secondCategory.push(person);
		} else if (
			person.age >= 41 &&
			person.age <= 50 &&
			person.temperature < 100
		) {
			thirdCategory.push(person);
		} else if (person.temperature >= 100) {
			fourthCategory.push(person);
		}
	});

	return {
		A: firstCategory,
		B: secondCategory,
		C: thirdCategory,
		D: fourthCategory,
	};
};
const allPeople = [
	{
		name: "MD Mohib",
		age: "22",
		temperature: 84,
	},
	{
		name: "MD Samim",
		age: "34",
		temperature: 80,
	},
	{
		name: "MD Korem",
		age: "22",
		temperature: 85,
	},
	{
		name: "MD Khalid",
		age: "45",
		temperature: 85,
	},
	{
		name: "MD Hassan",
		age: "44",
		temperature: 100,
	},
	{
		name: "MD Malek",
		age: "43",
		temperature: 109,
	},
];
const result = vaxTrail(allPeople);
console.log(result);

