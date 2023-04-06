interface ProductCard{
    class:string,
    name: string,
    price: string,
    image:string,
    link: any
}
interface SearchBar{
    class: string,
    categories: Array<string>
}
interface payment{
    class:string,
    link:string,
    amount:number
    price:string,
}
interface Cart{
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
interface PreviewCart{
    class:string,
    link:string,
    total:string,
    products:Array<PreviewProductCart>
}
interface PreviewProductCart{
    image:string,
    link:string,
    price:string,
    amount:number
}
interface imageGallery{
    class:string,
    images:Array<string>
}
export {ProductCard,SearchBar,PreviewCart,productCart, payment,Cart,PreviewProductCart,imageGallery}