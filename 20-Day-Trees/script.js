// Print All Node Names in the Tree (Depth-First Order) 

function printTreeNodeNames(node, depth = 0) {
  console.log("  ".repeat(depth) + node.name);

  for (const child of node.children) {
    printTreeNodeNames(child, depth + 1);
  }
}

printTreeNodeNames(mediaTree);


// Count the Total Number of Nodes in the Tree 

function countTreeNodes(node) {
  let count = 1;

  for (const child of node.children) {
    count += countTreeNodes(child);
  }
  return count;
}

console.log(countTreeNodes(mediaTree));


// Print Only Leaf Nodes 

function printLeafNodes(node) {
  if (!node.children.length) console.log(node.name);
  for (const child of node.children) {
    printLeafNodes(child);
  }
}

printLeafNodes(mediaTree); 


// DOM: Print All Tag Names Inside document.documentElement (DFS) 

function printTreeNodeNames(node, depth = 0) {
  console.log("  ".repeat(depth) + node.localName);

  for (const child of node.children) {
    printTreeNodeNames(child, depth + 1);
  }
}

printTreeNodeNames(document.documentElement);
