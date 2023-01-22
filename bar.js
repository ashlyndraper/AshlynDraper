// BAR CHART WITH NEGATIVE VALUES

Highcharts.chart('barcontainer', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Column chart with negative values'
    },
    xAxis: {
        categories: ['Mangos', 'Pineapples', 'Peachs', 'Kiwis', 'Plums']
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Ashlyn',
        data: [1, 5, -1, 6, 3]
    }, {
        name: 'Jane',
        data: [2, -2, -3, 2, 1]
    }, {
        name: 'Joe',
        data: [3, 4, 4, -2, 5]
    }]
});