import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const MyChart = () => {
  const [filter, setFilter] = useState('day');

  const data = [
    { date: '2023-06-01', value: 200 },
    { date: '2023-06-02', value: 15 },
    { date: '2023-06-03', value: 12 },
    // Các dữ liệu khác...
  ];

  const filteredData = data.filter(item => {
    const currentDate = new Date(item.date);
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    const today = new Date();
    const currentDay = today.getDate();
    const currentWeek = Math.ceil((currentDay + currentDate.getDay()) / 7);

    if (filter === 'day') {
      return currentDate.getDate() === currentDay && currentDate.getMonth() === today.getMonth();
    } else if (filter === 'week') {
      return currentWeek === Math.ceil((currentDay + today.getDay()) / 7);
    } else if (filter === 'month') {
      return currentMonth === today.getMonth() && currentYear === today.getFullYear();
    }
    return true;
  });

  return (
    <div>
      <select value={filter} onChange={e => setFilter(e.target.value)}>
        <option value="day">Ngày</option>
        <option value="week">Tuần</option>
        <option value="month">Tháng</option>
      </select>
      <LineChart width={800} height={400} data={filteredData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#00C49F" />
      </LineChart>
    </div>
  );
};

export default MyChart;
