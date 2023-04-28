export class Menu{
    private _icono: string;
    private _nombre: string;
    private _url: string;

    constructor(icono: string, nombre: string, url: string){
        this._icono = icono;
        this._nombre = nombre;
        this._url = url;
    }

    public get icono(): string {
        return this._icono;
    }

    public set icono(value: string) {
        this._icono = value;
    }
    
    public get nombre(): string {
        return this._nombre;
    }

    public set nombre(value: string) {
        this._nombre = value;
    }

    public get url(): string {
        return this._url;
    }

    public set url(value: string) {
        this._url = value;
    }
}