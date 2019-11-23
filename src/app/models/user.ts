export interface User {
  id: string;
  nome: string;
  foto: string;
  sexo: 'M' | 'F';
  dtNasc: number | Date;
}