import { TipoUsuario } from './tipo-usuario';
export class Usuario {

    idUser: number;
    loginUser: String;
    password: String;
    tipoUsuario: TipoUsuario;
    dataCriacao: Date;
    ativo: Boolean;
    
    constructor () {
        this.tipoUsuario = new TipoUsuario;
    }
}