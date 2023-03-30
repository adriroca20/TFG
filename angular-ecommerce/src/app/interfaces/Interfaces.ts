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
export {ProductCard,SearchBar,PreviewCart,productCart}