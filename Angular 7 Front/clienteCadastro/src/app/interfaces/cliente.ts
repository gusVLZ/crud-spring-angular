import { Representante } from "./representante";

export interface Cliente {
 id: number;
 nome: string;
 email: string;
 dtVisita: Date;
 representante: Representante;
 valorDesloc: number;
}
