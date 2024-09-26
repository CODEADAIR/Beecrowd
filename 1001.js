// Read two integer variables from input
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputs = [];

rl.on('line', (input) => {
    inputs.push(parseInt(input));
    if (inputs.length === 2) {
        const A = inputs[0];
        const B = inputs[1];
        
        // Calculate the sum and assign it to variable X
        const X = A + B;
        
        // Print the result in the required format
        console.log(`X = ${X}`);
        
        // Close the input stream
        rl.close();
    }
}); 
