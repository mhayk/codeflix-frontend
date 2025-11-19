import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface Category {
  id: string;
  name: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  description: null | string;
}

const category: Category = {
  id: '0ced3232-3f4e-4f2b-8e2d-1c3f4e5b6a7b',
  name: 'Movies',
  description: 'All kinds of movies',
  is_active: true,
  deleted_at: null,
  created_at: '2024-01-01T00:00:00Z',
  updated_at: '2024-01-01T00:00:00Z',
}

const categories = [
  category,
  {
    id: '1ced3232-3f4e-4f2b-8e2d-1c3f4e5b6a7b',
    name: 'Documentaries',
    description: 'Informative documentaries',
    is_active: true,
    deleted_at: null,
    created_at: '2024-01-02T00:00:00Z',
    updated_at: '2024-01-02T00:00:00Z',
  },
  {
    id: '2ced3232-3f4e-4f2b-8e2d-1c3f4e5b6a7b',
    name: 'TV Shows',
    description: 'Popular TV shows',
    is_active: false,
    deleted_at: '2024-02-01T00:00:00Z',
    created_at: '2024-01-03T00:00:00Z',
    updated_at: '2024-02-01T00:00:00Z',
  }
]

export const initialState = [
    // category,
    ...categories
  ]

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: initialState,
  reducers: {
    createCategory(state, action) { },
    updateCategory(state, action) { },
    deleteCategory(state, action) { }
  },
})

// selectors
export const selectCategories = (state: RootState) => state.categories;

export default categoriesSlice.reducer;