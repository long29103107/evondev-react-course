import { create } from 'zustand'

export const useNewsStore = create((set) => ({
  hits: [],
  isLoading: false,
  errorMessage: '',
  fetchNews: async () => {
    set({ isLoading: true })
    try {
      const response = await fetch('https://hn.algolia.com/api/v1/search_by_date?query=react')
      const data = await response.json()

      set({ hits: data.hits, isLoading: false })
    } catch (error) {
      set({ errorMessage: error.message, isLoading: false })
    }
  }
}))