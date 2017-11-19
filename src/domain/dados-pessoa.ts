import { Endereco } from './endereco';
import { Usuario } from './usuario';
export class DadosPessoais{
    idUsuarioComum: Number;
    nome: String;
    nascimento: Date;
    endereco: Endereco;
    usuario: Usuario;

    constructor(){
        this.endereco = new Endereco;
        this.usuario = new Usuario;
    }
}