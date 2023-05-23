export const filterReducer = (filterState, action) => {
    switch(action.type){
      case "price-filter" : return {...filterState, radioFilter: true, priceFilterValue: action.filterVal, clearFilter: false }

      case "star-filter" : return {...filterState, starFilter: true, starFilterValue: action.filterType, clearFilter: false }

      case "search" : return {...filterState, searchFilterValue: action.searchVal, clearFilter: false }

      case "filterTrue" : return {...filterState, showFilter: true, clearFilter: false }
      
      case "filterFalse" : return {...filterState, showFilter: false, clearFilter: false }

      case "range-filter": return {...filterState, rangeValue: action.rangeFilterVal, clearFilter: false }

      case "clear-filter": return {...filterState, 
        radioFilter : false,
        priceFilterValue: "",
        starFilter : false,
        starFilterValue: "",
        searchFilterValue: "",
        rangeValue: "2000",
        clearFilter: true
    }

      default: return {...filterState}
    }
}
