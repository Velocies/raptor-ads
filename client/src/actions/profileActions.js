import { push } from 'react-router-redux';
import { UPDATE_FORM_FIELD, GET_CURRENT_PROFILE, UPDATE_PROFILE_SUCCESS, LOGOUT } from '../constants';

export const updateFormField = (field, value) =>
  ({
    type: UPDATE_FORM_FIELD,
    field,
    value,
  });

export const getCurrentProfile = user =>
  ({
    type: GET_CURRENT_PROFILE,
    user,
  });

export const patchUser = user => 
  fetch(`/api/users/${user.id}`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });

export const updateProfileSuccess = user =>
  ({
    type: UPDATE_PROFILE_SUCCESS,
    text: 'Profile Updated!',
    data: user,
  });

export const updateProfile = user =>
  (dispatch) => {
    patchUser(user)
    .then((res) => {
      res.json()
      .then((data) => {
        if (res.status === 200) {
          dispatch(updateProfileSuccess(data));
        }
      });
    });
  };

export const deleteUser = user =>
  fetch(`/api/users/${user.id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });

export const deleteProfileSuccess = () =>
  ({
    type: LOGOUT,
  });

export const deleteProfile = user =>
  (dispatch) => {
    deleteUser(user)
    .then((res) => {
      if (res.status === 200) {
        dispatch(deleteProfileSuccess());
        localStorage.removeItem('raptor_token');
        dispatch(push('/landing'));
      }
    });
  };
