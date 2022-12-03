function ElectroDiv (name, power) {
  this.power = power,
  this.name = name
}

ElectroDiv.prototype.getTern = function (status) {
  if (status === 'On') {
    console.log(`${this.name} is working`)
  } else {
    console.log(`${this.name} is NOT working now`)
  }
}

const vacumClin = new ElectroDiv('Vacuum', 800)

function MusicElectro (name, kind) {
  this.kind = kind,
  this.name = name
  this.getOpinion = function () {
    console.log(`${name} sounds GOOD!`)
  }
}

MusicElectro.prototype = new ElectroDiv()

const dram = new MusicElectro('Dram', 'bas')

dram.getOpinion()
dram.getTern('On')
console.log(vacumClin)
console.log(dram)
