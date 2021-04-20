import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { SettingsReporitory } from '../repositories/SettingsRepository';

class SettingsController {

  async create(request: Request, response: Response) {
    const { chat, username } = request.body;

    const settingsReporitory = getCustomRepository(SettingsReporitory);
    
    const settings = settingsReporitory.create({
      chat,
      username
    })

    await settingsReporitory.save(settings);

    return response.json(settings);
    }
}

export { SettingsController }