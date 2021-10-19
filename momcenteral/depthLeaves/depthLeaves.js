var maxDepth = function(arr) {
  if (arr == false || !arr) {
      return 0
  }
  if (arr[1] == false && arr[2] == false) {
      return 1
  } else {
      var l = maxDepth(arr[1])
      var r = maxDepth(arr[2])
      if (l > r) {
          return 1 + l
      } else {
          return 1 + r
      }
  }
}


var getLeafCountsAtDepth = function(arr, depth, count, n) {
  console.log("getLeafCountsAtDepth", n)
  count = count + 1
  n =  n
  if (arr == false || !arr) {
      return n
  }
  if (arr[1] == false && arr[2] == false) {
      console.log(count, 'c', depth, 'd')
      if (count == depth) {
          n = n + 1
          console.log(n, 'iiii')
      }
      return n
  } else {
      getLeafCountsAtDepth(arr[1], depth, count, n)
      getLeafCountsAtDepth(arr[2], depth, count, n)
      return n
  }
}
let leafNodes = [];
let treeDepth = 0;

let leafCount = (arr, branch) => {
	if (!arr || (arr.length && arr.length === 0)) {
		return;
	}
	if (arr[1] === false && arr[2] === false) {
		console.log('pushing', branch);
		leafNodes.push(branch);
		if (treeDepth < branch) {
			treeDepth = branch;
		}
		return;
	} else {
		branch = branch + 1;
		leafCount(arr[1], branch);
		leafCount(arr[2], branch);
	} 
}

const run = (tree1) => {
	leafCount(tree1, 1);
	console.log(leafNodes, treeDepth)
	totalLeaves = 0;
	leafNodes.forEach(x => {
		if (x === treeDepth) {
			totalLeaves ++;
		}
	});
	console.log('totalLeaves', totalLeaves);
  return totalLeaves
}

module.exports = {
  maxDepth: maxDepth,
  getLeafCountsAtDepth: getLeafCountsAtDepth,
  run: run
};
