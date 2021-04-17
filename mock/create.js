const getRandomNumber = (min, max) => {
  const range = max - min + 1;
  return parseInt(Math.random() * range + min, 10);
};

const createData = (index) => {
  switch (getRandomNumber(0, 2)) {
    case 1: {
      return {
        id: `VC${index}`,
        code: 'VC1',
        name: 'Virtual Coin #1',
        totalPrice: getRandomNumber(10000000, 80000000),
        currentPrice: getRandomNumber(20000, 25000),
        amount: getRandomNumber(1, 30),
        datetime: '2021/01/01 20:00:00',
      };
    }
    case 2: {
      return {
        id: `VC${index}`,
        code: 'VC2',
        name: 'Virtual Coin #2',
        totalPrice: getRandomNumber(10000, 80000),
        currentPrice: getRandomNumber(200, 2500),
        amount: getRandomNumber(20, 50),
        datetime: '2021/01/01 20:00:00',
      };
    }
    default: {
      return {
        id: `VC${index}`,
        code: 'VC3',
        name: 'Virtual Coin #3',
        totalPrice: getRandomNumber(100000000000, 800000000000),
        currentPrice: getRandomNumber(4000, 7000),
        amount: getRandomNumber(1, 5),
        datetime: '2021/01/01 20:00:00',
      };
    }
  }
};

module.exports = function () {
  return {
    transactions: Array(100)
      .fill('')
      .map((_, index) => createData(index)),
  };
};
