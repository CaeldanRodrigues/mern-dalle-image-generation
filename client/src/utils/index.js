import FileSaver from 'file-saver';

import { surpriseMePrompts } from '../constants';

export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * prompt.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  if (randomPrompt === prompt) 
    return getRandomPrompt(prompt);

  return randomPrompt
}

export async function downloadImage(_id, photo) {
  FileSaver.saveAs(photo, `dalle2${_id}.jpg`);
}