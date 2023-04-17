export class Paciente{

    private _id: number;
    private _nombre: string;
    private _apellidos: string;
    private _dni: string;
    private _telefono: number;
    private _direccion: string;
    private _correo: string;
    
    constructor(id: number, nombre: string, apellidos: string, dni: string, telefono: number, direccion: string, correo: string){
       this._id = id;
       this._nombre = nombre;
       this._apellidos = apellidos;
       this._dni = dni;
       this._telefono = telefono;
       this._direccion = direccion;
       this._correo = correo; 
    }
    
    public get id(): number {
        return this._id;
    }
    
    public set id(value: number) {
        this._id = value;
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

    public get dni(): string {
        return this._dni;
    }
    public set dni(value: string) {
        this._dni = value;
    }

    public get telefono(): number {
        return this._telefono;
    }

    public set telefono(value: number) {
        this._telefono = value;
    }

    public get direccion(): string {
        return this._direccion;
    }

    public set direccion(value: string) {
        this._direccion = value;
    }

    public get correo(): string {
        return this._correo;
    }

    public set correo(value: string) {
        this._correo = value;
    }
}