//Two ways the graph data can be stored.
// Adjacency Matrix 
//      A  B   C  D
//   A  0  1   0  1
//   B  1  1   0  1
//   C  0  0   1  1
//   D  1  1   0  1
// *************************************
// Adjacency List
//   {
//      A: [B,A],
//      B: [A,D],
//      C: [A],
//      D: [B]
//    }
class Graph {
    constructor() {
        this.adjacencyListGraph = {}
    }

    addvertex(vertex){
        if (!this.adjacencyListGraph[vertex]) this.adjacencyListGraph[vertex] = [];
    }

    addedge(vertex1, vertex2) {
        this.adjacencyListGraph[vertex1].push(vertex2);
        this.adjacencyListGraph[vertex2].push(vertex1);
    }

    removeedge(vertex1, vertex2) {
       this.adjacencyListGraph[vertex1] = this.adjacencyListGraph[vertex1].filter(vertex => vertex !== vertex2);
       this.adjacencyListGraph[vertex2] = this.adjacencyListGraph[vertex2].filter(vertex => vertex !== vertex1);
    }

    // 3 loops here
    removevertex(vert) {
        var adjacencyList = this.adjacencyListGraph;
        for(var vertex in adjacencyList) {
            //console.log("vertex is ---" +vertex+"   vertex in adjacencyList---", adjacencyList[vertex]);
            var index = adjacencyList[vertex].indexOf("A");
            if (index !== -1) {
                adjacencyList[vertex].splice(index,1);
            }
        }
        delete this.adjacencyListGraph[vert];
    }

    // Udemy Solution (single loop)
    removeVertex_udemy(vertex){
        while(this.adjacencyListGraph[vertex].length){
            const adjacentVertex = this.adjacencyListGraph[vertex].pop();
            this.removeedge(vertex, adjacentVertex);
        }
        delete this.adjacencyListGraph[vertex]
    }
}

var graph = new Graph();
graph.addvertex("A");
graph.addvertex("B");
graph.addvertex("C");
graph.addvertex("D");
graph.addvertex("E");
graph.addedge("A", "B");
graph.addedge("A", "D");
graph.addedge("B", "C");
graph.addedge("C", "D");
graph.addedge("C", "E");
graph.addedge("D", "B");
graph.addedge("D", "E");