class ElectroDiv {
  constructor(name, power) {
    this.name = name;
    this.power = power;
  }
  getStatus (status) {
    if (status === 'ON') {
      console.log(`${this.name} in working`)
    } else if (status === 'Off') {
      console.log(`${this.name} is NOT working now`)
    } else {
      console.log('Enter correct status')
    }
  }
}

const vac = new ElectroDiv ('Vacuum', 800)
vac.getStatus('ON')

class MusicElectroInst extends ElectroDiv {
  constructor(name, kind, vol) {
    super(name);
    this.kind = kind;
    this.vol = vol;
  }
  getLisen () {
    return `This ${name} make realy cool ${this.kind} music very ${this.vol}`
  }
}

const guitar = new MusicElectroInst('Guitar', 'clasic', 'loud')
console.log(guitar.getLisen())
guitar.getStatus('Off')
console.log(vac)
console.log(guitar)
