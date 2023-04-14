export class Bicicleta {
    // Properties
    private _color: string;
    private _marca: string;
    private _velocidad: number; 
    private _pinones: number;
    private _platos: number;
    private _electrica: boolean;

    // Constructor
    constructor(color: string, marca: string, velocidad: number, pinones: number, platos: number, electrica: boolean) {
        this._color = color;
        this._marca = marca;
        this._velocidad = velocidad;
        this._pinones = pinones;
        this._platos = platos;
        this._electrica = electrica;
    }
    // Accessors
    public get color(): string {
        return this._color;
    }

    public set color(value: string) {
        this._color = value;
    }

    public get marca(): string {
        return this._marca;
    }

    public set marca(value: string) {
        this._marca = value;
    }

    public get velocidad(): number {
        return this._velocidad;
    }

    public set velocidad(value: number) {
        this._velocidad = value;
    }

    public get pinones(): number {
        return this._pinones;
    }

    public set pinones(value: number) {
        this._pinones = value;
    }

    public get platos(): number {
        return this._platos;
    }

    public set platos(value: number) {
        this._platos = value;
    }
    
    public get electrica(): boolean {
        return this._electrica;
    }

    public set electrica(value: boolean) {
        this._electrica = value;
    }

    // Methods
    public acelerar(velocidad: number) {
        this._velocidad += velocidad;
    }

    public frenar(velocidad: number){
        this._velocidad -= velocidad;
    }

    public toString(): string{
        return `Color: ${this.color}, Marca:${this.marca}, Velocidad:${this.velocidad}, Piñones:${this.pinones}, Platos:${this.platos}, ¿Electrica?: ${(this.electrica?"Si":"No")}`
    }
}