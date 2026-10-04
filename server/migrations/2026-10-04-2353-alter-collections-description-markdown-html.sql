ALTER TABLE collections RENAME COLUMN description TO description_html;

ALTER TABLE collections ADD COLUMN description_markdown TEXT;
