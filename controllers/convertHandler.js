/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */

function ConvertHandler() {
  const liquidVolume = ['gal', 'L']
  const weight = ['lbs', 'kg']
  const distance = ['mi', 'km']

  this.getNum = function (input) {
    const result = input.split(/[a-zA-Z]/)[0]
    console.log('getNum', { result })
    return result
  }

  this.getUnit = function (input) {
    const result = input.split(/(?=[0-9]*)([a-z]+)/gi)[1]
    console.log('getUnit', { result })
    return result
  }

  this.getReturnUnit = function (initUnit) {
    let result = null

    if (initUnit === liquidVolume[0]) result = liquidVolume[1]
    if (initUnit === liquidVolume[1]) result = liquidVolume[0]
    if (initUnit === weight[0]) result = weight[1]
    if (initUnit === weight[1]) result = weight[0]
    if (initUnit === distance[0]) result = distance[1]
    if (initUnit === distance[1]) result = distance[0]

    if (!result) console.warn('*** Incorrect unit submitted!')

    console.log('getReturnUnit', { result })
    return result
  }

  this.spellOutUnit = function (unit) {
    const result = null
    console.log('spellOutUnit', { result })
    return result
  }

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541
    const lbsToKg = 0.453592
    const miToKm = 1.60934
    let result = null

    // Imperial [0]
    if (initUnit === liquidVolume[0]) {
      result = Number(initNum * galToL).toFixed(2)
    }
    if (initUnit === weight[0]) {
      result = Number(initNum * lbsToKg).toFixed(2)
    }
    if (initUnit === distance[0]) {
      result = Number(initNum * miToKm).toFixed(2)
    }
    // Metric [1]
    if (initUnit === weight[1]) {
      result = Number(initNum / lbsToKg).toFixed(2)
    }
    if (initUnit === liquidVolume[1]) {
      result = Number(initNum / galToL).toFixed(2)
    }
    if (initUnit === distance[1]) {
      result = Number(initNum / miToKm).toFixed(2)
    }

    console.log('convert', { result })
    return result
  }

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    const result = returnNum + returnUnit
    console.log('getString', { result })
    return result
  }
}

module.exports = ConvertHandler
