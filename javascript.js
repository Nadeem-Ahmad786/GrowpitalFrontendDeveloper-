const details ={
        AccountName: "Current Account",
        BankBalance: "XXXXX",
        transactionamount: 15000,
        transactiondate: "2022-08-12 15:55",
        PaymentType: {
            Id: "X",
            Name: "Bank to Wallet Transfer"
        },
        senderDetails : {
        sender: "Saurabh Sharma",
        bank : "SBI",
        IFSC: "SBIN016095",
        accountno: "xxxxxxxxx5736",
        transactiondate : "2022-08-12 15:55",
        },
        recieverDetails : {
        reciever: "Saurabh Sharma",
        wallet : "Growpital Wallet ",
        referenceno: "DBTR/222201998174",
        transactiondate : "2022-08-12 15:55",
        },
        paymentmethod: "UPI",
        transactionId: "DBTR/222201998174"
}
    let aMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const date = new Date("2022-08-12 15:55");
    let time = date.toLocaleTimeString();
    time = time.slice(0,4) + time.slice(8);
    document.getElementById("transactionAmount").innerHTML = "&#x20b9;" + details.transactionamount;
    let transactionTime = date.getDate() + " " + aMonths[date.getMonth()] + " "+ date.getFullYear() + ", " + time ;
    let date_ = document.getElementsByClassName("date");
    date_[0].innerHTML = transactionTime;
    date_[1].innerHTML = transactionTime;
    date_[2].innerHTML = transactionTime;
    document.getElementById("senderName").innerHTML = details.senderDetails.sender;
    document.getElementById("senderBank").innerHTML = details.senderDetails.bank + " IFSC " + details.senderDetails.IFSC + "<br>" +"A/c No. " + details.senderDetails.accountno;
    document.getElementById("recieverName").innerHTML = details.recieverDetails.reciever;
    document.getElementById("recieverWallet").innerHTML = details.recieverDetails.wallet + "<br>" + "Ref No. " + details.recieverDetails.referenceno;
    document.getElementById("paymentMethod").innerHTML =  "Payment Method: " + details.paymentmethod +"<br>" + "Transaction ID: " + details.transactionId;
