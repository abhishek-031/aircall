import { ActionTypes, createAction } from "../hooks/useStore";
import ApiEndpoints from "./ApiEndpoints";

export const GET_ALL_ACTIVITIES = (dispatch) => {
  fetch(ApiEndpoints.GET_ALL_ACTIVITIES)
    .then((response) => {
      response.json().then((data) => {
        dispatch(createAction(ActionTypes.ACTIVITIES_FETCHED, data));
      });
    })
    .catch((e) => {
      console.log(e);
    });
};

export const RESET_ALL_ACTIVITIES = (dispatch) => {
  fetch(ApiEndpoints.RESET_ALL_ACTIVITIES, {
    method: "PATCH",
  })
    .then((response) => {
      if (response.status == 200) {
        GET_ALL_ACTIVITIES(dispatch);
      }
    })
    .catch((e) => {
      console.log(e);
    });
};

export const UPDATE_ACTIVITY = (id, updateTo, dispatch) => {
  fetch(ApiEndpoints.UPDATE_ACTIVITY_BY_ID + id, {
    method: "PATCH",
    body: JSON.stringify({
      is_archived: updateTo,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.status == 200) {
        GET_ALL_ACTIVITIES(dispatch);
      }
    })
    .catch((e) => {
      console.log(e);
    });
};

export const ARCHIVE_ALL_ACTIVITIES = (activities, dispatch) => {
  const promiseArray = activities.map((activity) => {
    return fetch(ApiEndpoints.UPDATE_ACTIVITY_BY_ID + activity.id, {
      method: "PATCH",
      body: JSON.stringify({
        is_archived: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  });

  Promise.all(promiseArray)
    .then((response) => {
      GET_ALL_ACTIVITIES(dispatch);
    })
    .catch((e) => {
      console.log(e);
    });
};
