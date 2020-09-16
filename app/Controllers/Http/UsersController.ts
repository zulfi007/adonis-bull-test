import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Job from 'App/Jobs/userRegisterEmail'
import Bull from '@ioc:Rocketseat/Bull'

export default class UsersController {
  public async index ({ request }: HttpContextContract) {
    const data = request.only(['email', 'name', 'password'])
    Bull.add(Job, data)
  }
}
