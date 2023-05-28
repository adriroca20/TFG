interface Product{
    class?:string,
    productName:string,
    image:string,
    price:string,
    link:string,
    amount?:number
}
interface Cart{
    class?:string,
    products:Array<Product>
}
interface SearchBar{
    class: string,
    categories: Array<string>,
}
interface Payment{
    class?:string,
    link:string,
    amount:number
    price:string,
}
interface PreviewCart{
    class?:string,
    link:string,
    total:string,
    products:Array<Product>
}

interface ImageGallery{
    class?:string,
    images:Array<string>
}
export {Product,SearchBar,PreviewCart, Payment,Cart,ImageGallery}