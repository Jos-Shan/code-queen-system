// bar chart
const sample = [
    {
      language: '1',
      value: 78.9,
      color: '#000000'
    },
    {
      language: '2',
      value: 75.1,
      color: '#00a2ee'
    },
    {
      language: '3',
      value: 68.0,
      color: '#fbcb39'
    },
    {
      language: '4',
      value: 67.0,
      color: '#007bc8'
    },
    {
      language: '5',
      value: 65.6,
      color: '#65cedb'
    },
  ];

  const svg = d3.select('svg');
  const svgContainer = d3.select('#container');
  
  const margin = 80;
  const width = 800 - 2 * margin;
  const height = 600 - 2 * margin;

  const chart = svg.append('g')
    .attr('transform', `translate(${margin}, ${margin})`);

  const xScale = d3.scaleBand()
    .range([0, width])
    .domain(sample.map((s) => s.language))
    .padding(0.4)
  
  const yScale = d3.scaleLinear()
    .range([height, 0])
    .domain([0, 100]);

  
  const makeYLines = () => d3.axisLeft()
    .scale(yScale)

  chart.append('g')
    .attr('transform', `translate(0, ${height})`)
    .call(d3.axisBottom(xScale));

  chart.append('g')
    .call(d3.axisLeft(yScale));


  chart.append('g')
    .attr('class', 'grid')
    .call(makeYLines()
      .tickSize(-width, 0, 0)
      .tickFormat('')
    )

  const barGroups = chart.selectAll()
    .data(sample)
    .enter()
    .append('g')

  barGroups
    .append('rect')
    .attr('class', 'bar')
    .attr('x', (g) => xScale(g.language))
    .attr('y', (g) => yScale(g.value))
    .attr('height', (g) => height - yScale(g.value))
    .attr('width', xScale.bandwidth())
    .on('mouseenter', function (actual, i) {
      d3.selectAll('.value')
        .attr('opacity', 0)

      d3.select(this)
        .transition()
        .duration(300)
        .attr('opacity', 0.6)
        .attr('x', (a) => xScale(a.language) - 5)
        .attr('width', xScale.bandwidth() + 10)

      const y = yScale(actual.value)

      line = chart.append('line')
        .attr('id', 'limit')
        .attr('x1', 0)
        .attr('y1', y)
        .attr('x2', width)
        .attr('y2', y)

      barGroups.append('text')
        .attr('class', 'divergence')
        .attr('x', (a) => xScale(a.language) + xScale.bandwidth() / 2)
        .attr('y', (a) => yScale(a.value) + 30)
        .attr('fill', 'white')
        .attr('text-anchor', 'middle')
        .text((a, idx) => {
          const divergence = (a.value - actual.value).toFixed(1)
          
          let text = ''
          if (divergence > 0) text += '+'
          text += `${divergence}%`

          return idx !== i ? text : '';
        })

    })
    .on('mouseleave', function () {
      d3.selectAll('.value')
        .attr('opacity', 1)

      d3.select(this)
        .transition()
        .duration(300)
        .attr('opacity', 1)
        .attr('x', (a) => xScale(a.language))
        .attr('width', xScale.bandwidth())

      chart.selectAll('#limit').remove()
      chart.selectAll('.divergence').remove()
    })

  barGroups 
    .append('text')
    .attr('class', 'value')
    .attr('x', (a) => xScale(a.language) + xScale.bandwidth() / 2)
    .attr('y', (a) => yScale(a.value) + 30)
    .attr('text-anchor', 'middle')
    .text((a) => `${a.value}%`)
  
  svg
    .append('text')
    .attr('class', 'label')
    .attr('x', -(height / 2) - margin)
    .attr('y', margin / 2.4)
    .attr('transform', 'rotate(-90)')
    .attr('text-anchor', 'middle')
    .text('No. students (%)')

  svg.append('text')
    .attr('class', 'label')
    .attr('x', width / 2 + margin)
    .attr('y', height + margin * 1.7)
    .attr('text-anchor', 'middle')
    .text('Cohorts')

  svg.append('text')
    .attr('class', 'title')
    .attr('x', width / 2 + margin)
    .attr('y', 40)
    .attr('text-anchor', 'middle')
    .text('No. graduates per cohort')

  svg.append('text')
    .attr('class', 'source')
    .attr('x', width - margin / 2)
    .attr('y', height + margin * 1.7)
    .attr('text-anchor', 'start')
    .text('Source: Code Queen')



//student information

//dummie data

