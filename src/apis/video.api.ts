/* eslint-disable @typescript-eslint/no-explicit-any */
import http from '~/utils/http'

const VIDEO_PATH = {
  GET: '/videos',
  PATCH_VIEW: '/videos/view',
  CREATE: '/videos/create',
  RESOURCE_VIDEO_PUBLIC_ID: '/videos/resource/'
}

class VideoApi {
  create(data: FormData) {
    return http.post<VideoCreateResponse>(VIDEO_PATH.CREATE, data, {
      headers: {
        'Content-Type': 'multipart/form-data'
        // 'x-rapidapi-host': 'file-upload8.p.rapidapi.com'
      }
    })
  }

  async get(page: number) {
    const res = await http.get<VideoResponse>(VIDEO_PATH.GET + '?page=' + page)
    return res.data
  }

  async getResourceVideo(public_id: string) {
    const res = await http.get<any>(VIDEO_PATH.RESOURCE_VIDEO_PUBLIC_ID + public_id)
    return res.data
  }

  async getOneVideo(id?: string) {
    if (id) {
      const res = await http.get<VideoDetailResponse>(VIDEO_PATH.GET + `/${id}`)
      return res.data
    }

    return
  }

  async patchViewVideo(video_id: string) {
    const res = await http.get<VideoResponse>(VIDEO_PATH.PATCH_VIEW + video_id)
    return res.data
  }

  destroyVideo(video_id: string) {
    return http.delete<any>(VIDEO_PATH.GET + '/' + video_id)
  }
}

export default new VideoApi()
