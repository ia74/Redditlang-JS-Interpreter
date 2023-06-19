module.exports = () => {
    const today = new Date().getDay();
    if(today == 1) {
    // It's monday.
    // Because this is JavaScript, I'm not too sure how to segfault it intentionally.
    // Simulation inbound.
    num = Math.floor(Math.random() * 1)
    console.log(num)
    if(num > 0.5) {
        
        return;
    }
    console.log('Segmentation fault (core dumped)');
    process.exit(1);
    } else {
        return;
    }
}