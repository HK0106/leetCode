/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinish = function(numCourses, prerequisites) {
  const graph = {};
  
  // nead to read before read key
  for (const [a,b] of prerequisites) {
    
    if (!graph[a]) {
      graph[a] = [];
    }
    
    if (!graph[b]) {
      graph[b] = [];
    }
    
    graph[b].push(a)
  }
  
  //Init DFS
  let visiting = new Set();
  let visited = new Set();

  for (const node in graph) {
    if (hasCycle(node)) {
      return false;
    }
  }


  function hasCycle (node) {
    if (visiting.has(node)) {
      return true;
    }
    if (visited.has(node)) {
      return false;
    }
    visiting.add(node);

    for (let child of graph[node]) {
      if (hasCycle(child)) {
        return true;
      }
    }

    visiting.delete(node);
    visited.add(node);
    return false;
  }
  return true;
};



console.log(canFinish(5,[[1,4],[2,4],[3,1],[3,2]]), ': => Expect true');
console.log(canFinish(5,[[1,4],[2,4],[4,2],[3,1],[3,2]]), ': => Expect false');
console.log(canFinish(2,[[1,0],[0,1]]), ': => Expect false');
console.log(canFinish(2,[[1,0]]), ': => Expect true');
