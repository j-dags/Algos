# Cyclic Sort

This pattern describes an approach to deal with problems invovlving arrays containning numbers in a given range. For example:

'You're given an unsorted array containing numbers taken from range 1 to n. The array can have duplicates, which mean some numbers will be missing. Find the missing numbers.'

To efficiently solve this, we use the fact that the array contains numbers in the range 1 to n. We attempt to place each number in its correct place, i.e. '1' at index 0, '2' at index 1, etc. Once we're done we find the missing indices.
