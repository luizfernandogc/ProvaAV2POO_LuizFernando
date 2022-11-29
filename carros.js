class Veiculo {
    constructor(rodas,combustivel) {
    this.rodas = rodas;
    this.combustivel = combustivel
    }
acelerar(){
console.log('acelerou...');
}}
    
class Moto extends Veiculo {
        constructor(rodas, combustivel, capacete) {
        super(rodas, combustivel);
        this.capacete = capacete;
        }
        acelerar() {
            super.acelerar();
            console.log('empinou muito...');
            }
            empinar(){
                console.log('Empinar...')
            }
       }
const honda = new Moto(2, 'Gasolina', true);
const BMW = new Veiculo(4,'Gasolina');
console.log(honda)
console.log(BMW)