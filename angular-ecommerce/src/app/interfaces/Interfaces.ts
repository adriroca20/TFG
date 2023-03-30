interface ProductCard{
    class:string,
    name: string,
    price: string,
    image:string,
    link: string
}
interface SearchBar{
    class: string,
    categories: Array<string>
}
interface Cart{
    class:string,
    products:Array<productCart>
}
interface PreviewCart{
    class:string,
    products:Array<productCart>
}
interface productCart{
    class:string,
    productName: string,
    image:string,
    price:string,
    link:string,
    amount:number
}
interface payment{
    class:string,
    link:string,
    amount:number
    price:string,
}
export {ProductCard,SearchBar,PreviewCart,productCart, payment,Cart}