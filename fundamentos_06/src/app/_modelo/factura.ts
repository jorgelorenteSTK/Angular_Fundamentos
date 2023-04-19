export class Factura{
    private _idFactura: number;
    private _idCliente: number;
    private _total: number;
    private _iva: number;

    constructor(idFactura: number, idCliente: number, total: number, iva: number){
        this._idFactura = idFactura;
        this._idCliente = idCliente;
        this._total = total;
        this._iva = iva;
    }

    public get iva(): number {
        return this._iva;
    }
    public set iva(value: number) {
        this._iva = value;
    }
    
    public get total(): number {
        return this._total;
    }
    public set total(value: number) {
        this._total = value;
    }

    public get idCliente(): number {
        return this._idCliente;
    }
    public set idCliente(value: number) {
        this._idCliente = value;
    }
    
    public get idFactura(): number {
        return this._idFactura;
    }
    public set idFactura(value: number) {
        this._idFactura = value;
    }
}