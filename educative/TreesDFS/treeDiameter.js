/*
Given a binary tree, find the length of its diameters. The diameter of a tree is the number of nodes on the longest path between any two leaf nodes. The diameter of a tree may or may not pass through the route.

Approach: Traverse through the tree in a DFS manner and keep track of depth as we treverse (but in reverse order, i.e. a leaf has a depth of 1, the node above has a depth 2, etc.). The max diameter will be the node with the two greatest depths of children summed together.

*/
