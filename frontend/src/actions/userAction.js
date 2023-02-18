import * as UserApi from '../api/userRequest'

export const updateUser = (id, formData) => async (dispatch) => {
    dispatch({
        type: "UPDATING_START",
    })

    try {
        const { data } = await UserApi.updateUser(id, formData);
        dispatch({
            type: "UPDATING_SUCCESS"
        })
    } catch (error) {
        dispatch({
            type: "UPDATING_FAIL"
        })
    }
}