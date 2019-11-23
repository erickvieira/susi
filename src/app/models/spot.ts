export interface Spot {
    id: string;
    nome: string;
    telefone?: string;
    emdereco?: string;
    distancia?: number;
    vacinasIndisponiveis?: string[];
    indicador?: 0 | 1 | 2;
    coords: [number, number];
    horarioAtend: [string, string];
    itensAcessibilidade?: string[];
}
