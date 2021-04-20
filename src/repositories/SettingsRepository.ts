import { Repository, EntityRepository } from 'typeorm';

import { Setting } from '../entities/Setting';

@EntityRepository(Setting)
class SettingsReporitory extends Repository<Setting> {}

export { SettingsReporitory }