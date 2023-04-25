import { Nivel } from "./nivel";

export class Curso{
    private _id: number;
    private _nombre: string;
    private _duracion: number;
    private _nivel: Nivel;

    constructor(id: number, nombre: string, duracion: number, nivel: Nivel){
        this._id = id;
        this._nombre = nombre;
        this._duracion = duracion;
        this._nivel = nivel;
    }

    public get nivel(): Nivel {
        return this._nivel;
    }

    public set nivel(value: Nivel) {
        this._nivel = value;
    }
    
    public get duracion(): number {
        return this._duracion;
    }
    
    public set duracion(value: number) {
        this._duracion = value;
    }
    
    public get nombre(): string {
        return this._nombre;
    }

    public set nombre(value: string) {
        this._nombre = value;
    }

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }
}