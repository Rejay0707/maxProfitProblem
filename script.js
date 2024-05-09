function maxProfit(timeUnits) {
  const theatres = [];
  const pubs = [];
  const commercialParks = [];

  for (let i = 0; i <= timeUnits; i++) {
    if (i < 5) {
      theatres[i] = 0;
    } else {
      if (i === 5) {
        theatres[i] = 1;
      } else {
        theatres[i] = theatres[i - 5] + 1;
      }
    }

    if (i < 4) {
      pubs[i] = 0;
    } else {
      pubs[i] = Math.max(pubs[i - 4] + 1, theatres[i - 4]);
    }

    if (i < 10) {
      commercialParks[i] = 0;
    } else {
      commercialParks[i] = Math.max(
        commercialParks[i - 10] + 1,
        Math.max(pubs[i - 10], theatres[i - 10])
      );
    }
  }

  const totalProfit =
    commercialParks[timeUnits] * 3000 +
    pubs[timeUnits] * 1000 +
    theatres[timeUnits] * 1500;

  const result = {
    theatres: theatres[timeUnits],
    pubs: pubs[timeUnits],
    commercialParks: commercialParks[timeUnits],
    totalProfit,
  };

  return result;
}

// Test cases
console.log(maxProfit(7));
console.log(maxProfit(8));
console.log(maxProfit(13));
