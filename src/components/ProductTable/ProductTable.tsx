import {
    IProductHeader,
    ProductTableHeader
} from "../ProductTableHeader/ProductTableHeader";

import {
    ProductTableRows
}from "../ProductTableRows/ProductTableRows";



export function ProductTable(): JSX.Element {
const products = [
    <ProductTableRows productName={"Apple"} productPrice={ 10} />,
    <ProductTableRows productName={"Mango"} productPrice={ 30} />,
];

const productHeader: IProductHeader = {
    nameHeader: "Fruit Name",
    priceHeader: "Price"
};


    return (
        <table>
            <tbody> {ProductTableHeader(productHeader)}</tbody> {" "}
            <tbody>{products}</tbody>
        </table>
    );
}