// Use the pdf-lib library to iterate through the PDF files of a specific folder of this computer
// and update the metadata of the PDF files
// For each PDF file, make sure the title is the same as the file name
// Make sure all other metadata fields are set as empty
// The path of the folder is declared at the top of the file in a constant

import { join, parse } from 'node:path';
import { readFile, readdir, stat, writeFile } from 'node:fs/promises';
import { DateTime } from 'luxon';
import { PDFDocument } from 'pdf-lib';

const FOLDER_PATH = '/home/dalamkan/Dropbox/Projets/notyloops/annales/cpge-scientifiques/pending';

async function updatePdfMetadata(file_path, title) {
  const pdf_bytes = await readFile(file_path);
  const pdf_document = await PDFDocument.load(pdf_bytes, {
    updateMetadata: false,
  });

  pdf_document.setTitle(title);
  // pdf_document.setAuthor('');
  // pdf_document.setSubject('');
  // pdf_document.setKeywords([]);
  // pdf_document.setProducer('');
  // pdf_document.setCreator('');

  const updated_bytes = await pdf_document.save();
  await writeFile(file_path, updated_bytes);
}

async function updateFolderPdfMetadata() {
  const entries = await readdir(FOLDER_PATH, { withFileTypes: true });
  const pdf_entries = entries.filter(
    (entry) => entry.isFile() && parse(entry.name).ext.toLowerCase() === '.pdf'
  );
  const today = DateTime.now().startOf('day');

  for (const entry of pdf_entries) {
    const file_path = join(FOLDER_PATH, entry.name);
    const file_stat = await stat(file_path);
    const modified_date = DateTime.fromJSDate(file_stat.mtime).startOf('day');

    if (!modified_date.hasSame(today, 'day')) {
      continue;
    }

    const title = parse(entry.name).name.replaceAll('-', ' ');

    try {
      await updatePdfMetadata(file_path, title);
      console.log(`Updated metadata: ${entry.name}`);
    } catch (error) {
      console.error(`Failed to update ${entry.name}: ${error.message}`);
    }
  }
}

await updateFolderPdfMetadata();
