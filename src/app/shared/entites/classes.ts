export class DropdownViewModel {
    ListaExercicio: ExercicioViewModel[] = [];
    ListaPerfil: PerfilViewModel[] = [];
    ListaTipoPlano: TipoViewModel[] = [];
    ListaTipoObservacao: TipoViewModel[] = [];
    ListaTipoObjetivo: TipoViewModel[] = [];
    ListaTipoGrupoFicha: TipoViewModel[] = [];
    ListaTipoAtividade: TipoViewModel[] = [];
    ListaTipoFicha: TipoFichaViewModel[] = [];
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}

export class PerfilViewModel {
    ID: number;
    Nome: string;
}
export class ImagemViewModel {
    Base64: string;
}
export class ProfessorViewModel { constructor() { } }
export class FriendViewModel {
    ID: number;
    Usuario = new UsuarioViewModel();
}
export class MedidaViewModel {
    ID: number;
    BracoEsquerdo: string;
    BracoDireito: string;
    Torax: string;
    AntebracoEsquerdo: string;
    AntebracoDireito: string;
    CoxaEsquerda: string;
    CoxaDireita: string;
    Quadril: string;
    PernaEsquerda: string;
    PernaDireita: string;
    Cintura: string;
}
export class MensagemViewModel {
    ID: number;
    Descricao: string;
    Lido: boolean;
    UsuarioID: number;
    UsuarioNome: string;
    UsuarioImg: string;
    Hora: string;
}

export class ExercicioViewModel {
    ID: number;
    Nome: string;
}

export class TipoFichaViewModel {
    ID: number;
    Nome: string;
    Sigla: string;
}
export class TipoViewModel {
    ID: number;
    Nome: string;
}

export class UsuarioViewModel {
    ID: number;
    Nome: string;
    Email: string;
    Senha: string;
    Idade: number;
    Sexo: number;
    Altura: string;
    PesoCorporal: string;
    PesoAlvo: string;

    ListaMedidas: MedidaViewModel[] = [];
    GrupoMensagens: GrupoMensagemViewModel[];
    Perfil = new PerfilViewModel();
    Objetivo = new TipoViewModel();
    Atividade = new TipoViewModel();
    Professor = new ProfessorViewModel();
    Imagem = new ImagemViewModel();
}

export class FichaInfoViewModel {
    Carga: string;
    QuantidadeRepeticao: string;
    QuantidadeSerie: string;
    Observacao = new TipoViewModel();
    Exercicio = new ExercicioViewModel();
}

export class FichaViewModel {
    Nome: string;
    Observacao: string;
    Tipo = new TipoFichaViewModel();
    ListaFichaInfo: FichaInfoViewModel[];
}

export class GrupoFichaViewModel {
    ListaFicha: FichaViewModel[];
    Usuario = new UsuarioViewModel();
    Tipo = new TipoViewModel();
}

export class PostInfoViewModel { constructor() { } }
export class ComentarioViewModel {
    ID: number;
    Descricao: string;
    Hora: string;
    Usuario = new UsuarioViewModel();
}

export class PostViewModel {
    ID: number;
    Descricao: string;
    Hora: string;
    Likes: number;
    Deslikes: number;
    Comments: number;
    Imagem: string;

    Usuario = new UsuarioViewModel();

    ListaLike: PostInfoViewModel[] = [];
    ListaDesLike: PostInfoViewModel[] = [];
    ListaComentario: ComentarioViewModel[] = [];
}


export class GrupoMensagemViewModel {
    ID: number;
    Nome: string;
    Hora: string;
    ListaMensagem: MensagemViewModel[];
    ListaUsuario: UsuarioViewModel[];
}

export class CriarGrupoViewModel {
    Destinatarios: number[];
}


