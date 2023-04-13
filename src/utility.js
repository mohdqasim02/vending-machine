const bubbleSort = function(list) {
  const sortedList = list.slice(0);

  for (let i = 0; i < sortedList.length - 1; i++){
    for (let j = i + 1; j < sortedList.length; j++) {
      if (sortedList[i] > sortedList[j]){
        const firstNum = sortedList[i];
        sortedList[i] = sortedList[j];
        sortedList[j] = firstNum;
      }
    }
  }
  return sortedList;
}

exports.bubbleSort = bubbleSort;
