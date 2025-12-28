function ask() {
  Notification.requestPermission().then(p => {
    if (p === "granted") {
      new Notification("通知已開啟");
    }
  });
}
