import pizza_1 from "../../../../../images/pizza-1.jpg"
import pizza_2 from "../../../../../images/pizza-2.jpg"
import pizza_3 from "../../../../../images/pizza-3.jpg"
import drink_1 from "../../../../../images/drink-1.jpg"
import drink_2 from "../../../../../images/drink-2.jpg"
import drink_3 from "../../../../../images/drink-3.jpg"
import burger_1 from "../../../../../images/burger-1.jpg"
import burger_2 from "../../../../../images/burger-2.jpg"
import burger_3 from "../../../../../images/burger-3.jpg"
import pasta_1 from "../../../../../images/pasta-1.jpg"
import pasta_2 from "../../../../../images/pasta-2.jpg"
import pasta_3 from "../../../../../images/pasta-3.jpg"
import {ADD_TO_CART, REMOVE_ITEM, ADD_QUANTITY, SUB_QUANTITY} from "../action/cartActions";

const initState = {
    items: [
        {
            cate_id: 1,
            id: 1,
            title: "Itallian Pizza",
            img: pizza_1,
            desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
            price: 2.90
        },
        {
            cate_id: 1,
            id: 2,
            title: "Itallian Pizza",
            img: pizza_2,
            desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
            price: 2.90
        },
        {
            cate_id: 1,
            id: 3,
            title: "Itallian Pizza",
            img: pizza_3,
            desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
            price: 2.90
        },
        {
            cate_id: 2,
            id: 4,
            title: "Itallian Pizza",
            img: drink_1,
            desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
            price: 2.90
        },
        {
            cate_id: 2,
            id: 5,
            title: "Itallian Pizza",
            img: drink_2,
            desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
            price: 2.90
        },
        {
            cate_id: 2,
            id: 6,
            title: "Itallian Pizza",
            img: drink_3,
            desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
            price: 2.90
        },
        {
            cate_id: 3,
            id: 7,
            title: "Itallian Pizza",
            img: burger_1,
            desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
            price: 2.90
        },
        {
            cate_id: 3,
            id: 8,
            title: "Itallian Pizza",
            img: burger_2,
            desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
            price: 2.90
        },
        {
            cate_id: 3,
            id: 9,
            title: "Itallian Pizza",
            img: burger_3,
            desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
            price: 2.90
        },
        {
            cate_id: 4,
            id: 10,
            title: "Itallian Pizza",
            img: pasta_1,
            desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
            price: 2.90
        },
        {
            cate_id: 4,
            id: 11,
            title: "Itallian Pizza",
            img: pasta_2,
            desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
            price: 2.90
        },
        {
            cate_id: 4,
            id: 12,
            title: "Itallian Pizza",
            img: pasta_3,
            desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
            price: 2.90
        }
    ],
    addedItems: [],
    total: 0.0
};

function prec(num) {
    return parseFloat(parseFloat(num).toPrecision(3));
}

const cartReducer = (state = initState, action) => {
    if (action.type === ADD_TO_CART) {
        let addItem = state.items.find(item => item.id === action.id);
        //check if the action id exists in the addedItems
        let checkExistItem = state.addedItems.find(item => action.id === item.id);
        if (checkExistItem) {
            addItem.quantity += 1;
            return {
                ...state,
                total: prec(state.total + addItem.price)
            };
        } else {
            addItem.quantity = 1;
            let newTotal = state.total + addItem.price;
            return {
                ...state,
                addedItems: [...state.addedItems, addItem],
                total: prec(newTotal)
            }
        }
    }
    if (action.type === REMOVE_ITEM) {
        let itemToRemove = state.addedItems.find(item => action.id === item.id);
        let new_items = state.addedItems.filter(item => action.id !== item.id);

        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity);
        return {
            ...state,
            addedItems: new_items,
            total: prec(newTotal)
        }
    }
    if (action.type === ADD_QUANTITY) {
        let addedItem = state.items.find(item => item.id === action.id);
        addedItem.quantity += 1;
        let newTotal = state.total + addedItem.price;
        return {
            ...state,
            total: prec(newTotal)
        }
    }
    if (action.type === SUB_QUANTITY) {
        let addedItem = state.items.find(item => item.id === action.id);
        //if the qt == 0 then it should be removed
        if (addedItem.quantity === 1) {
            let new_items = state.addedItems.filter(item => item.id !== action.id);
            let newTotal = state.total - addedItem.price;
            return {
                ...state,
                addedItems: new_items,
                total: prec(newTotal)
            }
        } else {
            addedItem.quantity -= 1;
            let newTotal = state.total - addedItem.price;
            return {
                ...state,
                total: prec(newTotal)
            }
        }

    } else {
        return state
    }
};
export default cartReducer;