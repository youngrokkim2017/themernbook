import * as PostApi from '../api/postRequest'

export const getTimelinePosts = (id) => async (dispatch) => {
    dispatch({
        type: "RETRIEVING_START"
    })

    try {
        const { data } = await PostApi.getTimelinePosts(id)
        dispatch({
            type: "RETRIEVING_SUCCESS",
            data: data,
        })
    } catch (error) {
        dispatch({
            type: "RETRIEVING_FAIL"
        })
        console.log(error)
    }
}

// export const likePost = (id, userId) => async (dispatch) => {
//     try {
//         const { data } = await PostApi.likePost(id, userId)
//         dispatch({
//             type: "LIKE_OR_UNLIKE_SUCCESS",
//             data: data,
//         })
//     } catch (error) {
//         dispatch({
//             type: "LIKE_FAIL",
//         })
//         console.log(error)
//     }
// }