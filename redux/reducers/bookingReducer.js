const initialState = {
    Doctor: {},
    AppointmentTime: "",
    ConsultationMethod: [],
    ConsultationMethod2: [],
    ConsultationMethod3: [],
    Schedule: "",
    TimeShift: [],
    FZone: {},
    Card: {},
  }
  
  const BookingReducer = (state = initialState, action) => {
    switch(action.type) {
      case 'SELECT_DOCTOR':
        return {
          ...state,
          Doctor: action.payload,
        }
      case 'FINANCIAL_ZONE':
        return {
          ...state,
          FZone: action.payload
        }
      case 'SELECT_APPOINTMENT_TIME':
        return {
          ...state,
          AppointmentTime: action.payload
        }
      case 'SELECT_CONSULTATION_METHOD':
        return {
          ...state,
          ConsultationMethod: action.payload
        }
      case 'SELECT_CONSULTATION_METHOD2':
        return {
          ...state,
          ConsultationMethod2: action.payload
        }
      case 'SELECT_CONSULTATION_METHOD3':
      
        return {
          ...state,
          ConsultationMethod3: action.payload
        }
      case 'SELECT_SCHEDULE':
        return {
          ...state,
          Schedule: action.payload
        }
      case 'SELECT_TIME_SHIFT':
        return {
          ...state,
          TimeShift: action.payload
        }
      case 'ON_UPDATE_CARD':
        return {
          ...state,
          Card: action.payload
        }
      default:
  
        return state
    }
  }
  
  export default BookingReducer