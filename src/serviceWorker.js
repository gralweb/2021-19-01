const serviceWorker = () => {
    const swUrl = `${process.env.PUBLIC_URL}/serviceWorker.js`

    window.addEventListener('load', () => {
        if (navigator.serviceWorker) {
            if (!navigator.serviceWorker.controller) {
                navigator.serviceWorker.register(swUrl).then(resp => {
                    console.log(resp)
                })
            }
        }
    })
}

export default serviceWorker