const shortRussianWords =
  /(^|[\s([{«„])(и|а|но|в|во|с|со|к|ко|у|о|об|от|до|из|за|на|по|без|для|под|над|при|про|не|ни|что|как)[ \t]+/giu;

export function bindShortRussianWords(text: string) {
  let result = text;

  for (let pass = 0; pass < 4; pass += 1) {
    const next = result.replace(shortRussianWords, "$1$2\u00a0");

    if (next === result) {
      break;
    }

    result = next;
  }

  return result;
}
