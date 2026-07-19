const STORAGE_KEY = "saved-opportunities";

export function getSavedIds(): number[] {
  if (typeof window === "undefined") return [];

  const saved = localStorage.getItem(STORAGE_KEY);

  return saved ? JSON.parse(saved) : [];
}

export function saveOpportunity(id: number) {
  const saved = getSavedIds();

  if (!saved.includes(id)) {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify([...saved, id])
    );
  }
}

export function removeOpportunity(id: number) {
  const saved = getSavedIds().filter(item => item !== id);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
}

export function toggleSaved(id: number) {
  const saved = getSavedIds();

  if (saved.includes(id)) {
    removeOpportunity(id);
  } else {
    saveOpportunity(id);
  }
}