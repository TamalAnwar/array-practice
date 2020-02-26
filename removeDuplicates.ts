/**
 * This function will take an array of integers and remove duplicate integers
 * Sample array: [1, 2, 2, 3, 4, 4, 5]
 * Output array: [1, 2, 3, 4, 5]
 * @param array Takes an array
 * @returns array
 */

function removeDuplicate(array: number[]): number[] {
  // Collection object for checking duplicates
  var collection = {};

  // Run the array in reverse order
  for (let i = array.length; i >= 0; i--) {
    // If array already in collection (it's duplicate)
    // Remove from the array
    if (array[i] in collection) {
      array.splice(i, 1);
    } else {
      // Add the item into the collection
      collection[array[i]] = true;
    }
  }

  return array;
}
