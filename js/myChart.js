              var myChart = document.getElementById('O2levelOne').getContext('2d');
              
              //Global Options

              Chart.defaults.global.defaultFontSize = 18;
              Chart.defaults.global.defaultFontColor = 'white';
  
              var foodChart = new Chart(myChart, {
                  type: 'horizontalBar', //bar, blabla
                  data: {
                      labels: ['O2 Levels'],
                      datasets: [{
                          label: 'O2 Levels',
                          data: [[10,60], [90,100]],
                          backgroundColor: ['#26D88F'],
                          borderWidth:0,
                          borderColor:'#ffffff',
                          hoverBorderWidth:2,
                          hoverBorderColor:'white',
                          categoryPercentage: 2,
                          barPercentage: 2
                      }]
                  },
                  options: {
                      title:{
                          display:false,
                          text:'O2 Levels',
                          fontSize:20
                      },
                      legend:{
                          position:'right',
                          display:false,
                          borderWidth:1,
                      }
                  },
              });

              var myChart = document.getElementById('O2levelTwo').getContext('2d');
              
              //Global Options

              Chart.defaults.global.defaultFontSize = 18;
              Chart.defaults.global.defaultFontColor = 'white';
  
              var foodChart = new Chart(myChart, {
                  type: 'horizontalBar', //bar, blabla
                  data: {
                      labels: ['O2 Levels'],
                      datasets: [{
                          label: 'O2 Levels',
                          data: [[10,95], [90,100]],
                          backgroundColor: ['#26D88F'],
                          borderWidth:0,
                          borderColor:'#ffffff',
                          hoverBorderWidth:2,
                          hoverBorderColor:'white',
                          categoryPercentage: 2,
                          barPercentage: 2
                      }]
                  },
                  options: {
                      title:{
                          display:false,
                          text:'O2 Levels',
                          fontSize:20
                      },
                      legend:{
                          position:'right',
                          display:false,
                          borderWidth:1,
                      }
                  },
              });
              var myChart = document.getElementById('O2levelThree').getContext('2d');
              
              //Global Options

              Chart.defaults.global.defaultFontSize = 18;
              Chart.defaults.global.defaultFontColor = 'white';
  
              var foodChart = new Chart(myChart, {
                  type: 'horizontalBar', //bar, blabla
                  data: {
                      labels: ['O2 Levels'],
                      datasets: [{
                          label: 'O2 Levels',
                          data: [[10,95], [90,100]],
                          backgroundColor: ['#26D88F'],
                          borderWidth:0,
                          borderColor:'#ffffff',
                          hoverBorderWidth:2,
                          hoverBorderColor:'white',
                          categoryPercentage: 2,
                          barPercentage: 2
                      }]
                  },
                  options: {
                      title:{
                          display:false,
                          text:'O2 Levels',
                          fontSize:20
                      },
                      legend:{
                          position:'right',
                          display:false,
                          borderWidth:1,
                      }
                  },
              });
                            var myChart = document.getElementById('O2levelFour').getContext('2d');
              
              //Global Options

              Chart.defaults.global.defaultFontSize = 18;
              Chart.defaults.global.defaultFontColor = 'white';
  
              var foodChart = new Chart(myChart, {
                  type: 'horizontalBar', //bar, blabla
                  data: {
                      labels: ['O2 Levels'],
                      datasets: [{
                          label: 'O2 Levels',
                          data: [[10,70], [90,100]],
                          backgroundColor: ['#26D88F'],
                          borderWidth:0,
                          borderColor:'#ffffff',
                          hoverBorderWidth:2,
                          hoverBorderColor:'white',
                          categoryPercentage: 2,
                          barPercentage: 2
                      }]
                  },
                  options: {
                      title:{
                          display:false,
                          text:'O2 Levels',
                          fontSize:20
                      },
                      legend:{
                          position:'right',
                          display:false,
                          borderWidth:1,
                      }
                  },
              });

            var myChart = document.getElementById('foodData').getContext('2d');
            
            //Global Options
            Chart.defaults.global.defaultFontSize = 18;
            Chart.defaults.global.defaultFontColor = 'white';

            var foodChart = new Chart(myChart, {
                type: 'bar', 
                data: {
                    labels: ['Prefab Burger', 'Soda', 'Twinkies', 'Mars Bar', 'Water'],
                    datasets: [{
                        label: 'Food Storage',
                        data: [ 100, 64, 85, 80, 96],
                        //backgroundColor: '#0E1428',
                        backgroundColor: ['#26d88f', '#d62727', '#26d88f', '#26d88f','#26d88f'],
                        borderWidth:0,
                        borderColor:'#eee',
                        hoverBorderWidth:2,
                        hoverBorderColor:'white',
                        barThickness: 'flex',
                        minBarLength: 4,
                    }]
                },
                options: {
                    title:{
                        display:true,
                        text:'Food Storage',
                        fontSize:20
                    },
                    legend:{
                        position:'right',
                        display:false,
                        borderWidth:1,
                    }
                },
            });

            var myChart = document.getElementById('fuel').getContext('2d');
            
            //Global Options
            Chart.defaults.global.defaultFontSize = 18;
            Chart.defaults.global.defaultFontColor = 'white';

            var foodChart = new Chart(myChart, {
                type: 'line', 
                data: {
                    labels: ['100', '80', '50', '30', '0'],
                    datasets: [{
                        label: 'Fuel',
                        data: [100, 90, 70, 60, 40],                      
                        borderWidth:0,
                        borderColor:'#fff',
                        hoverBorderWidth:2,
                        hoverBorderColor:'white'
                    }]
                },
                options: {
                    title:{
                        display:true,
                        text:'Amount of fuel',
                        fontSize:20
                    },

                },
            });

            var myChart = document.getElementById('engineHealth').getContext('2d');
            

            Chart.defaults.global.defaultFontSize = 18;
            Chart.defaults.global.defaultFontColor = 'white';

            var foodChart = new Chart(myChart, {
                type: 'doughnut', 
                data: {
                    labels: ['Truster Main', 'Trusters Second', 'Landing trusters'],
                    datasets: [{
                        label: 'Engines',
                        data: [90, 30, 90],
                        backgroundColor: ['#B13DD9','#D99B11','#26D88F'],
                        borderWidth:0,
                        borderColor:'#999',
                        hoverBorderWidth:2,
                        hoverBorderColor:'white'
                    }]
                },
                options: {
                    title:{
                        display:true,
                        text:'Health of the engines',
                        fontSize:20
                    },
                    legend:{
                        position:'right',
                        display:true,
                        borderWidth:1,
                    }
                },
            });





