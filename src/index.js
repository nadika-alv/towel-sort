
// You should implement your task here.

module.exports = function towelSort(matrix) {
    // В одномерный массив
    // console.log(matrix);
    if ((!matrix) || (matrix.length === 0)) {
        return []
    } else {
        let arr = [];
        let el;
    
        for (let i = 0; i < matrix.length; i++) {
            if (matrix[i].length > 0) {
                if (i % 2 === 0) {
                    for (let j = 0; j<matrix[i].length; j++) {
                        arr.push(matrix[i][j]);
                    }
                } else {
                    for (let j = matrix[i].length-1; j >= 0; j--) {
                        arr.push(matrix[i][j]);
                    }
                }   
            }
        }
    
        
           
    return arr;
    }
}
