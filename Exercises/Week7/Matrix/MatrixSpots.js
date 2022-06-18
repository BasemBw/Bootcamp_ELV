//spot check 2
for(let i = 0; i<matrix.length ;i++){
    for(let j = 0;j<matrix[i].length;j++ ){
        console.log(matrix[i][j])
    }
}
//spot check 3
function get(rowNum,colNum){
      return matrix[rowNum][colNum]
}

//spot check 4

function print(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        let line = ""
        for (let j = 0; j < matrix[i].length; j++) {
            line += (matrix[i][j] + "\t")
        }
        console.log(line)
    }
}

//spot check 5 

function printColumn(matrix, colNum) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i][colNum])
    }
}