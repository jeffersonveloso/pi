import { Municipio } from './municipio';
export class Endereco{
    idEndereco: Number;
    rua: String;
    bairro: String;
    numero: Number;
    complemento: String;
    municipio: Municipio;

    constructor (){
        this.municipio = new Municipio;        
    }
}