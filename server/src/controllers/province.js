import * as postService from '../services/province'

export const getProvinces = async(req, res) => {
    try {
        const response = await postService.getProvincesService()
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at post controller: ' + error
        })
    }
}
