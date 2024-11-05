/*  პირველი დავალება */

const arr = [2, 5, 8, 12, 24, 92, 3, 5];

const sumFunc = function (num1, num2, ...rest) {
  const sum = num1 + num2;

  const restNumbers = rest.reduce((acc, curr) => acc * curr);

  return [sum, restNumbers];
};

console.log("პირველი დავალება:", sumFunc(...arr));

/*  მეორე დავალება */ //////////////////////////////////////////
const user = {
  name: "kosta",
  age: 24,
  banks: [
    {
      name: "Bank A",
      address: {
        city: "Tbilisi",
        country: "Georgia",
      },
    },
    {
      name: "Bank B",
      address: {
        city: "Zugdidi",
        country: "Spain",
      },
    },
    {
      name: "Bank C",
      address: {
        city: "Batumi",
        country: "Norway",
      },
    },
  ],
};

const myCity = function ({
  banks: [
    ,
    ,
    {
      address: { city },
    },
  ] = [],
}) {
  return city;
};

console.log("მეორე დავალება:", myCity(user));

/*  მესამე დავალება */ //////////////////////////////////////////

const banks = {
  bank1: {
    name: "Bank A",
    address: {
      city: "Tbilisi",
      country: "Georgia",
    },
  },
  bank2: {
    name: "Bank B",
    address: {
      city: "Zugdidi",
      country: "Spain",
    },
  },
  bank3: {
    name: "Bank C",
    address: {
      city: "Batumi",
      country: "Norway",
    },
  },
};

const CopyBanks = function (banks) {
  return {
    bank1: {
      ...banks.bank1,
      address: { ...banks.bank1.address },
    },
    bank2: {
      ...banks.bank2,
      address: { ...banks.bank2.address },
    },
    bank3: {
      ...banks.bank3,
      address: { ...banks.bank3.address },
    },
  };
};

const copiedBanks = CopyBanks(banks);

console.log("მესამე დავალება:", copiedBanks);
