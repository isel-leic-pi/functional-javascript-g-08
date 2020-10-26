let pets =  ['cat', 'dog', 'rat']

for(let i=0;i<pets.length;++i){
    pets[i] = pets[i] + 's'
}
console.log(pets)

/*Here's the official solution in case you want to compare notes:

─────────────────────────────────────────────────────────────────────────────

    const pets = ['cat', 'dog', 'rat']

    for (let i = 0; i < pets.length; i++) {
      pets[i] = pets[i] + 's'
    }

    console.log(pets)

────────────────────────────────────────────────────────────────────────────
───────────────────────────────────────────────────────────────────────────── */