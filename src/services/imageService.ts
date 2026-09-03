export async function searchDestinationImage(query: string): Promise<string | null> {
  const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
  if (!accessKey) return null;

  try {
    const res = await fetch(
      'https://api.unsplash.com/search/photos?query=' + encodeURIComponent(query + ' travel landmark') + '&orientation=landscape&per_page=1',
      { headers: { Authorization: 'Client-ID ' + accessKey } }
    );
    if (res.ok) {
      const data = await res.json();
      if (data.results && data.results.length > 0) {
        return data.results[0].urls.regular;
      }
    }
  } catch (e) {
    console.warn('Unsplash fetch error:', e);
  }
  return null;
}
