

export const mergeSort = (arr) => {
    if(arr.length > 1){
        const leftSide = arr.slice(0, Math.floor(arr.length/2));
        const rightSide = arr.slice(Math.floor(arr.length/2));
        let leftSideSorted = mergeSort(leftSide);
        let rightSideSorted = mergeSort(rightSide);
        let sortedArray = []
        while(leftSideSorted.length && rightSideSorted.length){
            if(leftSideSorted[0] > rightSideSorted[0]){
                sortedArray.push(rightSideSorted.shift());
            }else{
                sortedArray.push(leftSideSorted.shift());
            }
        }
        sortedArray = sortedArray.concat(leftSideSorted, rightSideSorted);
        return sortedArray;
    }else{
        return arr;
    }
}

console.log(mergeSort([105, 79, 100, 110]));

