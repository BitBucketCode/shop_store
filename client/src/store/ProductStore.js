import {makeAutoObservable} from "mobx";

export default class ProductStore {
    constructor() {
        this._types = [
            {id:1, name: 'Table'},
            {id:2, name: 'Armchair'},
        ]
        this._brands = [
            {id:1, name: 'B&B'},
            {id:2, name: 'Zara Home'},
        ]
        this._product = [
            {id:1, name: 'ITALIA table', price: 99, rating: 5, img: 'https://www.myareadesign.it/files/archivio2_1_Files/Foto/179513.JPG'},
            {id:2, name: 'BOUCLE', price: 115, rating: 4, img: 'https://b2.3ddd.ru/media/cache/tuk_model_custom_filter_en/model_images/0000/0000/3454/3454199.60b0c3f6ac7fd.jpeg'}
        ]
        makeAutoObservable(this)
    }

    setTypes(types){
        this._types = types
    }
    setBrands(brands){
        this._brands = brands
    }
    setProduct(product){
        this._product = product
    }
    get types(){
        return this._types
    }
    get brands(){
        return this._brands
    }
    get product(){
        return this._product
    }
}