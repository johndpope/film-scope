const initialState = {
  loading: false,
  topRated: {
    films:[],
    currentPage: 1,
    totalPages: null
  },
  nowPlaying: {
    films:[],
    currentPage: 1,
    totalPages: null
  },
  film: {
    filmInfo: {},
    genres: [],
    credits: {
      cast: [],
      crew: [],
    }
  },
  search: {
    results: []
  },
  currentPage: 1,
  totalPages: null,
}

export default function filmsReducer(state = initialState, action) {
    switch(action.type) {

      case 'LOADING_TOP_RATED':
        return { ...state, loading: true }
      case 'FETCH_TOP_RATED':
        return { ...state, loading: false,
          topRated: { films: action.response.results },
          page: action.currentPage,
          totalPages: action.response.total_pages
        }

      case 'LOADING_FILM':
        return { ...state, loading: true}
      case 'DISPLAY_FILM':
        return { ...state, loading: false,
          film: {
            filmInfo: action.filmInfo,
            credits: action.filmInfo.credits,
            genres: action.filmInfo.genres
          }
        }

      case 'FETCH_NOW_PLAYING':
        return { ...state, loading: true }
      case 'DISPLAY_NOW_PLAYING':
        return { ...state, loading: false,
          nowPlaying: { films: action.response.results },
          page: action.currentPage,
          totalPages: action.response.total_pages
        }

      case 'LOADING_SEARCH':
        return { ...state, loading: true}
      case 'DISPLAY_RESULTS':
        return { ...state, loading: false, search: { results: action.response.results }}

      default: return state;
  }
}
