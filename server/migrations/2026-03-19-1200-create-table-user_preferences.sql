CREATE TABLE user_preferences (
  id UUID PRIMARY KEY DEFAULT uuidv7(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now() ,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  note_search_criteria_term TEXT DEFAULT '',
  note_search_criteria_tag_id_list TEXT[] DEFAULT '{}'::text[],
  note_sort_option TEXT DEFAULT 'created_at:desc',
  tag_search_criteria_term TEXT DEFAULT '',
  tag_sort_option TEXT DEFAULT 'created_at:desc',
  collection_search_criteria_term TEXT DEFAULT '',
  collection_search_criteria_tag_id_list TEXT[] DEFAULT '{}'::text[],
  collection_sort_option TEXT DEFAULT 'created_at:desc'
);

CREATE TRIGGER update_user_preferences_timestamp
BEFORE UPDATE ON user_preferences
FOR EACH ROW
EXECUTE FUNCTION update_timestamp();
