Highcharts.setOptions({
 colors: ['#ff00e1', '#8502b5', '#0205b5', '#00d40b', '#f5f100', '#ffb012', '#f50000']
});
Highcharts.chart('container', {
    chart: {
        type: 'packedbubble',
    },
    title: {
        text: 'Percentage of Total Population per Country Reported to be Infected by Covid-19 as of July 10, 2020, Categorized by GDP.'
    },
    tooltip: {
        useHTML: true,
        pointFormat: '<b>{point.name}:</b> % {point.value:.5f} of population infected</sub>'
    },
    plotOptions: {
        packedbubble: {
            minSize: '20%',
            maxSize: '250%',
            zMin: 0,
            zMax: .1,
            layoutAlgorithm: {
                splitSeries: false,
                gravitationalConstant: 0.02
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}',
                filter: {
                    property: 'y',
                    operator: '>',
                    value: .004
                },
                style: {
                    color: 'black',
                    textOutline: 'none',
                    fontWeight: 'normal'
                }
            }
        }
    },
    series: [{
        name: '$19.5 trillion',
        data: [{
            name: 'USA',
            value: (31/3310) // all values are reduced fractions of referenced values
        }]
    }, {
        name: '$12 trillion',
        data: [{
            name: 'China',
            value: (17/287800)
        }]
    }, {
        name: '$2-5 trillion',
        data: [{
            name: 'Germany',
            value: (199/83000)
        }, {
            name: 'India',
            value: (767/1380000)
        },
        {
            name: 'UK',
            value: (287/67000)
        },
        {
            name: 'France',
            value: (13/5000)
        }, {
            name: 'Brazil',
            value: (43/5300)
        }, {
            name: 'Japan',
            value: (1/6300)
        }]
    }, {
        name: '$1-2 trillion',
        data: [
        {
            name: 'Russia',
            value: (707/145000)
        }, {
            name: 'Mexico',
            value: (11/5120)
        }, {
            name: 'Spain',
            value: (11/2000)
        }, {
            name: 'Italy',
            value: (121/30000)
        }, {
            name: 'Canada',
            value: (53/18500)
        }, {
            name: 'Indonesia',
            value: (1/3900)
        }, {
            name: 'S. Korea',
            value: (13/51000)
        }, {
            name: 'Australia',
            value: (9/25000)
        }]
    }, {
        name: '$300 billion - 1 trillion',
        data: [{
            name: 'Iran',
            value: (1/332)
        }, {
            name: 'S. Africa',
            value: (9/2360)
        }, {
            name: 'Saudi Arabia',
            value: (11/1700)
        }, {
            name: 'Turkey',
            value: (209/84000)
        }, {
            name: 'Argentina',
            value: (29/15000)
        }, {
            name: 'Sweden',
            value: (37/5000)
        }, {
            name: 'Belgium',
            value: (31/6000)
        }, {
            name: 'UAE',
            value: (53/10000)
        }, {
            name: 'Netherlands',
            value: (1/340)
        }, {
            name: 'Singapore',
            value: (3/400)
        }, {
            name: 'Poland',
            value: (37/38000)
        }, {
            name: 'Israel',
            value: (11/3000)
        }, {
            name: 'Switzerland',
            value: (11/3000)
        }, {
            name: 'Ireland',
            value: (1/200)
        }, {
            name: 'Thailand',
            value: (3/70000)
        }]
    }, {
        name: '$100-300 billion',
        data: [{
            name: 'Peru',
            value: (313/33000)
        }, {
            name: 'Chile',
            value: (303/19000)
        }, {
            name: 'Qatar',
            value: (17/500)
        }, {
            name: 'Egypt',
            value: (13/17000)
        }, {
            name: 'Iraq',
            value: (67/40000)
        }, {
            name: 'Ecuador',
            value: (7/2000)
        }, {
            name: 'Kuwait',
            value: (13/1000)
        }, {
            name: 'Ukraine',
            value: (51/43000)
        }, {
            name: 'Portugal',
            value: (9/2000)
        }, {
            name: 'Romania',
            value: (31/19000)
        }, {
            name: 'Greece',
            value: (1/2500)
        }]
    }, {
        name: 'less than 100 billion',
        data: [{
            name: 'Belarus',
            value: (8/1125)
        }, {
            name: 'Oman',
            value: (1/100)
        }, {
            name: 'Panama',
            value: (41/4000)
        }, {
            name: 'Dominican Republic',
            value: (1/275)
        }, {
            name: 'Afghanistan',
            value: (17/19500)
        }, {
            name: 'Bahrain',
            value: (31/2000)
        }, {
            name: 'Armenia',
            value: (1/100)
        }, {
            name: 'Honduras',
            value: (13/5000)
        }, {
            name: 'Guatemala',
            value: (1/720)
        }, {
            name: 'Ghana',
            value: (23/31000)
        }, {
            name: 'Libya',
            value: (1/7000)
        }]
    }]
});



























//credit :u/Un-called_For
