import moment from 'moment';

const convertTime = time =>
  moment(time).fromNow();

export default convertTime;
