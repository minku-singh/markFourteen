const initialPriceRef = document.querySelector("#initial-price");
const stockQuantityRef = document.querySelector("#stock-quantity");
const currentPriceRef = document.querySelector("#current-price");
const msg = document.querySelector("#msg");
const tellMeRef = document.querySelector("#tell-me");

function showMsg(message, status){
    if(status === "fail"){
        msg.style.color = "red";
    }else if(status === "success"){
        msg.style.color = "green";
    }else{
        msg.style.color = "gray";
    }
    msg.style.display = "block";
    msg.innerText = message;
}

function findProfitAndLoss(initial, current, quantity){
    if(initial === "" || current === "" || quantity === ""){
        showMsg("Enter valid inputs!!");
        return;
    }

    initial = Number(initial);
    current = Number(current);
    quantity = Number(quantity);

    if(initial > current){
        var loss = (initial-current)*quantity;
        var loss_percent = ((loss/initial)*100).toFixed(2);
        showMsg(`😪 Oh oh, the loss is ${loss} with ${loss_percent}% loss percentage`, "fail")
    }else if(current > initial){
        var profit = (current-initial)*quantity;
        var profit_percent = ((profit/initial)*100).toFixed(2);
        showMsg(`🎉 Wowiee, the profit is ${profit} & profit percentage is ${profit_percent}%`, "success");
    }else{
        showMsg(`➡ No pain, No gain and No gain, No pain`);
    }
}

tellMeRef.addEventListener("click", () => findProfitAndLoss(initialPriceRef.value, currentPriceRef.value, stockQuantityRef.value));
