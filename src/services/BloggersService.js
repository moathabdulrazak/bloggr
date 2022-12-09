import { AppState } from "../AppState.js"
import { Blogger } from "../models/Blogger.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"



class BloggersService {

  async getBlogs() {
    const res = await api.get('api/blogs')
    logger.log("blogs", res.data)
    AppState.blogs = res.data.map(b => new Blogger(b))
  }



  async createPost(postData) {
    const res = await api.post('api/blogs', postData)
    logger.log(res.data)
    AppState.blogs.push(res.data)
  }



  setActiveBlog(blog) {
    AppState.activeBlog = blog
  }


  async getBlogUserById(creatorId) {
    const res = await api.get('api/blogs/', { params: { creatorId: creatorId } })
    logger.log("get profile blogs", res.data)

    AppState.activeBlogs = res.data.map(b => new Blogger(b))
  }
}



export const bloggersService = new BloggersService()