import { useSelector } from "react-redux";

const useCounter = () => {

    const counterLike = useSelector((state) =>
    state.products.products.filter((item) => item.active === true)
    );
    const counterLikes = counterLike.length;
    
    const products = useSelector((state) =>
    state.products.products.filter((item) => item.count > 0)
    );
    const counterBasket = products.length;
    return{
        counterLikes,
        counterBasket
    }
    
}

export default useCounter
