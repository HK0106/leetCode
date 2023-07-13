//Link: https://leetcode.com/problems/find-eventual-safe-states/


/**
 * @param {number[][]} graph
 * @return {number[]}
 */
const eventualSafeNodes = function(graph) {
  const visit = new Array(graph.length).fill(0);
  const res = [];
  const dfs = (node) => {
    if (visit[node] === 1 ) return false;
    if (visit[node] === 2 ) return true;

    visit[node] = 1;

    for (let edge of graph[node]) {
      if (!dfs(edge)) {
        return false;
      }
    }

    visit[node] = 2;
    return true;
  }
  for (let i = 0; i < graph.length; i++) {
    if (dfs(i)) {
      res.push(i);
    }
  }

  return res;
};


console.log(eventualSafeNodes([[1,2],[2,3],[5],[0],[5],[],[]]))


//[[1,3,4],[2,1],[],[0],[5],[]]