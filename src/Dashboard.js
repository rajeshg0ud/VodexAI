// src/components/Dashboard.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import './Dashboard.css';

// Registering the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const percentageOpened = 73;

  const data = {
    labels: ['21 Jan', '22 Jan', '23 Jan', '24 Jan', '25 Jan', '26 Jan', '27 Jan'],
    datasets: [
      {
        label: 'New Leads',
        data: [30, 40, 50, 60, 70, 80, 90],
        backgroundColor: '#5037f9', 
      },
      {
        label: 'Emails',
        data: [20, 30, 40, 50, 60, 70, 80],
        backgroundColor: '#4CAF50', // Blue for emails
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
    <div className="dashboard-container">
      <div className="stats-cards">
        <div className="card">
          <h3>63 <a>New Leads</a></h3>
          <p > <a className='positive'>+2.6%</a> this month</p>
        </div>
        <div className="card">
          <h3>25 <a>Email</a></h3>
          <p > <a className='positive'>+5.5%</a> this month</p>
        </div>
        <div className="card">
          <h3>49 <a>Proposals</a></h3>
          <p ><a className='negative'>-0.7%</a> this month</p>
        </div>
        <div className="card">
          <h3>12 <a>Appointment</a></h3> 
          <p > <a className='positive'>+2.6%</a> this month</p>
        </div>
      </div>

      <div className="chart-section">
        <div className="chart-container">
          <Bar data={data} options={options} />
        </div>
        <div className="email-sent">
          <h3>Email Sent</h3>
          <div className="circle-chart">
            {/* Custom circle chart */}
            <svg width="120" height="120">
              <circle
                cx="60"
                cy="60"
                r="50"
                fill="transparent"
                stroke="#415364"
                strokeWidth="7"
              />
              <circle
                cx="60"
                cy="60"
                r="50"
                fill="transparent"
                stroke="#5037f9"
                strokeWidth="7"
                strokeDasharray="314"
                strokeDashoffset={(100 - percentageOpened) * 3.14}
                strokeLinecap="round"
                transform="rotate(-90, 60, 60)"
              />
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dy=".3em"
                fontSize="20"
                fill="white"
              >
                {percentageOpened}%
              </text>
            </svg>
          </div>
          <div className='Email-caption'>
          <a className='perf'>Performance</a> <a>Average</a>
          </div>
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
              <td className="status new"><a>New</a></td>
              <td>eileen_jh@hotmail.com</td>
              <td>12/06/2021 12:53</td>
              <td>Carrie Harris</td>
            </tr>
            <tr>
              <td>Terrance Moreno</td>
              <td className="status sold"><a>Sold</a></td>
              <td>terrance_moreno@infotech.io</td>
              <td>23/09/2021 06:40</td>
              <td>Toni Lane</td>
            </tr>
            <tr>
              <td>Ron Vargas</td>
              <td className="status sold"><a>Sold</a></td>
              <td>terrance_moreno@infotech.io</td>
              <td>23/09/2021 06:40</td>
              <td>Joanne Mendoza</td>
            </tr>
            <tr>
              <td>Luke Cook</td>
              <td className="status not-interested"><a>Not Interested</a></td>
              <td>terrance_moreno@infotech.io</td>
              <td>26/09/2021 12:53</td>
              <td>Lorraine Carr</td>
            </tr>
            <tr>
              <td>Joyce Freeman</td>
              <td className="status in-progress"><a>In Progress</a></td>
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

export default Dashboard;
