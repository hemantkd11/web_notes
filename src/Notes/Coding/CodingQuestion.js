import React from "react";

const CodingNotes = () => {
  return (
    <div>
      <div>
        <div>
          {/* start  */}
          <div>
            <h3>Question 1: -- Find the Longest Palandrom from the string</h3>
            <p>
              <pre>{`
                
                `}</pre>
            </p>
          </div>
          {/* end */}
          {/* start  */}
          <div>
            <h3>Question 1: --replace string woth# and Remove Vovels </h3>
            <p>
              <pre>{`
                function ReplaceChar(A) {
                    let newSrt = A + A;
                    console.log(newSrt);
                    str = "";
                    for (let i = 0; i < newSrt.length; i++) {
                    if (newSrt[i] >= "A" && newSrt[i] <= "Z") {
                        continue;
                    } else if (
                        newSrt[i] === "a" ||
                        newSrt[i] === "e" ||
                        newSrt[i] === "i" ||
                        newSrt[i] === "o" ||
                        newSrt[i] === "u"
                    ) {
                        str += "#";
                    } else {
                        str += newSrt[i];
                    }
                    }
                    console.log(str);
                    }

                    ReplaceChar("aeiOUz");

                `}</pre>
            </p>
          </div>
          {/* end */}
        </div>
      </div>
    </div>
  );
};
