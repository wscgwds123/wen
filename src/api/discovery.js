import request from '../utils/request'

//轮播图
export const getBannerList = () =>{
    return request({
        url:"/banner",
    })
}
//推荐歌单
export const getRecommendlist = ({limit = 10}={}) =>{
    return request({
        url:"/personalized",
        method:'get',
        params:{
            limit
        }
    })
}
//最新音乐
export const getNewSong = () =>{
    return request({
        url:"/personalized/newsong",
        method:'get',
    })
}
//推荐MV
export const getMv = () =>{
    return request({
        url:"/personalized/mv",
        method:'get',
    })
}
//获取音乐mv
export const getSongUrl = ({id}) =>{
    return request({
        url:"/song/url",
        method:'get',
        params:{
            id
        }
    })
}