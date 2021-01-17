import * as types from '../constants/action-types'
import { findIndex } from "../utils";

import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

const initialState = {
    value: { min: 0, max: 10000 },
    sortBy: "popularity",
    category: [],
    size: [],
    color: [],
    brand: [],
    rating: []
}

function filterReducer( state = initialState, action ) {
    switch ( action.type ) {
        case types.SORT_BY:
            return {
                ...state,
                sortBy: action.sortBy
            };

        case types.CATEGORY_FILTER:
            let category = Object.assign( [], state.category );
            let index = findIndex( category, item => item === action.category );
            if ( -1 === index ) {
                category.push( action.category );
            } else {
                category.splice( index, 1 );
            }
            return {
                ...state,
                category: category
            };

        case types.RESET_FILTER:
            return {
                value: { min: 0, max: 10000 },
                sortBy: "popularity",
                category: [],
                size: [],
                color: [],
                brand: [],
                rating: []
            };

        case types.SIZE_FILTER:
            let size = Object.assign( [], state.size );
            index = findIndex( size, item => item === action.size );
            if ( -1 === index ) {
                size.push( action.size );
            } else {
                size.splice( index, 1 );
            }
            return {
                ...state,
                size: size
            };

        case types.COLOR_FILTER:
            let color = Object.assign( [], state.color );
            index = findIndex( color, item => item === action.color );
            if ( -1 === index ) {
                color.push( action.color );
            } else {
                color.splice( index, 1 );
            }
            return {
                ...state,
                color: color
            };

        case types.BRAND_FILTER:
            let brand = Object.assign( [], state.brand );
            index = findIndex( brand, item => item === action.brand );
            if ( -1 === index ) {
                brand.push( action.brand );
            } else {
                brand.splice( index, 1 );
            }
            return {
                ...state,
                brand: brand
            };

        case types.RATING_FILTER:
            let rating = Object.assign( [], state.rating );
            index = findIndex( rating, item => item === action.rating );
            if ( -1 === index ) {
                rating.push( action.rating );
            } else {
                rating.splice( index, 1 );
            }
            return {
                ...state,
                rating: rating
            };

        case types.REFRESH_STORE:
            return { state: initialState };

        case types.PRICE_FILTER:
            return {
                ...state,
                value: action.range
            };

        default:
            return state;
    }
}

const persistConfig = {
    keyPrefix: 'molla-',
    key: "filter",
    storage
}

export default persistReducer( persistConfig, filterReducer );