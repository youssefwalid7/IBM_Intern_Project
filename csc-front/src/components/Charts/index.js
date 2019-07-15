import React from 'react';
import {NavLink} from 'react-router-dom';
import './style.css';
import Chart from 'chart.js';

export default class Charts extends React.Component {

    componentDidMount(){ 
        
        var ctx = document.getElementById('myChart');
        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Positive', 'Negative'],
                datasets: [{
                    label: '100',
                    data: [70, 30],
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(30, 139, 228)'
                                      ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        
                    ],
                    borderWidth: 2
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });

        
        
        ctx = document.getElementById('myChart1');
        var myChart1 = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 2
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });

        ctx = document.getElementById('myChart2');
        var myChart2 = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [
                    {
                    label: 'positive',
                    data: [12,],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)'
                                            ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 2
                },
                {
                    label: 'Negative',
                    data: [20],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 2
                }]
            },
            options: { 
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });

    }

    render(){
        
        return ( 
            <section id="canvas" class="bg-light text-center mb-5">
        <h1 class=" pt-5 py-2 "> CHARTS</h1>
  
            < div class="container my-5">
          
          <div class="row">
                
          <div class="col-md-12 text-center">
<ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
<li class="nav-item col-sm-3 text-center">
    <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">ALL</a>
  </li>
  <li class="nav-item col-sm-3 text-center">
    <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">TOTAL NUM OF TWEETS</a>
  </li>
  <li class="nav-item col-sm-3 text-center">
    <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">SENTMENT OVER TIME</a>
  </li>
  <li class="nav-item col-sm-3 text-center">
    <a class="nav-link " id="pills-MENTORS-tab" data-toggle="pill" href="#pills-MENTORS" role="tab" aria-controls="pills-MENTORS" aria-selected="false">EMOTIONAL TONE OVER TIME</a>
  </li>
</ul>
</div>
</div>
</div>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
  
 < div class="container">
          
            <div class="row">
                  
            <div class="col-md-4 mb-2">
            <canvas id="myChart" width="400" height="400"></canvas>      
                </div>
                <div class="col-md-4 mb-2">
                <canvas id="myChart1" width="400" height="400"></canvas>      
                </div>
                <div class="col-md-4 mb-2">
                <canvas id="myChart2" width="400" height="400"></canvas>      
                </div>
                </div>
          
          </div>
  
  </div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
  
  <div class="container">
          
            <div class="row">

                 <div class="col-md-6 text-center">
                 <canvas id="myChart" width="600" height="600"></canvas> 
                    </div>
              </div>
          
</div>
  </div>
  
  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
  
  <div class="container">
          
            <div class="row">
              
            
            <div class="col-md-12 text-center">
                 <canvas id="myChart1" width="600" height="600"></canvas> 
                    </div>
              </div>
          
          </div>
  </div>
  <div class="tab-pane fade" id="pills-MENTORS" role="tabpanel" aria-labelledby="pills-MENTORS-tab">
  
  <div class="container">
          
            <div class="row">
              
            
            <div class="col-md-12 text-center">
                 <canvas id="myChart2" width="600" height="600"></canvas> 
                    </div>
              </div>
          
          </div>
  </div>
</div>
</section>
        )

    }
}