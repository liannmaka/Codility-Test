# Codility-Test

# EXPLANATION
# The function alternates directions as required by the zigzag definition, resets the path length appropriately, and ensures the global maximum (maxZigzag) is updated correctly during the traversal.


# THE APPROACH TAKEN

# maxZigzag: Keeps track of the longest zigzag path found.
# findZigzagLength: A helper function to recursively calculate zigzag path lengths.

# Recursive Logic (findZigzagLength):

# Base Case: If node is null, stop recursion.
# Update maxZigzag with the maximum of its current value and the length of the zigzag path.
# If the last move was left:
# Continue zigzag to the right child, incrementing length.
# Reset the path length to 1 when moving to the left child.
# If the last move was right:
# Continue zigzag to the left child, incrementing length.
# Reset the path length to 1 when moving to the right child.

# Traversal:

# Start zigzag calculation from the root’s left child (T.l) assuming the previous direction was right.
# Start zigzag calculation from the root’s right child (T.r) assuming the previous direction was left.
# Return: After traversal, return the maxZigzag value.




