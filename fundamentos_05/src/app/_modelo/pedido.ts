export class Pedido{
    private _idPedido: number;
    private _idCliente: number;
    private _nombreCliente: string;
    private _total: number;
    private _importe: number;

    constructor(idPedido: number, idCliente: number, nombreCliente: string, total: number, importe: number){
        this._idPedido = idPedido;
        this._idCliente = idCliente;
        this._nombreCliente = nombreCliente;
        this._total = total;
        this._importe = importe;
    }

    public get importe(): number {
        return this._importe;
    }

    public set importe(value: number) {
        this._importe = value;
    }

    public get total(): number {
        return this._total;
    }

    public set total(value: number) {
        this._total = value;
    }
    
    public get nombreCliente(): string {
        return this._nombreCliente;
    }

    public set nombreCliente(value: string) {
        this._nombreCliente = value;
    }

    public get idCliente(): number {
        return this._idCliente;
    }

    public set idCliente(value: number) {
        this._idCliente = value;
    }

    public get idPedido(): number {
        return this._idPedido;
    }

    public set idPedido(value: number) {
        this._idPedido = value;
    }
}