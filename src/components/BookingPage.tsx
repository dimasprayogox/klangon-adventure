import React, { useState } from 'react';
import { Calendar, Clock, Users, ChevronLeft, ChevronRight, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const BookingPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());

  const pricePerPerson = 150;

  // Generate calendar dates
  const generateCalendarDates = (month: Date): Date[] => {
    const year = month.getFullYear();
    const monthIndex = month.getMonth();
    const firstDay = new Date(year, monthIndex, 1);
    const lastDay = new Date(year, monthIndex + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());

    const dates: Date[] = [];
    for (let i = 0; i < 42; i++) {
      dates.push(new Date(startDate.getTime() + i * 24 * 60 * 60 * 1000));
    }
    return dates;
  };

  const timeSlots = [
    { time: '09:00 AM', slotsLeft: 5 },
    { time: '11:00 AM', slotsLeft: 3 },
    { time: '02:00 PM', slotsLeft: 7 },
    { time: '04:00 PM', slotsLeft: 2 },
  ];

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const calendarDates = generateCalendarDates(currentMonth);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const isDateAvailable = (date: Date): boolean => {
    return date >= today;
  };

  const isDateInCurrentMonth = (date: Date): boolean => {
    return date.getMonth() === currentMonth.getMonth();
  };

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed relative" 
         style={{
           backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/paragliding-landscape.jpeg')`
         }}>
      
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-gray-800" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                <span style={{ color: '#3498db' }}>Klangon</span>
                <span style={{ color: '#2c3e50' }}> Adventure</span>
              </Link>
            </div>
            <nav className="flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">Home</Link>
              <Link to="/paragliding" className="text-blue-600 font-medium">Paragliding</Link>
              <Link to="/rent-gear" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">Rent Gear</Link>
              <div className="flex items-center">
                <User className="h-8 w-8 text-gray-600" />
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Booking Area */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Step 1: Date Selection */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-4" 
                     style={{ backgroundColor: '#3498db' }}>1</div>
                <h2 className="text-2xl font-bold text-gray-800" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Select Your Flight Date
                </h2>
              </div>

              {/* Calendar */}
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <button 
                    onClick={prevMonth}
                    className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                  </h3>
                  <button 
                    onClick={nextMonth}
                    className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>

                <div className="grid grid-cols-7 gap-2 mb-4">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day} className="text-center text-sm font-medium text-gray-600 py-2">
                      {day}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-2">
                  {calendarDates.map((date, index) => {
                    const isAvailable = isDateAvailable(date);
                    const isCurrentMonth = isDateInCurrentMonth(date);
                    const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();
                    
                    return (
                      <button
                        key={index}
                        onClick={() => isAvailable && isCurrentMonth ? setSelectedDate(date) : null}
                        disabled={!isAvailable || !isCurrentMonth}
                        className={`
                          p-3 text-sm rounded-lg transition-all duration-200 font-medium
                          ${!isCurrentMonth ? 'text-gray-300 cursor-not-allowed' : 
                            !isAvailable ? 'text-gray-400 cursor-not-allowed bg-gray-100' :
                            isSelected ? 'text-white shadow-lg transform scale-105' :
                            'text-gray-700 hover:bg-blue-50 hover:text-blue-600'}
                        `}
                        style={isSelected ? { backgroundColor: '#3498db' } : {}}
                      >
                        {date.getDate()}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Step 2: Time Selection */}
            {selectedDate && (
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-4" 
                       style={{ backgroundColor: '#2c3e50' }}>2</div>
                  <h2 className="text-2xl font-bold text-gray-800" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Choose Your Time Slot
                  </h2>
                </div>
                
                <p className="text-gray-600 mb-6" style={{ fontFamily: 'Lato, sans-serif' }}>
                  Selected date: {formatDate(selectedDate)}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {timeSlots.map((slot, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedTimeSlot(slot.time)}
                      className={`
                        p-6 rounded-xl border-2 transition-all duration-200 text-left
                        ${selectedTimeSlot === slot.time 
                          ? 'border-green-600 shadow-lg transform scale-105' 
                          : 'border-gray-200 hover:border-blue-300 hover:shadow-md'}
                      `}
                      style={selectedTimeSlot === slot.time ? { 
                        backgroundColor: '#2c3e50', 
                        color: 'white' 
                      } : {}}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Clock className="h-5 w-5 mr-3" />
                          <span className="text-lg font-semibold">{slot.time}</span>
                        </div>
                        <span className={`
                          text-sm px-3 py-1 rounded-full
                          ${selectedTimeSlot === slot.time 
                            ? 'bg-white/20 text-white' 
                            : 'bg-green-100 text-green-800'}
                        `}>
                          {slot.slotsLeft} slots left
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Booking Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Booking Summary
              </h3>

              {selectedDate ? (
                <div className="space-y-4">
                  <div className="flex items-center text-gray-700">
                    <Calendar className="h-5 w-5 mr-3" style={{ color: '#3498db' }} />
                    <span style={{ fontFamily: 'Lato, sans-serif' }}>
                      {selectedDate.toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </span>
                  </div>

                  {selectedTimeSlot && (
                    <div className="flex items-center text-gray-700">
                      <Clock className="h-5 w-5 mr-3" style={{ color: '#2c3e50' }} />
                      <span style={{ fontFamily: 'Lato, sans-serif' }}>{selectedTimeSlot}</span>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-700">
                      <Users className="h-5 w-5 mr-3" style={{ color: '#3498db' }} />
                      <span style={{ fontFamily: 'Lato, sans-serif' }}>Quantity</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <button 
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-blue-500 transition-colors"
                      >
                        -
                      </button>
                      <span className="font-semibold text-lg">{quantity}</span>
                      <button 
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-blue-500 transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between text-gray-600">
                      <span>Price per person:</span>
                      <span>${pricePerPerson}</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold text-gray-800">
                      <span>Total:</span>
                      <span>${pricePerPerson * quantity}</span>
                    </div>
                  </div>

                  <button 
                    disabled={!selectedTimeSlot}
                    className={`
                      w-full py-4 px-6 rounded-xl font-bold text-white text-lg transition-all duration-200
                      ${selectedTimeSlot 
                        ? 'shadow-lg hover:shadow-xl transform hover:scale-105' 
                        : 'opacity-50 cursor-not-allowed'}
                    `}
                    style={{ 
                      backgroundColor: selectedTimeSlot ? '#e67e22' : '#cccccc',
                      fontFamily: 'Montserrat, sans-serif'
                    }}
                  >
                    Continue to Payment
                  </button>
                </div>
              ) : (
                <div className="text-center text-gray-500 py-8">
                  <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p style={{ fontFamily: 'Lato, sans-serif' }}>
                    Select a date to start your booking
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;