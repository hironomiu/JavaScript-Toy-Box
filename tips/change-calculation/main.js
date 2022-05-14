console.log('Change calculation(お釣り計算)')

const changeCalculation = (price, i500 = 10, i100 = 10, i50 = 10, i10 = 10) => {
  for (ii500 = 0; ii500 <= i500; ii500++) {
    for (ii100 = 0; ii100 <= i100; ii100++) {
      for (ii50 = 0; ii50 <= i50; ii50++) {
        for (ii10 = 0; ii10 <= i10; ii10++) {
          const total = ii500 * 500 + ii100 * 100 + ii50 * 50 + ii10 * 10
          if (total === price) {
            console.log(
              `total(${price} = 500 * ${ii500} + 100 * ${ii100} + 50 * ${ii50} + 10 * ${ii10})`
            )
          }
        }
      }
    }
  }
}

console.log(changeCalculation(5000))
