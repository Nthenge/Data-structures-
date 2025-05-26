const vertexData = ['A','B','C','D'];

const adMatrix = [
    [0, 1, 1, 1],
    [1, 0, 1, 0],
    [1, 1, 0, 0],
    [1, 0, 0, 0]
]

function printAdMatrix(matrix){
    console.log("Adjacency Matrix:");
    matrix.forEach(row => {
        console.log(row);
    });
}

printAdMatrix(adMatrix);