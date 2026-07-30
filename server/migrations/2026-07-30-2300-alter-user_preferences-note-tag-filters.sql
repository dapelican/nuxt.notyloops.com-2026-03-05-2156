ALTER TABLE user_preferences
  DROP COLUMN IF EXISTS note_search_criteria_tag_id_list,
  ADD COLUMN IF NOT EXISTS note_search_criteria_tag_id_list_to_include TEXT[] DEFAULT '{}'::text[],
  ADD COLUMN IF NOT EXISTS note_search_criteria_tag_id_list_to_exclude TEXT[] DEFAULT '{}'::text[],
  ADD COLUMN IF NOT EXISTS note_inclusion_type TEXT NOT NULL DEFAULT 'AND' CHECK (note_inclusion_type IN ('AND', 'OR')),
  ADD COLUMN IF NOT EXISTS note_exclusion_type TEXT NOT NULL DEFAULT 'OR' CHECK (note_exclusion_type IN ('AND', 'OR'));
