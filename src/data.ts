import { data as countries } from 'emoji-flags';

// pie charts
export var single = [
    {
      "name": "Germany",
      "value": 8940000
    },
    {
      "name": "USA",
      "value": 5000000
    },
    {
      "name": "France",
      "value": 7200000
    }
  ];

  // bar-stacked
export var multi = [
  {
    "name": "Germany",
    "series": [
      {
        "name": "2010",
        "value": 40632
      },
      {
        "name": "2000",
        "value": 36953
      },
      {
        "name": "1990",
        "value": 31476
      }
    ]
  },
  {
    "name": "United States",
    "series": [
      {
        "name": "2010",
        "value": 49737
      },
      {
        "name": "2000",
        "value": 45986
      },
      {
        "name": "1990",
        "value": 37060
      }
    ]
  },
  {
    "name": "France",
    "series": [
      {
        "name": "2010",
        "value": 36745
      },
      {
        "name": "2000",
        "value": 34774
      },
      {
        "name": "1990",
        "value": 29476
      }
    ]
  },
  {
    "name": "United Kingdom",
    "series": [
      {
        "name": "2010",
        "value": 36240
      },
      {
        "name": "2000",
        "value": 32543
      },
      {
        "name": "1990",
        "value": 26424
      }
    ]
  }
];

// time series
export const timemulti = [
  {
    "name": "Viet Nam",
    "series": [
      {
        "value": 5567,
        "name": "2016-09-24T04:03:15.436Z"
      },
      {
        "value": 6545,
        "name": "2016-09-21T01:26:22.031Z"
      },
      {
        "value": 6762,
        "name": "2016-09-19T03:38:22.421Z"
      },
      {
        "value": 5908,
        "name": "2016-09-15T00:53:46.902Z"
      },
      {
        "value": 2729,
        "name": "2016-09-22T16:45:53.039Z"
      }
    ]
  },
  {
    "name": "British Indian Ocean Territory",
    "series": [
      {
        "value": 5089,
        "name": "2016-09-24T04:03:15.436Z"
      },
      {
        "value": 2187,
        "name": "2016-09-21T01:26:22.031Z"
      },
      {
        "value": 5483,
        "name": "2016-09-19T03:38:22.421Z"
      },
      {
        "value": 2371,
        "name": "2016-09-15T00:53:46.902Z"
      },
      {
        "value": 6089,
        "name": "2016-09-22T16:45:53.039Z"
      }
    ]
  },
  {
    "name": "Equatorial Guinea",
    "series": [
      {
        "value": 2646,
        "name": "2016-09-24T04:03:15.436Z"
      },
      {
        "value": 4940,
        "name": "2016-09-21T01:26:22.031Z"
      },
      {
        "value": 6845,
        "name": "2016-09-19T03:38:22.421Z"
      },
      {
        "value": 2912,
        "name": "2016-09-15T00:53:46.902Z"
      },
      {
        "value": 2985,
        "name": "2016-09-22T16:45:53.039Z"
      }
    ]
  },
  {
    "name": "Georgia",
    "series": [
      {
        "value": 6705,
        "name": "2016-09-24T04:03:15.436Z"
      },
      {
        "value": 3842,
        "name": "2016-09-21T01:26:22.031Z"
      },
      {
        "value": 5420,
        "name": "2016-09-19T03:38:22.421Z"
      },
      {
        "value": 5944,
        "name": "2016-09-15T00:53:46.902Z"
      },
      {
        "value": 5424,
        "name": "2016-09-22T16:45:53.039Z"
      }
    ]
  },
  {
    "name": "Russia",
    "series": [
      {
        "value": 3321,
        "name": "2016-09-24T04:03:15.436Z"
      },
      {
        "value": 2382,
        "name": "2016-09-21T01:26:22.031Z"
      },
      {
        "value": 3166,
        "name": "2016-09-19T03:38:22.421Z"
      },
      {
        "value": 2918,
        "name": "2016-09-15T00:53:46.902Z"
      },
      {
        "value": 4028,
        "name": "2016-09-22T16:45:53.039Z"
      }
    ]
  }
];

export function generateData(seriesLength: number, includeMinMaxRange: boolean, dataPoints: number = 5): any[] {
  const results = [];

  const domain: Date[] = []; // array of time stamps in milliseconds

  for (let j = 0; j < dataPoints; j++) {
    // random dates between Sep 12, 2016 and Sep 24, 2016
    domain.push(new Date(Math.floor(1473700105009 + Math.random() * 1000000000)));
  }

  for (let i = 0; i < seriesLength; i++) {
    const country = countries[Math.floor(Math.random() * countries.length)];
    const series = {
      name: country.name,
      series: []
    };

    for (let j = 0; j < domain.length; j++) {
      const value = Math.floor(2000 + Math.random() * 5000);
      // let timestamp = Math.floor(1473700105009 + Math.random() * 1000000000);
      const timestamp = domain[j];
      if (includeMinMaxRange) {
        const errorMargin = 0.02 + Math.random() * 0.08;

        series.series.push({
          value,
          name: timestamp,
          min: Math.floor(value * (1 - errorMargin)),
          max: Math.ceil(value * (1 + errorMargin))
        });
      } else {
        series.series.push({
          value,
          name: timestamp
        });
      }
    }

    results.push(series);
  }
  return results;
}