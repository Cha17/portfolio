import { db } from '../db/kysely';
import type { Skills } from '../db/types.generated';
import type { Insertable, Selectable, Updateable } from 'kysely';

export const skillsService = {
  // Get all skills
  async getAllSkills(): Promise<Selectable<Skills>[]> {
    return await db
      .selectFrom('skills')
      .selectAll()
      .orderBy('category')
      .orderBy('display_order')
      .execute();
  },

  // Get skills by category
  async getSkillsByCategory(category: string): Promise<Selectable<Skills>[]> {
    return await db
      .selectFrom('skills')
      .selectAll()
      .where('category', '=', category)
      .orderBy('display_order')
      .execute();
  },

  // Add a new skill
  async addSkill(skill: Insertable<Skills>): Promise<Selectable<Skills>> {
    return await db
      .insertInto('skills')
      .values(skill)
      .returningAll()
      .executeTakeFirstOrThrow();
  },

  // Update a skill
  async updateSkill(
    id: number,
    skill: Updateable<Skills>
  ): Promise<Selectable<Skills>> {
    return await db
      .updateTable('skills')
      .set(skill)
      .where('id', '=', id)
      .returningAll()
      .executeTakeFirstOrThrow();
  },

  // Delete a skill
  async deleteSkill(id: number): Promise<Selectable<Skills>> {
    return await db
      .deleteFrom('skills')
      .where('id', '=', id)
      .returningAll()
      .executeTakeFirstOrThrow();
  },
}; 