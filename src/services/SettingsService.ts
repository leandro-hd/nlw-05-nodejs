import { getCustomRepository, Repository, UpdateDateColumn } from 'typeorm';
import { Setting } from '../entities/Setting';
import { SettingsReporitory } from '../repositories/SettingsRepository';

interface ISettingsCreate {
  chat: boolean;
  username: string;
}

class SettingsService {
  private settingsRepository: Repository<Setting>;

  constructor() {
    this.settingsRepository = getCustomRepository(SettingsReporitory);
  }

  async create({ chat, username } : ISettingsCreate) {

    const userAlreadyExistis = await this.settingsRepository.findOne({
      username
    });

    if (userAlreadyExistis) {
      throw new Error('User already exists!');
    }
 
    const settings = this.settingsRepository.create({
      chat,
      username
    });

    await this.settingsRepository.save(settings);

    return settings;
  }

  async findByUsername(username: string) {
    const settings = await this.settingsRepository.findOne({
      username
    });
    
    return settings;    
  }

  async update(username: string, chat: boolean) {
    const settings = await this.settingsRepository.createQueryBuilder().
    update(Setting)
    .set({chat})
    .where('username = :username', {
      username
    }).execute();
  }
}

export { SettingsService }