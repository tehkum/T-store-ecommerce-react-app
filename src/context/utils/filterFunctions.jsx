export const filterReducer = (filterState, action) => {
    switch(action.type){
      case "price-filter" : return {...filterState, radioFilter: true, priceFilterValue: action.filterVal, clearFilter: true }

      case "star-filter" : return {...filterState, starFilter: true, starFilterValue: action.filterType, clearFilter: true }

      case "search" : return {...filterState, searchFilterValue: action.searchVal, clearFilter: true }

      case "filterTrue" : return {...filterState, showFilter: true, clearFilter: true }
      
      case "filterFalse" : return {...filterState, showFilter: false, clearFilter: true }

      case "range-filter": return {...filterState, rangeValue: action.rangeFilterVal, clearFilter: true }

      case "clear-filter": return {...filterState, 
        radioFilter : false,
        priceFilterValue: "",
        starFilter : false,
        starFilterValue: "",
        searchFilterValue: "",
        rangeValue: "5000",
        clearFilter: false
    }

    case "FILTER_BY_CATEGORY": return {...filterState, categoryFilter: true,
      category: [...filterState.category, action.payload],}

      default: return {...filterState}
    }
}
