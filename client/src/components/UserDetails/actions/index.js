export const START_FETCHING_USER = 'START_FETCHING_USER';
export const USER_DETAILS_SUCCESS = 'USER_DETAILS_SUCCESS';

const fetchUserDetails = userId =>
  fetch(`/api/users/${userId}`);

const startFetchingUser = () =>
  ({
    type: START_FETCHING_USER,
  });

const userDetailsSuccess = payload =>
  ({
    type: USER_DETAILS_SUCCESS,
    payload,
  });

export const getUserDetails = userId =>
  (dispatch) => {
    dispatch(startFetchingUser());
    fetchUserDetails(userId)
      .then((res) => {
        if (res.status === 200) {
          res.json()
            .then((data) => {
              dispatch(userDetailsSuccess(data));
            });
        }
      });
  };
