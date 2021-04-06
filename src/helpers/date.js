import moment from 'moment';

export const hourMonth = (date) => {
    const today = moment(date);

    return today.format('HH:mm a | MMMM Do')
};