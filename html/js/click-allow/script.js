function triggerNotificationPrompt() {

    if (!("Notification" in window)) {

        alert("This browser doesn't support notifications.");

        return;

    }

    Notification.requestPermission().then(function(permission){

        if(permission === "granted"){

            console.log("Notification permission granted.");

        }
        else if(permission === "denied"){

            console.log("Notification permission denied.");

        }
        else{

            console.log("Notification dismissed.");

        }

    });

}
