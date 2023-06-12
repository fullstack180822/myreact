const init_state ={
    my_cars: [
      {brand:"Honda", model:"Civic", color:"pink", year: 2023, id: 1 , update: false},
      {brand:"Ferrari", model:"Testa Rossa", color:"red", year: 2022, id: 2, update: false },
      {brand:"Chevrolet", model:"cavalier", color:"green" ,year: 2021, id: 3, update: true }
    ],
    my_car_seq : 3,
    filter_by_year: 0
  }

  const garageReducer = (state=init_state , action) => {
    console.log('------------------- my reducer')
    console.log('state:  ' + JSON.stringify(state))
    console.log('action: ' + JSON.stringify(action))
    if (action.type === 'add_car') {
      let new_seq = state.my_car_seq;
      return {
        ...state,
        my_cars: [{ ...action.new_car, id: new_seq + 1}, ...state.my_cars],
        my_car_seq: new_seq + 1
      }
    }
    else if (action.type === 'remove_car') {
        // id_
        const new_cars = state.my_cars.filter(car => car.id !== action.id_)
        return {
            ...state,
            my_cars: new_cars
        }
      }
    else if (action.type === 'update_filter') {
        let new_seq = state.my_car_seq;
        return {
          ...state,
          filter_by_year: action._year
        }
      }
    return state;
  }

  export default garageReducer;