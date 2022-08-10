const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';
const IMAGE_SIZE = 'w342';

export default function createImageUrl() {
  return `${IMAGE_BASE_URL}${IMAGE_SIZE}`;
}
