const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
      data: [
        50,
        20,
        80,
        86,
        71,
        100
      ],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})` // optional
    },{
      data: [
        20,
        10,
        90,
        56,
        87,
        90
      ]
    },{
      data: [
        30,
        90,
        67,
        54,
        10,
        2
      ]
    }]
  }

  export { data }