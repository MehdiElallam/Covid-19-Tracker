

const helpers = {
    monthList : function(){
        
        return [ "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December" ]
    },
    currentDate : function(){
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const dd = day > 1 ? day - 1 : day;
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const yyyy = today.getFullYear().toString().substr(-2);
            
        return mm + '/' + dd + '/' + yyyy
    }
}

 
export default helpers
