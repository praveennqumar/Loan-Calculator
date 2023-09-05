const loanamountinput = document.querySelector(".loan-amount");
const interestrateinput = document.querySelector(".Interest-rate");
const tenureinput = document.querySelector(".loan-tenure");

const loanemivalue = document.querySelector(".loan-emi .value")
const totalinterestvalue = document.querySelector(".total-interest .value")
const totalamountvalue = document.querySelector(".total-amount .value")

const calculatebtn = document.querySelector(".calculate-btn");

let loanamount = parseFloat(loanamountinput.value)
let interestrate = parseFloat(interestrateinput.value)
let loantenure = parseFloat(tenureinput.value)

let interest = interestrate/12/100;

const calculateEMI = ()=>{
    let EMI = loanamount*interest*
    (Math.pow(1+interest,loantenure)/(Math.pow(1+interest,loantenure)-1));
    return EMI;
}

const updatevalue =( emi)=>{
        loanemivalue.innerHTML = Math.round(emi);

        let totalvalue = Math.round(loantenure*emi);
        totalamountvalue.innerHTML =  totalvalue;

        let totalinterest= Math.round( totalvalue-loanamount);
        totalinterestvalue.innerHTML = totalinterest;
}
const refreshinput = ()=>{
loanamount = parseFloat(loanamountinput.value)
interestrate = parseFloat(interestrateinput.value)
loantenure = parseFloat(tenureinput.value)

interest = interestrate/12/100;
};

const init = ()=>{
    refreshinput();
    const emi = calculateEMI();
    updatevalue(emi);
}

init();

calculatebtn.addEventListener("click",init);