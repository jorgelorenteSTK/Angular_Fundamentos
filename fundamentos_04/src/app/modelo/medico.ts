export class Medico{

    private _nombre: string;
    private _apellidos: string;
    private _cedula: number;
    private _foto: string;
    
    constructor(nombre: string, apellidos: string, cedula: number, foto: string){
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._cedula = cedula;
        this._foto = foto;
    }

    public get nombre(): string {
        return this._nombre;
    }
    
    public set nombre(value: string) {
        this._nombre = value;
    }

    public get apellidos(): string {
        return this._apellidos;
    }
    
    public set apellidos(value: string) {
        this._apellidos = value;
    }

    public get cedula(): number {
        return this._cedula;
    }

    public set cedula(value: number) {
        this._cedula = value;
    }

    public get foto(): string {
        return this._foto;
    }

    public set foto(value: string) {
        this._foto = value;
    }
}