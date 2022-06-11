// populates data in the tables.

export let people = (length=50_000) => new Array(length).fill(true).map((val, id) => ({
    id: id,
    firstName: Math.random().toString(20).substring(8),
    lastName: Math.random().toString(20).substring(8),
    age: Math.ceil(Math.random() * 100)
}));
