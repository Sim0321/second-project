import React, { useState } from 'react';
import { useAppDispatch } from '../../../store/hook';
import { setPlus, setMinus } from '../../../store/slice/totalPriceSlice';

const ProductCount = () => {

    const dispatch = useAppDispatch();

    const [count, setCount] = useState<number>(1);

    const clickMinus = () => {
        if (count > 1){
            setCount(count - 1);
            dispatch(setMinus(1));
        }
    }
    
    const clickPlus = () => {
        const stock1 = 3;
        if (count >= 1 && count < stock1) {
            setCount(count + 1);
            dispatch(setPlus(1));
        }
        else if (count >= stock1){
            alert(`현재 고객님께서 최대 구매 가능하신 수량은 ${stock1}개 입니다.`);
            return;
        }
    }

    return (
        <div className="product_count_container">
            <div className="count_container">
                <div className="count_min_wrapper">
                    <span onClick={clickMinus}>−</span>
                </div>
                <div className="count_num_wrapper">
                    <span>{count}</span>
                </div>
                <div className="count_plus_wrapper">
                    <span onClick={clickPlus}>+</span>
                </div>
            </div>
            <div className="count_price_wrapper">
                <span>15,000원</span>
            </div>
        </div>
    )
}

export default ProductCount;
