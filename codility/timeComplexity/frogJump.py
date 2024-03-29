# A small frog wants to get to the other side of the road. The frog is currently located at position X and wants to get to a position greater than or equal to Y. The small frog always jumps a fixed distance, D.

# Count the minimal number of jumps that the small frog must perform to reach its target.

# Approach: Return the distance / jump distance rounded up.
# O(1)t | O(1)s


import math

def frogJump(X, Y, D):
    return math.ceil((Y - X) / D)
