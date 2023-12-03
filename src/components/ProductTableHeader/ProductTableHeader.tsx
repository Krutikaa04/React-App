
export interface IProductHeader {
    nameHeader: string,
    priceHeader: string
}

export function ProductTableHeader(props:IProductHeader): JSX.Element {
    const {nameHeader, priceHeader} = props;

    return (
        <tr>
            <th colSpan={2} style={{border: "2px solid black", padding:"10px"}}>{nameHeader}</th>
            <th colSpan={2} style={{border: "2px solid black", padding:"10px"}}>{priceHeader}</th>
        </tr>
    );
}