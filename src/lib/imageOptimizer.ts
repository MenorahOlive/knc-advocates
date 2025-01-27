export default function imageOptimizer(image, width, height) {
  return image + `?w=${width}&h=${height}&fm=webp&q=75&fit=scale`;
}