var data = [
  { "Name" : 'Nalumansi Margret', "age" : 22, "email": "nmargeret@gmail.com", "Phone": "0700326481", "Date of birth": "26/04/1982", "Cohort": 2, "Status": 'student', "HTML": " ", "CSS": " ", "JavaScript": " ", "Facilitator Rating":" ", "edit":"icon" },
  { "Name" : 'Mirembe Daniella', "age" : 33, "email": "nmargeret@gmail.com", "Phone": "0700326481", "Date of birth": "26/04/1982", "Cohort": 2, "Status": "student",  "HTML": " ", "CSS": " ", "JavaScript": " ", "Facilitator Rating":" ", "edit":"icon" },
  { "Name" : 'Kisaakye Danae', "age" : 33, "email": "nmargeret@gmail.com", "Phone": "0700326481", "Date of birth": "26/04/1982", "Cohort": 2, "Status": "student",  "HTML": " ", "CSS": " ", "JavaScript": " ", "Facilitator Rating":" ", "edit":"icon" },
  { "Name" : 'Nakasi sarah Mercy', "age" : 33, "email": "nmargeret@gmail.com", "Phone": "0700326481", "Date of birth": "26/04/1982", "Cohort": 2, "Status": "student", "HTML": " ", "CSS": " ", "JavaScript": " ", "Facilitator Rating":" ", "edit":"icon" },
  { "Name" : 'Nalumansi Florence', "age" : 33, "email": "nmargeret@gmail.com", "Phone": "0700326481", "Date of birth": "26/04/1982", "Cohort": 2, "Status": "student", "HTML": " ", "CSS": " ", "JavaScript": " ", "Facilitator Rating":" ", "edit":"icon" },
  { "Name" : 'Nabwami Patricia', "age" : 33, "email": "nmargeret@gmail.com", "Phone": "0700326481", "Date of birth": "26/04/1982", "Cohort": 2, "Status": "student", "HTML": " ", "CSS": " ", "JavaScript": " ", "Facilitator Rating":" ", "edit":"icon" },
  { "Name" : 'Nakyejwe Christine', "age" : 33, "email": "nmargeret@gmail.com", "Phone": "0700326481", "Date of birth": "26/04/1982", "Cohort": 2, "Status": "student", "HTML": " ", "CSS": " ", "JavaScript": " ", "Facilitator Rating":" ","edit":"icon" },
  { "Name" : 'Nabwanika Aisha', "age" : 33, "email": "nmargeret@gmail.com", "Phone": "0700326481", "Date of birth": "26/04/1982", "Cohort": 2, "Status": "student", "HTML": " ", "CSS": " ", "JavaScript": " ", "Facilitator Rating":" ", "edit":"icon" },
  { "Name" : 'Namutebi Daphne', "age" : 33, "email": "nmargeret@gmail.com", "Phone": "0700326481", "Date of birth": "26/04/1982", "Cohort": 2, "Status": "student", "HTML": " ", "CSS": " ", "JavaScript": " ", "Facilitator Rating":" ","edit":"icon" },
  { "Name" : 'Mbabazzi Doris Cynthia', "age" : 33, "email": "nmargeret@gmail.com", "Phone": "0700326481", "Date of birth": "26/04/1982", "Cohort": 2, "Status": "student", "HTML": " ", "CSS": " ", "JavaScript": " ", "Facilitator Rating":" ","edit":"icon" },
  { "Name" : 'Nalubega Geraldine', "age" : 33, "email": "nmargeret@gmail.com", "Phone": "0700326481", "Date of birth": "26/04/1982", "Cohort": 2, "Status": "student",  "HTML": " ", "CSS": " ", "JavaScript": " ", "Facilitator Rating":" ","edit":"icon" },
  { "Name" : 'Nalubega Christine', "age" : 33, "email": "nmargeret@gmail.com", "Phone": "0700326481", "Date of birth": "26/04/1982", "Cohort": 2, "Status": "student", "HTML": " ", "CSS": " ", "JavaScript": " ", "Facilitator Rating":" ","edit":"icon" },
]
		
function tabulate(data, columns) {
	var table = d3.select('#student-table').append('table')
	var thead = table.append('thead')
	var	tbody = table.append('tbody');

	// append the header row
	thead.append('tr')
	  .selectAll('th')
	  .data(columns).enter()
	  .append('th')
	    .text(function (column) { return column; });

	// create a row for each object in the data
	var rows = tbody.selectAll('tr')
	  .data(data)
	  .enter()
	  .append('tr');

	// create a cell in each row for each column
	var cells = rows.selectAll('td')
	  .data(function (row) {
	    return columns.map(function (column) {
	      return {column: column, value: row[column]};
	    });
	  })
	  .enter()
	  .append('td')
	    .text(function (d) { return d.value; });

  return table;
}

// render the tables
// tabulate(data, ['Name', 'age', 'Cohort', 'Status', 'edit']); // 2 column table
tabulate(data, [ "Name", "age", "email", "Phone", "Date of birth", "Cohort", "Status", "HTML", "CSS", "JavaScript", "Facilitator Rating", "edit"]); // table with only date column
// tabulate(data, ['close']); // table with only close column