CREATE TABLE note_details (
  id UUID PRIMARY KEY DEFAULT uuidv7(),
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  note_id UUID NOT NULL REFERENCES notes(id) ON DELETE CASCADE,
  content_position INT NOT NULL,
  content_sub_position INT,
  content_type TEXT NOT NULL,
  markdown_content TEXT,
  html_content TEXT,
  file_url TEXT,
  to_be_hidden BOOLEAN,
  is_correct BOOLEAN
);

CREATE TRIGGER update_note_details_timestamp
BEFORE UPDATE ON note_details
FOR EACH ROW
EXECUTE FUNCTION update_timestamp();