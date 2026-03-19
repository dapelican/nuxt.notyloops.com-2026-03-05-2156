CREATE TABLE logs (
  id UUID PRIMARY KEY DEFAULT uuidv7(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now() ,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  content JSON
);

CREATE TRIGGER update_logs_timestamp
BEFORE UPDATE ON logs
FOR EACH ROW
EXECUTE FUNCTION update_timestamp();
