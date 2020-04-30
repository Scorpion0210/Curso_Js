let amigo = {
    nome: 'Fabiano', 
    sexo: 'M', 
    peso: 60.5, 
    idade: 37, 
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
    }
}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg.`)