export interface IProduct {
    productName: string,
    productPrice: number
}

export function ProductTableRows(props:IProduct):JSX.Element {

    const {productName , productPrice} = props;
    return (
        <tr>
            <td colSpan={2} style={{border :"1px solid black", padding:"10px"}}>{productName}</td>
            <td colSpan={2} style={{border: "1px solid black", padding:"10px"}}>{productPrice}</td>
        </tr>
    );
}