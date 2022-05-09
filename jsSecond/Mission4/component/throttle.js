export default function throttle(callback,timerId, time=500){
    if(timerId)return;
        timerId =setTimeout(()=>{
            callback()
        },time)
    }