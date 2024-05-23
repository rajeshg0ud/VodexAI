// src/components/MainContent.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import './MainContent.css';

const MainContent = () => {
  const data = {
    labels: ['21 Jan', '22 Jan', '23 Jan', '24 Jan', '25 Jan', '26 Jan', '27 Jan'],
    datasets: [
      {
        label: 'Leads',
        data: [30, 40, 50, 60, 70, 80, 90],
        backgroundColor: 'rgba(31, 45, 59, 1)',
      },
      {
        label: 'Emails',
        data: [40, 50, 60, 70, 80, 90, 100],
        backgroundColor: 'rgba(31, 45, 59, 1)',
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="main-content">
      <div className="stats-cards">
        <div className="card">
          <h3>63 New Leads</h3>
          <p>+2.6% this month</p>
        </div>
        <div className="card">
          <h3>25 Email</h3>
          <p>+5.5% this month</p>
        </div>
        <div className="card">
          <h3>49 Proposals</h3>
          <p>-0.7% this month</p>
        </div>
        <div className="card">
          <h3>12 Appointment</h3>
          <p>+2.6% this month</p>
        </div>
      </div>

      <div className="chart-section">
        <Bar data={data} options={options} />
        <div className="email-sent">
          <h3>Email Sent</h3>
          <div className="circle-chart">
            <div className="circle">
              <span>73% Opened</span>
            </div>
          </div>
          <p>Performance: Average</p>
        </div>
      </div>

      <div className="leads-section">
        <h2>Leads</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Email</th>
              <th>Created Time</th>
              <th>Assignee</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Carolyn Perkins</td>
              <td>New</td>
              <td>eileen_jh@hotmail.com</td>
              <td>12/06/2021 12:53</td>
              <td>Carrie Harris</td>
            </tr>
            <tr>
              <td>Terrance Moreno</td>
              <td>Sold</td>
              <td>terrance_moreno@infotech.io</td>
              <td>23/09/2021 06:40</td>
              <td>Toni Lane</td>
            </tr>
            <tr>
              <td>Ron Vargas</td>
              <td>Sold</td>
              <td>terrance_moreno@infotech.io</td>
              <td>23/09/2021 06:40</td>
              <td>Joanne Mendoza</td>
            </tr>
            <tr>
              <td>Luke Cook</td>
              <td>Not Interested</td>
              <td>terrance_moreno@infotech.io</td>
              <td>26/09/2021 12:53</td>
              <td>Lorraine Carr</td>
            </tr>
            <tr>
              <td>Joyce Freeman</td>
              <td>In Progress</td>
              <td>joyce691@infotech.io</td>
              <td>24/09/2021 12:53</td>
              <td>Myrtle Mason</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MainContent;
