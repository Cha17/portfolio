export type SkillStatus = 'Learning' | 'Familiar' | 'Growing' | 'Practicing';

export function getStatusFromLevel(level: number): SkillStatus {
  if (level < 25) return 'Learning';
  if (level < 50) return 'Familiar';
  if (level < 75) return 'Growing';
  return 'Practicing';
} 