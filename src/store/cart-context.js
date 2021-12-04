import { createContext} from 'react';

const CardContext = createContext({
    items: [],
    totalAmt: 0,
    addItem: item => {},
    removeItem: id => {}
});

export default CardContext;