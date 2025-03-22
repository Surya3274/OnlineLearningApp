import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchcourses = createAsyncThunk('courses/fetchcourses', async () => {
    const response = await axios.get('http://localhost:3001/courses');
    return response.data;
});

export const fetchCourseById = createAsyncThunk('courses/fetchCourseById', async (courseId) => {
    const response = await axios.get(`http://localhost:3001/courses/${courseId}`);
    return response.data;
});

const courseSlice = createSlice({
    name: 'courses',
    initialState: {
        items: [],
        selectedCourse: null,
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchcourses.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchcourses.fulfilled, (state, action) => {
            state.loading = false;
            state.items = action.payload;
        });
        builder.addCase(fetchcourses.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
        builder.addCase(fetchCourseById.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchCourseById.fulfilled, (state, action) => {
            state.loading = false;
            state.selectedCourse = action.payload;
        });
        builder.addCase(fetchCourseById.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
});

export default courseSlice.reducer;