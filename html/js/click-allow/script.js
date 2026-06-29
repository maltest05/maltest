function triggerNotificationPrompt() {
  // Check if browser supports notifications
  if ('Notification' in window) {
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
      } else {
        console.log('Notification permission denied.');
      }
    });
  } else {
    console.log('Click "Allow"');
  }
}
