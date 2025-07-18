'use server';

import { skillsService } from '@/services/skills';
import { Skills } from '@/db/types.generated';
import { Selectable } from 'kysely';

export async function getAllSkills(): Promise<Selectable<Skills>[]> {
  return await skillsService.getAllSkills();
}

export async function getSkillsByCategory(category: string): Promise<Selectable<Skills>[]> {
  return await skillsService.getSkillsByCategory(category);
} 