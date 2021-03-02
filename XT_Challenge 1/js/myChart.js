            var myChart = document.getElementById('myChart').getContext('2d');
            
            //Global Options
            Chart.defaults.global.defaultFontFamily = 'Lato';
            Chart.defaults.global.defaultFontSize = 18;
            Chart.defaults.global.defaultFontColor = 'white';

            var foodChart = new Chart(myChart, {
                type: 'line', //bar, blabla
                data: {
                    labels: ['T-80m', 'T-60m', 'T-40m', 'T-20m', 'Now'],
                    datasets: [{
                        label: 'm/s',
                        data: [1.9, 2.1, 3, 3.6, 3.7],
                        //backgroundColor: '#0E1428',
                      
                        borderWidth:0,
                        borderColor:'#fff',
                        hoverBorderWidth:2,
                        hoverBorderColor:'white'
                    }]
                },
                options: {
                    title:{
                        display:true,
                        text:'Acceleration',
                        fontSize:20
                    },
                    legend:{
                        position:'right',
                        display:true,
                        borderWidth:1,
                    }
                },
            });