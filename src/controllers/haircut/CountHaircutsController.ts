import {Request, Response} from 'express'
import { CountHaircutsService } from '../../services/haircut/CountHaircutsService'

class CountHaircutsController{
  async handle(request: Request, response: Response){
    const user_id = request.user_id;

    const countHaircuts = new CountHaircutsService();

    const count = await countHaircuts.execute({
      user_id
    })

    return response.json(count);

  }
}

export { CountHaircutsController }