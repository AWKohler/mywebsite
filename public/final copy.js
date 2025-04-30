// =====================================================================
// FINAL.JS - Implementation of D3.js data visualization library
// =====================================================================
// This file implements the D3.js library to create interactive data visualizations
// for the final page of the website. D3.js is a JavaScript library for producing
// dynamic, interactive data visualizations in web browsers.
//
// Author: Aronne Kohler
// Date: April 22, 2025
// =====================================================================

// Wait for the DOM to be fully loaded before executing
document.addEventListener('DOMContentLoaded', function() {
    // =====================================================================
    // SECTION 1: Bar Chart Visualization
    // =====================================================================
    
    // This section creates a responsive bar chart showing programming language proficiency
    
    // Data representing programming language proficiency (scale 1-10)
    const languageData = [
        { language: "JavaScript", proficiency: 9 },
        { language: "TypeScript", proficiency: 8.5 },
        { language: "Python", proficiency: 7 },
        { language: "Java", proficiency: 6.5 },
        { language: "SQL", proficiency: 8 },
        { language: "HTML/CSS", proficiency: 9.5 },
        { language: "PHP", proficiency: 5 },
        { language: "C#", proficiency: 4 }
    ];
    
    // Set the dimensions and margins of the graph
    const margin = {top: 30, right: 30, bottom: 70, left: 60};
    const width = 800 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;
    
    // Create the SVG element
    const svg = d3.select("#language-chart")
        .append("svg")
        .attr("width", "100%")
        .attr("height", height + margin.top + margin.bottom)
        .attr("viewBox", `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
        .attr("preserveAspectRatio", "xMidYMid meet")
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);
    
    // Add title to the chart
    svg.append("text")
        .attr("x", width / 2)
        .attr("y", 0 - (margin.top / 2))
        .attr("text-anchor", "middle")
        .style("font-size", "16px")
        .style("font-weight", "bold")
        .text("Programming Language Proficiency");
    
    // X axis
    const x = d3.scaleBand()
        .range([0, width])
        .domain(languageData.map(d => d.language))
        .padding(0.2);
    
    svg.append("g")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x))
        .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-45)")
        .style("text-anchor", "end");
    
    // Y axis
    const y = d3.scaleLinear()
        .domain([0, 10])
        .range([height, 0]);
    
    svg.append("g")
        .call(d3.axisLeft(y));
    
    // Add Y axis label
    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left)
        .attr("x", 0 - (height / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("Proficiency Level (1-10)");
    
    // Create a color scale
    const colorScale = d3.scaleLinear()
        .domain([4, 10])
        .range(["#95a5a6", "#3498db"]);
    
    // Create the bars with animation
    svg.selectAll("bars")
        .data(languageData)
        .enter()
        .append("rect")
        .attr("x", d => x(d.language))
        .attr("y", height) // Start at the bottom for animation
        .attr("width", x.bandwidth())
        .attr("height", 0) // Start with height 0 for animation
        .attr("fill", d => colorScale(d.proficiency))
        .attr("rx", 4) // Rounded corners
        .attr("ry", 4)
        // Add animation
        .transition()
        .duration(800)
        .delay((d, i) => i * 100)
        .attr("y", d => y(d.proficiency))
        .attr("height", d => height - y(d.proficiency));
    
    // Add labels on top of each bar
    svg.selectAll(".label")
        .data(languageData)
        .enter()
        .append("text")
        .attr("class", "label")
        .attr("x", d => x(d.language) + x.bandwidth() / 2)
        .attr("y", d => y(d.proficiency) - 5)
        .attr("text-anchor", "middle")
        .text(d => d.proficiency)
        .style("font-size", "12px")
        .style("opacity", 0) // Start invisible for animation
        .transition()
        .duration(800)
        .delay((d, i) => i * 100 + 300)
        .style("opacity", 1); // Fade in
    
    
    // =====================================================================
    // SECTION 2: Interactive Pie Chart
    // =====================================================================
    
    // This section creates an interactive pie chart showing time spent on different development activities
    
    // Data representing time allocation for different development activities
    const timeData = [
        { activity: "School", percentage: 45 },
        { activity: "Coding Projects (Botflow)", percentage: 25 },
        { activity: "Learning New Technologies", percentage: 15 },
        { activity: "Design & Planning", percentage: 10 },
        { activity: "Other Activities", percentage: 5 }
    ];
    
    // Set the dimensions and margins for the pie chart
    const pieWidth = 500;
    const pieHeight = 400;
    const radius = Math.min(pieWidth, pieHeight) / 2 - 40;
    
    // Create the SVG element for the pie chart
    const pieSvg = d3.select("#time-chart")
        .append("svg")
        .attr("width", "100%")
        .attr("height", pieHeight)
        .attr("viewBox", `0 0 ${pieWidth} ${pieHeight}`)
        .attr("preserveAspectRatio", "xMidYMid meet")
        .append("g")
        .attr("transform", `translate(${pieWidth / 2}, ${pieHeight / 2})`);
    
    // Add title to the pie chart
    pieSvg.append("text")
        .attr("x", 0)
        .attr("y", -pieHeight / 2 + 20)
        .attr("text-anchor", "middle")
        .style("font-size", "16px")
        .style("font-weight", "bold")
        .text("Development Time Allocation");
    
    // Set up the pie chart
    const pie = d3.pie()
        .value(d => d.percentage);
    
    const data_ready = pie(timeData);
    
    // Create the arc generator
    const arc = d3.arc()
        .innerRadius(0)
        .outerRadius(radius);
    
    // Create a bigger arc for hover effect
    const arcHover = d3.arc()
        .innerRadius(0)
        .outerRadius(radius * 1.1);
    
    // Define a color palette
    const pieColors = d3.scaleOrdinal()
        .domain(timeData.map(d => d.activity))
        .range(d3.schemeCategory10);
    
    // Create the pie chart segments with animation and interactivity
    const segments = pieSvg.selectAll("pieces")
        .data(data_ready)
        .enter()
        .append("path")
        .attr("d", arc)
        .attr("fill", d => pieColors(d.data.activity))
        .attr("stroke", "white")
        .style("stroke-width", "2px")
        .style("opacity", 0.8) // Initially transparent for animation
        // Add hover effect
        .on("mouseover", function(event, d) {
            d3.select(this)
                .transition()
                .duration(200)
                .attr("d", arcHover)
                .style("opacity", 1);
            
            // Show tooltip
            tooltip.transition()
                .duration(200)
                .style("opacity", 0.9);
            
            tooltip.html(`${d.data.activity}: ${d.data.percentage}%`)
                .style("left", (event.pageX) + "px")
                .style("top", (event.pageY - 28) + "px");
        })
        .on("mouseout", function() {
            d3.select(this)
                .transition()
                .duration(200)
                .attr("d", arc)
                .style("opacity", 0.8);
            
            // Hide tooltip
            tooltip.transition()
                .duration(500)
                .style("opacity", 0);
        });
    
    // Add animation to the segments
    segments.transition()
        .duration(1000)
        .attrTween("d", function(d) {
            const i = d3.interpolate({startAngle: 0, endAngle: 0}, d);
            return function(t) { return arc(i(t)); };
        });
    
    // Create a tooltip
    const tooltip = d3.select("#time-chart")
        .append("div")
        .attr("class", "d3-tooltip")
        .style("opacity", 0);
        
    // Add percentage labels to the pie segments
    pieSvg.selectAll("allLabels")
        .data(data_ready)
        .enter()
        .append("text")
        .text(d => `${d.data.percentage}%`)
        .attr("transform", d => {
            const pos = arc.centroid(d);
            const midAngle = d.startAngle + (d.endAngle - d.startAngle) / 2;
            pos[0] = radius * 0.6 * (midAngle < Math.PI ? 1 : -1);
            return `translate(${pos})`;
        })
        .style("text-anchor", d => {
            const midAngle = d.startAngle + (d.endAngle - d.startAngle) / 2;
            return midAngle < Math.PI ? "start" : "end";
        })
        .style("font-size", "12px")
        .style("font-weight", "bold")
        .style("opacity", 0) // Initially invisible
        .transition()
        .delay(1000)
        .duration(500)
        .style("opacity", 1); // Fade in after pie animation
        
    // Add lines connecting labels to slices
    pieSvg.selectAll("allPolylines")
        .data(data_ready)
        .enter()
        .append("polyline")
        .attr("stroke", "black")
        .style("fill", "none")
        .attr("stroke-width", 1)
        .attr("points", d => {
            const posA = arc.centroid(d);
            const posB = arc.centroid(d);
            const posC = arc.centroid(d);
            const midAngle = d.startAngle + (d.endAngle - d.startAngle) / 2;
            posB[0] = radius * 0.8 * (midAngle < Math.PI ? 1 : -1);
            posC[0] = radius * 0.6 * (midAngle < Math.PI ? 1 : -1);
            return [posA, posB, posC];
        })
        .style("opacity", 0) // Initially invisible
        .transition()
        .delay(1000)
        .duration(500)
        .style("opacity", 0.5); // Fade in after pie animation
    
    // Create a legend
    const legend = pieSvg.selectAll(".legend")
        .data(data_ready)
        .enter()
        .append("g")
        .attr("class", "legend")
        .attr("transform", (d, i) => `translate(-${pieWidth/4}, ${i * 20 - 80})`);
        
    // Add colored rectangles to the legend
    legend.append("rect")
        .attr("width", 15)
        .attr("height", 15)
        .attr("fill", d => pieColors(d.data.activity))
        .style("opacity", 0) // Initially invisible
        .transition()
        .delay((d, i) => 1200 + i * 100)
        .duration(500)
        .style("opacity", 1); // Fade in
        
    // Add text to the legend
    legend.append("text")
        .attr("x", 20)
        .attr("y", 12)
        .text(d => d.data.activity)
        .style("font-size", "12px")
        .style("opacity", 0) // Initially invisible
        .transition()
        .delay((d, i) => 1200 + i * 100)
        .duration(500)
        .style("opacity", 1); // Fade in
    
    
    // =====================================================================
    // SECTION 3: Interactive Force Graph
    // =====================================================================
    
    // This section creates an interactive force-directed graph showing technology relationships
    
    // Data for the force graph - nodes represent technologies, links show relationships
    const graphData = {
        nodes: [
            { id: "JavaScript", group: 1 },
            { id: "TypeScript", group: 1 },
            { id: "React", group: 1 },
            { id: "Next.js", group: 1 },
            { id: "Node.js", group: 2 },
            { id: "Express", group: 2 },
            { id: "MongoDB", group: 3 },
            { id: "PostgreSQL", group: 3 },
            { id: "Tailwind", group: 4 },
            { id: "CSS", group: 4 },
            { id: "HTML", group: 4 },
            { id: "AWS", group: 5 },
            { id: "Vercel", group: 5 },
            { id: "Netlify", group: 5 },
            { id: "Git", group: 6 },
            { id: "GitHub", group: 6 }
        ],
        links: [
            { source: "JavaScript", target: "TypeScript", value: 8 },
            { source: "TypeScript", target: "React", value: 7 },
            { source: "React", target: "Next.js", value: 9 },
            { source: "JavaScript", target: "Node.js", value: 6 },
            { source: "Node.js", target: "Express", value: 8 },
            { source: "Express", target: "MongoDB", value: 5 },
            { source: "Express", target: "PostgreSQL", value: 5 },
            { source: "HTML", target: "CSS", value: 9 },
            { source: "CSS", target: "Tailwind", value: 7 },
            { source: "React", target: "Tailwind", value: 6 },
            { source: "Next.js", target: "Vercel", value: 8 },
            { source: "Node.js", target: "AWS", value: 5 },
            { source: "Git", target: "GitHub", value: 9 },
            { source: "JavaScript", target: "HTML", value: 4 },
            { source: "React", target: "Vercel", value: 4 },
            { source: "Next.js", target: "AWS", value: 3 }
        ]
    };
    
    // Set up dimensions for the force graph
    const graphWidth = 800;
    const graphHeight = 500;
    
    // Create the SVG element for the force graph
    const graphSvg = d3.select("#tech-graph")
        .append("svg")
        .attr("width", "100%")
        .attr("height", graphHeight)
        .attr("viewBox", `0 0 ${graphWidth} ${graphHeight}`)
        .attr("preserveAspectRatio", "xMidYMid meet");
    
    // Add title to the graph
    graphSvg.append("text")
        .attr("x", graphWidth / 2)
        .attr("y", 30)
        .attr("text-anchor", "middle")
        .style("font-size", "16px")
        .style("font-weight", "bold")
        .text("Technology Relationship Network");
    
    // Define node colors based on the group
    const nodeColors = d3.scaleOrdinal()
        .domain([1, 2, 3, 4, 5, 6])
        .range(["#3498db", "#2ecc71", "#e74c3c", "#f39c12", "#9b59b6", "#1abc9c"]);
    
    // Create the simulation
    const simulation = d3.forceSimulation(graphData.nodes)
        .force("link", d3.forceLink(graphData.links).id(d => d.id).distance(d => 100 - d.value * 5))
        .force("charge", d3.forceManyBody().strength(-200))
        .force("center", d3.forceCenter(graphWidth / 2, graphHeight / 2))
        .force("collision", d3.forceCollide().radius(50));
    
    // Create a group for the links
    const links = graphSvg.append("g")
        .selectAll("line")
        .data(graphData.links)
        .enter()
        .append("line")
        .attr("stroke-width", d => d.value / 2)
        .attr("stroke", "#999")
        .attr("stroke-opacity", 0.6);
    
    // Create a group for nodes
    const nodes = graphSvg.append("g")
        .selectAll("g")
        .data(graphData.nodes)
        .enter()
        .append("g")
        .call(d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended));
    
    // Add circles to nodes
    nodes.append("circle")
        .attr("r", 25)
        .attr("fill", d => nodeColors(d.group))
        .attr("stroke", "#fff")
        .attr("stroke-width", 2)
        .style("cursor", "grab")
        // Add hover effect
        .on("mouseover", function(event, d) {
            d3.select(this)
                .transition()
                .duration(200)
                .attr("r", 30);
                
            // Highlight connected links and nodes
            links.style("stroke", l => (l.source.id === d.id || l.target.id === d.id) ? "#333" : "#999")
                .style("stroke-opacity", l => (l.source.id === d.id || l.target.id === d.id) ? 1 : 0.2)
                .style("stroke-width", l => (l.source.id === d.id || l.target.id === d.id) ? l.value : l.value / 3);
                
            nodes.selectAll("circle")
                .style("opacity", n => isConnected(d, n) ? 1 : 0.2);
                
            nodes.selectAll("text")
                .style("opacity", n => isConnected(d, n) ? 1 : 0.2);
        })
        .on("mouseout", function() {
            d3.select(this)
                .transition()
                .duration(200)
                .attr("r", 25);
                
            // Reset links and nodes
            links.style("stroke", "#999")
                .style("stroke-opacity", 0.6)
                .style("stroke-width", d => d.value / 2);
                
            nodes.selectAll("circle")
                .style("opacity", 1);
                
            nodes.selectAll("text")
                .style("opacity", 1);
        });
    
    // Add text labels to nodes
    nodes.append("text")
        .text(d => d.id)
        .attr("text-anchor", "middle")
        .attr("dy", 4)
        .style("font-size", "10px")
        .style("font-weight", "bold")
        .style("pointer-events", "none") // Prevent text from interfering with drag
        .style("text-shadow", "0 0 3px white, 0 0 3px white, 0 0 3px white, 0 0 3px white");
    
    // Update positions during the simulation
    simulation.on("tick", () => {
        links
            .attr("x1", d => d.source.x)
            .attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x)
            .attr("y2", d => d.target.y);
        
        nodes
            .attr("transform", d => {
                // Keep nodes within bounds
                d.x = Math.max(30, Math.min(graphWidth - 30, d.x));
                d.y = Math.max(30, Math.min(graphHeight - 30, d.y));
                return `translate(${d.x}, ${d.y})`;
            });
    });
    
    // Functions for the drag behavior
    function dragstarted(event, d) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
        d3.select(this).select("circle").style("cursor", "grabbing");
    }
    
    function dragged(event, d) {
        d.fx = event.x;
        d.fy = event.y;
    }
    
    function dragended(event, d) {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
        d3.select(this).select("circle").style("cursor", "grab");
    }
    
    // Helper function to check if two nodes are connected
    function isConnected(a, b) {
        if (a.id === b.id) return true;
        
        return graphData.links.some(l => 
            (l.source.id === a.id && l.target.id === b.id) || 
            (l.source.id === b.id && l.target.id === a.id)
        );
    }
    
    // Add explanatory text
    d3.select("#tech-graph")
        .append("div")
        .attr("class", "graph-instructions")
        .html("<p><strong>Interactive Graph:</strong> Drag nodes to rearrange. Hover over a node to see its connections.</p>");
    
    // Add legend for node groups
    const graphLegend = graphSvg.append("g")
        .attr("transform", `translate(${graphWidth - 150}, 60)`);
        
    const legendData = [
        { group: 1, label: "Frontend JS" },
        { group: 2, label: "Backend" },
        { group: 3, label: "Databases" },
        { group: 4, label: "UI/Design" },
        { group: 5, label: "Deployment" },
        { group: 6, label: "Version Control" }
    ];
    
    // Add legend items
    legendData.forEach((item, i) => {
        const legendItem = graphLegend.append("g")
            .attr("transform", `translate(0, ${i * 20})`);
            
        legendItem.append("rect")
            .attr("width", 12)
            .attr("height", 12)
            .attr("fill", nodeColors(item.group));
            
        legendItem.append("text")
            .attr("x", 20)
            .attr("y", 10)
            .text(item.label)
            .style("font-size", "10px");
    });
    
    // =====================================================================
    // Responsive Design Adjustments
    // =====================================================================
    
    // Handle window resize
    window.addEventListener('resize', function() {
        // Redraw charts if needed
    });
});