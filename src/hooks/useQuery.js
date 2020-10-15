
// Busca query params na URL
export default function useQuery(location, param) {
  return new URLSearchParams(location).get(param);
}