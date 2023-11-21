import { Categoria } from "./categoria.model";

export interface Tarefa {
    tarefaId?: number;
    titulo: string,
    descricao: string,
    criadoEm?: string,
    categoriaId: number | null;
    categoria?: Categoria;
    status: string;
}