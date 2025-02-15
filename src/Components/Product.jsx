

import img1 from "../assets/img-1.jpg"
import img2 from "../assets/img-2.jpg"
import img3 from "../assets/img-3.jpg"

//products
function Product()
{
    return(
        <div class="product">
            <div class="box">
            <img src={img1}></img>
            <p>Fogg Wood Ectereme, Eau de Perfume ,Long lasting perfume ,100ml</p>
            </div>
        <div class="box">
            <img src={img2}></img>
            <p> Fogg Wood Ectereme, Eau de Perfume ,Long lasting perfume ,100ml</p>
            </div>
        <div class="box">
            <img src={img3}></img>
            <p> Fogg Wood Ectereme, Eau de Perfume ,Long lasting perfume ,100ml</p>
            </div>

        </div>
    )
}
export default Product