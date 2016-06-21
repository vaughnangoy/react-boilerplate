//import {  } from '../actions/types';

export default function (state = [], action) {
  	switch (action.type) {
	  	case '':
			return [...state, ...action.payload];
	}

  	return state;
}
