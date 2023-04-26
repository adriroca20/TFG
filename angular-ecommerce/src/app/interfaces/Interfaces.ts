interface Product{
    class?:string,
    productName: string,
    image:string,
    price:string,
    link:string,
    amount?:number
}

interface SearchBar{
    class: string,
    categories: Array<string>,
    id:Partial<number>
}
interface payment{
    class:string,
    link:string,
    amount:number
    price:string,
}
interface Cart{
    class:string,
    products:Array<Product>
}

interface PreviewCart{
    class:string,
    link:string,
    total:string,
    products:Array<Product>
}

interface imageGallery{
    class:string,
    images:Array<string>
}
export {Product,SearchBar,PreviewCart, payment,Cart,imageGallery}