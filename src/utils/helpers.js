

const helpers = {
    monthList : function(){
        
        return [ "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December" ]
    },
    formatDate : function(date){
        
        const today = new Date(date);
        const dd = String(today.getDate());
        const mm = String(today.getMonth() + 1);
        const yyyy = today.getFullYear().toString().substr(-2);
            
        return mm + '/' + dd + '/' + yyyy
    },
    currentDate : function(month){
        
        const today = new Date();
        const day = String(today.getDate());
        const dd = day > 1 ? day - 1 : day;
        const mm = String(today.getMonth() + 1);
        const yyyy = today.getFullYear().toString().substr(-2);
            
        return month === 'month' ? mm : mm + '/' + dd + '/' + yyyy
    },
    dateByMonth : function(mm){
        
        const today = new Date();
        const day = String(today.getDate());
        const dd = day > 1 ? day - 1 : day;
        // const mm = String(today.getMonth() + 1);
        const yyyy = today.getFullYear().toString().substr(-2);
            
        return mm + '/' + dd + '/' + yyyy
    },
    getFirstLastDay : function(date__) {
        
        var date = new Date(date__);
        var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
        var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
                
        return { 
            firstDay : helpers.formatDate(firstDay),
            lastDay : helpers.formatDate(lastDay)
        }

    }

}

 
export default helpers
