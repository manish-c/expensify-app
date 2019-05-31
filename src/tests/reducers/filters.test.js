import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values',() => {
    const state = filtersReducer(undefined,{ type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
});

test('should set sortby to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should set sortby to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = { type: 'SORT_BY_DATE' };
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'at' });
    expect(state.text).toBe('at');
});

test('should setup start date',() => {
    const state = filtersReducer(undefined,{ type: 'SET_START_DATE', startDate: moment(1) });
    expect(state.startDate).toEqual(
        moment(1)
    )
});

test('should setup end date',() => {
    const state = filtersReducer(undefined,{ type: 'SET_END_DATE', endDate: moment(1) });
    expect(state.endDate).toEqual(
        moment(1)
    )
});
