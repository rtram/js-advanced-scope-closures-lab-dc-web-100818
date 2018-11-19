const produceDrivingRange = function(blockRange) {
  return function drivingRange(start, destination) {
    let a = parseInt(start.slice(0,-2))
    let b = parseInt(destination.slice(0,-2))
    let distance = Math.abs(a-b)

    if (distance <= blockRange) {
      return `within range by ${blockRange - distance}`
    } else {
      return `${distance - blockRange} blocks out of range`
    }
  }
};

const produceTipCalculator = function(tipPercentage) {
  return function (fare) {
    return fare * tipPercentage
  }
}

const createDriver = function() {
  let DriverId = 0;
  return class {
    constructor(name) {
      this.name = name
      this.id = ++DriverId;
    }
  }
}
