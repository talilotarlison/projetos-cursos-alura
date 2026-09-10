// Função para extrair o ID do vídeo do YouTube a partir de uma URL
function getYouTubeVideoId(url) {
  const regExp = /^.*(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^#&?]*).*/;
  const match = url.match(regExp);
  if (match && match[1].length === 11) {
    return match[1];
  }
  return null;
}

// Função para montar a URL de embed para iframe
function makeYouTubeEmbedUrl(videoId, options = {}) {
  // options pode ter como propriedades: width, height, params (obj com query params)
  const base = `https://www.youtube.com/embed/${videoId}`;
  
  const params = new URLSearchParams();
  
  // adiciona parâmetros extras (como autoplay, loop etc.) se vierem
  if (options.params) {
    for (const [key, value] of Object.entries(options.params)) {
      params.set(key, value);
    }
  }

  const paramString = params.toString();
  return paramString ? `${base}?${paramString}` : base;
}

// Exemplo de uso:
const url = "https://www.youtube.com/watch?v=kgz_oythXWI";
const id = getYouTubeVideoId(url);
console.log("ID:", id); // deve imprimir: kgz_oythXWI

const embedUrl = makeYouTubeEmbedUrl(id, { params: { autoplay: 1, rel: 0 }});
console.log("Embed URL:", embedUrl);
// Resultado: https://www.youtube.com/embed/kgz_oythXWI?autoplay=1&rel=0