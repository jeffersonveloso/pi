import { Uf } from './uf';
export class Municipio{
    idMunicipio: Number;
    nomeMunicipio: String;
    uf: Uf;

    constructor(){
        this.uf = new Uf;
    }
}