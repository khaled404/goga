import { TOGGLE_WISHLIST, REMOVE_FROM_WISHLIST, REFRESH_STORE } from "../constants/action-types";
import { findIndex } from "../utils";
import { toast } from 'react-toastify';

import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

const initialState = {
    list: []
}

function wishlistReducer( state = initialState, action ) {
    switch ( action.type ) {
        case TOGGLE_WISHLIST:
            const productId = action.product.id;

            if ( findIndex( state.list, product => product.id === productId ) !== -1 ) {
                const list = state.list.reduce( ( cartAcc, product ) => {
                    if ( product.id !== productId ) {
                        cartAcc.push( product );
                    } else
                        toast.error( "Item removed from Wishlist" );
                    return cartAcc
                }, [] )

                return { ...state, list }
            } else
                toast.success( "Item added to Wishlist" );

            return { ...state, list: [ ...state.list, action.product ] }

        case REMOVE_FROM_WISHLIST:
            return {
                list: state.list.filter( item => item.id !== action.productId )
            }

        case REFRESH_STORE:
            return { ...state, list: [] };

        default:
    }
    return state;
}

const persistConfig = {
    keyPrefix: "molla-",
    key: "wishlist",
    storage
}

export default persistReducer( persistConfig, wishlistReducer );