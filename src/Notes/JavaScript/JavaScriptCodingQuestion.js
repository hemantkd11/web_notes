import React from "react";

const CodingQuestion = () => {
  return (
    <div>
      <div>
        <div>
          <div>
            <p>
              <b>Question.</b> Find if number is <em>prime no. </em> or not ?
              <p>
                <b>Answer : -</b>
                <pre>
                  {`    // Function to check if a number is prime
        function isPrime(n) {
            if (n <= 1) return false;
            if (n <= 3) return true;
            if (n % 2 === 0 || n % 3 === 0) return false;
            for (let i = 5; i * i <= n; i += 6) {
                if (n % i === 0 || n % (i + 2) === 0) return false;
            }
            return true;
        }

        // Array of numbers
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

        // Filter the array to return only prime numbers
        const primes = numbers.filter(isPrime);

        console.log(primes); // Output: [2, 3, 5, 7]
    
                    `}
                </pre>
                <p>
                  <b>Explanation --</b>
                  step 1. In this first we have check if the coming number is
                  lessThen or = to 1 and
                </p>
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodingQuestion;
