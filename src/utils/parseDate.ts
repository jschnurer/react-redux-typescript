export default function (dateStr: string): Date | null {
  try {
    let chunks = dateStr.split(' ');
    let dateChunks = chunks[0].split('-');
    let timeChunks = chunks[1].split(':');

    let time = new Date(Date.UTC(
      parseInt(dateChunks[0], 10),
      parseInt(dateChunks[1], 10),
      parseInt(dateChunks[2], 10),
      parseInt(timeChunks[0], 10),
      parseInt(timeChunks[1], 10),
      parseInt(timeChunks[2].replace('Z', ''), 10)));

    return time;
  }
  catch {
    return null;
  }
}