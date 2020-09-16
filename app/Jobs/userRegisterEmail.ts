// @ts-ignore
import {JobContract} from '@ioc:Rocketseat/Bull'
import Mail from '@ioc:Adonis/Addons/Mail'
import Env from '@ioc:Adonis/Core/Env'

export default class UserRegisterEmail implements JobContract {
  public key = 'UserRegisterEmail'

  public async handle (job) {
    const {data} = job // the 'data' variable has user data
    const sender = Env.get('MAIL_SENDER', 'esmartpk@gmail.com')

    await Mail.sendLater(message => {
      message
        .to(data.email)
        .from(sender as any)
        .subject('Welcome to Elite Smart Solutions')
    })

    return data
  }
}
