const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

// escreva filterPeople abaixo

const filterPeople = (obj) => {
  const oldAustralians = obj.filter((elements) => {
    const { nationality, bornIn } = elements;

    if (nationality === 'Australian' && bornIn <= 2000) {
      return elements;
    }
  }).map((elements) => elements.name);
  
  return oldAustralians;
};

console.log(filterPeople(people));
