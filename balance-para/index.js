// there are just a few posibilities:
// too many closing, too many opening
// there is a closing without an opening

//we'll represent a opening paran with -1
// we'll represent closing with +1

const balancePara = str => {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case "(":
                counter--;
                break;
            case ")":
                counter++;
                if (counter > 0) return false;
        }
    }
    return counter === 0;
}

console.log(balancePara("((()))"));